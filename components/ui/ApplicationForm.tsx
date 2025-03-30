'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../../lib/firebase';
import { collection, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { AES, enc } from 'crypto-js';

// Encryption key for local storage
const STORAGE_KEY = 'form_data_backup';
const ENCRYPTION_KEY = 'ebhath-form-secure-key';

// Rate limiting
const RATE_LIMIT_KEY = 'form_submissions';
const MAX_SUBMISSIONS = 3; // Max submissions per hour
const SUBMISSION_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Helper functions
const encryptData = (data: any) => {
  return AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
};

const decryptData = (encryptedData: string) => {
  try {
    const bytes = AES.decrypt(encryptedData, ENCRYPTION_KEY);
    return JSON.parse(bytes.toString(enc.Utf8));
  } catch (error) {
    console.error('Failed to decrypt data:', error);
    return null;
  }
};

const sanitizeInput = (input: string) => {
  return input.replace(/<[^>]*>/g, '').trim();
};

const checkRateLimit = () => {
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  const now = Date.now();
  const recentSubmissions = submissions.filter((time: number) => now - time < SUBMISSION_WINDOW);
  return recentSubmissions.length < MAX_SUBMISSIONS;
};

const updateRateLimit = () => {
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
  const now = Date.now();
  const recentSubmissions = submissions.filter((time: number) => now - time < SUBMISSION_WINDOW);
  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
};

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface ApplicationFormProps {
  type: 'member' | 'mentor';
}

const researchAreas = [
  { category: 'Biology', areas: ['General Biology', 'Computational Biology', 'Biochemistry', 'Biochemical Engineering'] },
  { category: 'Physics', areas: ['General Physics', 'Computational Physics', 'Fluid Dynamics', 'Astronomy'] },
  { category: 'Mathematics', areas: ['Mathematics', 'Number Theory'] },
  { category: 'Engineering', areas: ['Engineering', 'Combustion'] },
  { category: 'Computer Science', areas: ['Machine Learning', 'Data Science', 'Computer Science'] },
  { category: 'Other Sciences', areas: ['Chemistry', 'Environmental Science', 'Social Sciences', 'Business'] }
];

const ApplicationForm = ({ type }: ApplicationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    [key: string]: any;
    email: string;
  }>({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    citizenship: '',
    phoneNumber: '',
    collegeName: '',
    gradeLevel: '',
    // Research Preferences
    firstChoice: '',
    secondChoice: '',
    thirdChoice: '',
    researchExperience: '',
    // Commitments
    commitments: '',
    hoursPerWeek: '',
    workSample: null as File | null,
    // Additional Information
    essay: ''
  });

  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const gradeLevelOptions = ['G9', 'G10', 'G11', 'G12', 'Undergraduate'];
  
  // Field descriptions for better user guidance
  const fieldDescriptions = {
    firstName: 'Enter your legal first name',
    lastName: 'Enter your legal last name',
    dateOfBirth: 'Must be at least 15 years old',
    gender: 'Select your gender identity',
    email: 'Enter a valid email address',
    citizenship: 'Enter your country of citizenship',
    phoneNumber: 'Include country code (e.g., +1 for USA)',
    collegeName: 'Enter the full name of your School/university',
    gradeLevel: 'Select your current academic level',
    firstChoice: 'Select your primary research area of interest',
    secondChoice: 'Select your secondary research area of interest (optional)',
    thirdChoice: 'Select your tertiary research area of interest (optional)',
    researchExperience: 'Describe any previous research experience (if none, write "None")',
    commitments: 'List any other academic or professional commitments',
    hoursPerWeek: 'Number of hours you can commit per week (10-40)',
    workSample: 'Upload a relevant work sample (PDF, DOC, or DOCX, max 10MB)',
    essay: 'Explain why you want to join and what you hope to achieve (minimum 200 words)'
  };

  // Validation rules
  const validateField = (field: string, value: any): string | null => {
    switch (field) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email format';
      case 'phoneNumber':
        return /^\+?[\d\s-]{8,}$/.test(value) ? null : 'Invalid phone number format';
      case 'hoursPerWeek':
        const hours = Number(value);
        return hours >= 10 && hours <= 40 ? null : 'Hours must be between 10 and 40';
      case 'workSample':
        if (!value) return null;
        const file = value as File;
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        
        if (!validTypes.includes(file.type)) {
          return 'Please upload a PDF, DOC, or DOCX file';
        }
        
        if (file.size > maxSize) {
          const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
          return `File size (${sizeMB}MB) exceeds the 10MB limit`;
        }
        
        // File is valid
        return null;
      case 'essay':
        const words = value.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        return wordCount >= 200 ? null : `Essay must be at least 200 words (currently: ${wordCount} words)`;
      default:
        return value ? null : 'This field is required';
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saving' | 'saved' | 'error' | 'loading'>('saved');
  const [draftLoaded, setDraftLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const decryptedData = decryptData(savedData);
        if (decryptedData) {
          setFormData(prev => ({
            ...prev,
            ...decryptedData.formData
          }));
          if (decryptedData.currentStep) {
            setCurrentStep(decryptedData.currentStep);
          }
        }
      } catch (error) {
        console.error('Error loading from local storage:', error);
      }
    }
  }, []);

  // Save to local storage when form data changes
  useEffect(() => {
    const dataToSave = {
      formData: {
        ...formData,
        workSample: null // Don't save file data to local storage
      },
      currentStep
    };
    try {
      localStorage.setItem(STORAGE_KEY, encryptData(dataToSave));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }, [formData, currentStep]);

  // Load saved draft when email changes
  useEffect(() => {
    const loadDraft = async () => {
      if (formData.email && !draftLoaded) {
        setAutoSaveStatus('loading');
        try {
          const formCollection = collection(db, 'form');
          const docRef = doc(formCollection, formData.email);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            // Only restore if it's a draft
            if (data.metadata?.status === 'draft') {
              // Restore the current step if saved
              if (data.metadata?.currentStep) {
                setCurrentStep(data.metadata.currentStep);
              }
              setFormData(prev => ({
                ...prev,
                firstName: data.personal_info?.first_name || '',
                lastName: data.personal_info?.last_name || '',
                dateOfBirth: data.personal_info?.date_of_birth || '',
                gender: data.personal_info?.gender || '',
                citizenship: data.personal_info?.citizenship || '',
                phoneNumber: data.personal_info?.phone_number || '',
                collegeName: data.personal_info?.college_name || '',
                gradeLevel: data.personal_info?.grade_level || '',
                firstChoice: data.research_preferences?.first_choice || '',
                secondChoice: data.research_preferences?.second_choice || '',
                thirdChoice: data.research_preferences?.third_choice || '',
                researchExperience: data.research_preferences?.research_experience || '',
                commitments: data.commitments?.details || '',
                hoursPerWeek: data.commitments?.hours_per_week?.toString() || '',
                essay: data.essay || ''
              }));
              setDraftLoaded(true);
              setAutoSaveStatus('saved');
            }
          }
        } catch (error) {
          console.error('Error loading draft:', error);
          setAutoSaveStatus('error');
        }
      }
    };

    if (formData.email) {
      loadDraft();
    }
  }, [formData.email]);

  // Auto-save functionality
  useEffect(() => {
    const saveTimeout = setTimeout(async () => {
      if (formData.email) {
        try {
          setAutoSaveStatus('saving');
          const formCollection = collection(db, 'form');
          const docRef = doc(formCollection, formData.email);
          await setDoc(docRef, {
            personal_info: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              date_of_birth: formData.dateOfBirth,
              gender: formData.gender,
              email: formData.email,
              citizenship: formData.citizenship,
              phone_number: formData.phoneNumber,
              college_name: formData.collegeName,
              grade_level: formData.gradeLevel,
            },
            research_preferences: {
              first_choice: formData.firstChoice,
              second_choice: formData.secondChoice,
              third_choice: formData.thirdChoice,
              research_experience: formData.researchExperience,
            },
            commitments: {
              details: formData.commitments,
              hours_per_week: Number(formData.hoursPerWeek) || 0,
              work_sample: null, // Don't auto-save file data
            },
            essay: formData.essay,
            metadata: {
              application_type: type,
              submitted_from: 'web',
              last_modified: serverTimestamp(),
              status: 'draft',
              currentStep
            }
          }, { merge: true });
          setAutoSaveStatus('saved');
        } catch (error) {
          console.error('Auto-save error:', error);
          setAutoSaveStatus('error');
        }
      }
    }, 2000); // Save after 2 seconds of no typing

    return () => clearTimeout(saveTimeout);
  }, [formData, type]);


  // Define form steps
  const steps = [
    {
      title: 'Personal Information',
      fields: ['firstName', 'lastName', 'dateOfBirth', 'gender', 'email', 'citizenship', 'phoneNumber', 'collegeName', 'gradeLevel']
    },
    {
      title: 'Research Preferences',
      fields: ['firstChoice', 'secondChoice', 'thirdChoice', 'researchExperience']
    },
    {
      title: 'Commitments',
      fields: ['commitments', 'hoursPerWeek', 'workSample']
    },
    {
      title: 'Additional Information',
      fields: ['essay']
    }
  ];

  // Validation function for each step
  const validateStep = (step: number) => {
    const currentStepFields = steps[step - 1].fields;
    const requiredFields = currentStepFields.filter(field => 
      field !== 'workSample' && field !== 'secondChoice' && field !== 'thirdChoice'
    );

    const isValid = requiredFields.every(field => {
      const value = formData[field as keyof typeof formData];
      return value !== '' && value !== null;
    });

    if (!isValid) {
      setSubmitError('Please fill in all required fields.');
      return false;
    }

    return true;
  };

  if (type === 'member') {
    return (
      <div className="text-center p-8 bg-blue-500/10 rounded-lg border border-blue-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Applications Coming Soon</h3>
        <p className="text-gray-300">
          Member applications are currently closed. Please check back later for updates.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate current step
    if (!validateStep(currentStep)) {
      return;
    }
    
    // Move to next step if not on final step
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      return;
    }

    // Check rate limit before submission
    if (!checkRateLimit()) {
      setSubmitError('Too many submissions. Please try again in an hour.');
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');

    try {
      // Sanitize text inputs
      const sanitizedFormData = {
        ...formData,
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        citizenship: sanitizeInput(formData.citizenship),
        phoneNumber: sanitizeInput(formData.phoneNumber),
        collegeName: sanitizeInput(formData.collegeName),
        researchExperience: sanitizeInput(formData.researchExperience),
        commitments: sanitizeInput(formData.commitments),
        essay: sanitizeInput(formData.essay)
      };

      let workSampleData = null;
      
      // Convert work sample to base64 if provided
      if (formData.workSample) {
        try {
          const buffer = await formData.workSample.arrayBuffer();
          const base64 = Buffer.from(buffer).toString('base64');
          workSampleData = {
            filename: formData.workSample.name,
            type: formData.workSample.type,
            data: base64
          };
        } catch (uploadError: any) {
          console.error('File processing error:', uploadError);
          throw new Error('File processing failed. Please try again.');
        }
      }

      // Prepare form data for submission
      const submissionData = {
        personal_info: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          date_of_birth: new Date(formData.dateOfBirth).toISOString(),
          gender: formData.gender,
          email: formData.email,
          citizenship: formData.citizenship,
          phone_number: formData.phoneNumber,
          college_name: formData.collegeName,
          grade_level: formData.gradeLevel,
        },
        research_preferences: {
          first_choice: formData.firstChoice,
          second_choice: formData.secondChoice,
          third_choice: formData.thirdChoice,
        },
        commitments: {
          details: formData.commitments,
          hours_per_week: Number(formData.hoursPerWeek),
          work_sample: workSampleData,
        },
        essay: formData.essay,
        metadata: {
          application_type: type,
          submitted_from: 'web',
          submitted_at: new Date().toISOString(),
        }
      };

      // Validate essay length
      if (submissionData.essay.length < 50) {
        throw new Error('Please provide a more detailed response for the essay question.');
      }

      // Submit to Firestore
      try {
        // Create form submission using email as document ID
        const formCollection = collection(db, 'form');
        const docRef = doc(formCollection, formData.email);
        await setDoc(docRef, {
          personal_info: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            date_of_birth: formData.dateOfBirth,
            gender: formData.gender,
            email: formData.email,
            citizenship: formData.citizenship,
            phone_number: formData.phoneNumber,
            college_name: formData.collegeName,
            grade_level: formData.gradeLevel,
          },
          research_preferences: {
            first_choice: formData.firstChoice,
            second_choice: formData.secondChoice,
            third_choice: formData.thirdChoice,
            research_experience: formData.researchExperience,
          },
          commitments: {
            details: formData.commitments,
            hours_per_week: Number(formData.hoursPerWeek),
            work_sample: workSampleData,
          },
          essay: formData.essay,
          metadata: {
            application_type: type,
            submitted_from: 'web',
            submitted_at: serverTimestamp(),
            status: 'pending',
            created_at: serverTimestamp()
          }
        });

        console.log('Document written with ID: ', docRef.id);
      } catch (firestoreError: any) {
        console.error('Firestore error:', firestoreError);
        throw new Error('Failed to save application to database.');
      }

      // Update rate limit
      updateRateLimit();

      // Clear local storage and reset form
      localStorage.removeItem(STORAGE_KEY);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        citizenship: '',
        phoneNumber: '',
        collegeName: '',
        gradeLevel: '',
        firstChoice: '',
        secondChoice: '',
        thirdChoice: '',
        researchExperience: '',
        commitments: '',
        hoursPerWeek: '',
        workSample: null,
        essay: ''
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      // Set more specific error message
      const errorMessage = error.message || 'There was an error submitting your application.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl mx-auto relative px-4 sm:px-6 md:px-8">
      {/* Auto-save Status */}
      <div className="absolute top-0 right-0 text-sm flex items-center gap-2 bg-gray-900/50 p-2 rounded-lg backdrop-blur-sm">
        {autoSaveStatus === 'loading' && (
          <>
            <span className="text-blue-400">Loading draft...</span>
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </>
        )}
        {autoSaveStatus === 'saving' && (
          <>
            <span className="text-blue-400">Saving draft...</span>
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </>
        )}
        {autoSaveStatus === 'saved' && formData.email && (
          <>
            <span className="text-green-400">Draft saved</span>
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </>
        )}
        {autoSaveStatus === 'error' && (
          <>
            <span className="text-red-400">Failed to save draft</span>
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`text-sm text-center ${
                currentStep === index + 1
                  ? 'text-blue-400 font-medium'
                  : index < currentStep
                    ? 'text-green-400'
                    : 'text-gray-400'
              }`}
            >
              <span className="hidden sm:inline">{step.title}</span>
              <span className="sm:hidden">Step {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <div className="space-y-8 sm:space-y-6">
        {steps[currentStep - 1].fields.map((field) => {
          const error = validateField(field, formData[field as keyof typeof formData]);
          
          return (
            <div key={field} className="space-y-2">
              <label htmlFor={field} className="block text-sm font-medium text-gray-200">
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                {field !== 'secondChoice' && field !== 'thirdChoice' && field !== 'workSample' && (
                  <span className="text-red-400 ml-1">*</span>
                )}
              </label>
              
              {/* Field description */}
              <p className="text-sm text-gray-400">{fieldDescriptions[field as keyof typeof fieldDescriptions]}</p>

              {/* Field input */}
              {field === 'gender' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData] as string}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  {genderOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : field === 'gradeLevel' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData] as string}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select grade level</option>
                  {gradeLevelOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : field === 'firstChoice' || field === 'secondChoice' || field === 'thirdChoice' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData] as string}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select research area</option>
                  {researchAreas.map(category => (
                    <optgroup key={category.category} label={category.category}>
                      {category.areas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              ) : field === 'essay' || field === 'researchExperience' || field === 'commitments' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData] as string}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={field === 'essay' ? 'Minimum 200 words...' : ''}
                />
              ) : (
                <input
                  type={
                    field === 'dateOfBirth' ? 'date' :
                    field === 'workSample' ? 'file' :
                    field === 'email' ? 'email' :
                    field === 'hoursPerWeek' ? 'number' :
                    field === 'phoneNumber' ? 'tel' :
                    'text'
                  }
                  id={field}
                  name={field}
                  value={field === 'workSample' ? undefined : formData[field as keyof typeof formData] as string}
                  onChange={(e) => {
                    const value = field === 'workSample'
                      ? (e.target as HTMLInputElement).files?.[0] || null
                      : e.target.value;
                    setFormData(prev => ({ ...prev, [field]: value }));
                  }}
                  min={field === 'hoursPerWeek' ? 10 : undefined}
                  max={field === 'hoursPerWeek' ? 40 : undefined}
                  accept={field === 'workSample' ? '.pdf,.doc,.docx' : undefined}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}

              {/* Field error */}
              {error && (
                <p className="text-sm text-red-400 mt-1">{error}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mt-8">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {currentStep === steps.length ? (
            isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )
          ) : (
            <>
              <span>Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
        >
          {submitError || 'There was an error submitting your application. Please try again.'}
        </motion.div>
      )}

      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
        >
          Your application has been submitted successfully!
        </motion.div>
      )}
    </form>
  );
};

export default ApplicationForm;
