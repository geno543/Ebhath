'use client';

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import AnimatedSection from '../../components/AnimatedSection';
import ApplicationForm from '../../components/ui/ApplicationForm';

export default function Apply() {
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState<'member' | 'mentor' | null>(null);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'member' || type === 'mentor') {
      setSelectedType(type);
    }
  }, [searchParams]);

  const renderSelectionScreen = () => (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Member Option */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => setSelectedType('member')}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Apply as a Member</h2>
            <p className="text-gray-300">
              Join our program to learn research methodology in your native language and become part of our global research community.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Access to research courses
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Native language instruction
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Community support
              </li>
            </ul>
            <button className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mentor Option */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => setSelectedType('mentor')}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Apply as a Mentor</h2>
            <p className="text-gray-300">
              Share your expertise and help bridge the language gap in research education by becoming a mentor.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Make a global impact
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Share your expertise
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Join our teaching team
              </li>
            </ul>
            <button className="w-full mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderForm = () => (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${
          selectedType === 'member' ? 'from-blue-600/20 to-blue-400/20' : 'from-purple-600/20 to-purple-400/20'
        } rounded-2xl blur-xl`} />
        <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${
          selectedType === 'member' ? 'border-blue-500/20' : 'border-purple-500/20'
        } rounded-2xl p-8`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Apply as a {selectedType === 'member' ? 'Member' : 'Mentor'}
            </h2>
            <button
              onClick={() => setSelectedType(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
          <ApplicationForm type={selectedType} />
        </div>
      </motion.div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Research Community
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're looking to learn or share your expertise, we have a place for you in our growing community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Section */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedType === null ? renderSelectionScreen() : renderForm()}
        </div>
      </AnimatedSection>
    </main>
  );
}