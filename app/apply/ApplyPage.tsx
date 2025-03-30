'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import AnimatedSection from '../../components/AnimatedSection';
import ApplicationForm from '../../components/ui/ApplicationForm';

export default function ApplyPage() {
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
          </div>
        </div>
      </motion.div>

      {/* Mentor Option */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={() => setSelectedType('mentor')}
        className="relative group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Apply as a Mentor</h2>
            <p className="text-gray-300">
              Share your expertise and help shape the next generation of researchers while contributing to global research accessibility.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Teaching opportunities
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Research collaboration
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Global impact
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Research Community
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your path and become part of our mission to make research methodology education accessible in native languages worldwide.
            </p>
          </div>

          {selectedType ? (
            <ApplicationForm type={selectedType} onBack={() => setSelectedType(null)} />
          ) : (
            renderSelectionScreen()
          )}
        </div>
      </AnimatedSection>
    </main>
  );
}
