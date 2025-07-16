'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import Image from 'next/image';

export default function ResearchPrograms() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020B1C] via-[#041536] to-[#061F4E]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d2e_1px,transparent_1px),linear-gradient(to_bottom,#1a365d2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#020B1C]/80 via-[#041536]/50 to-[#061F4E]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive research programs designed to advance scientific knowledge and education across different languages and cultures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program 1: Ebhath Foundation */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18.5 12H17v6H7v-6H5.5L12 5.5z"/>
                    <rect x="9" y="14" width="2" height="4"/>
                    <rect x="13" y="14" width="2" height="4"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Ebhath Foundation</h2>
                  <p className="text-blue-400">Educational Research Initiative</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                The Ebhath Foundation is our flagship program dedicated to closing the educational gap in scientific research resources. 
                We offer comprehensive courses in underrepresented languages, making scientific knowledge accessible to diverse communities worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Courses available in Arabic, Filipino, and Swahili</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Expanding to Portuguese and Indian languages</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">501(c)3 nonprofit organization</p>
                </div>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src="/images/Ebhath_foundation.jpg"
                    alt="Ebhath Foundations Program Logo"
                    width={300}
                    height={192}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <div className="hidden">
                    <div className="mb-4">
                      <svg className="w-20 h-20 text-blue-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18.5 12H17v6H7v-6H5.5L12 5.5z"/>
                        <rect x="9" y="14" width="2" height="4"/>
                        <rect x="13" y="14" width="2" height="4"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Foundation Logo</h3>
                    <p className="text-gray-400">Please add efp-logo.png to /public/images/</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Program 2: Ebhath Research Program (ERP) */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src="/images/Ebhath research program-03.png"
                    alt="Ebhath Research Program Logo"
                    width={300}
                    height={192}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <div className="hidden">
                    <div className="mb-4">
                      <svg className="w-20 h-20 text-purple-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.5 2C8.67 2 8 2.67 8 3.5S8.67 5 9.5 5 11 4.33 11 3.5 10.33 2 9.5 2M12 4C11.45 4 11 4.45 11 5S11.45 6 12 6 13 5.55 13 5 12.55 4 12 4M14.5 2C13.67 2 13 2.67 13 3.5S13.67 5 14.5 5 16 4.33 16 3.5 15.33 2 14.5 2M12 7C10.9 7 10 7.9 10 9V10.5L8.5 12L10 13.5V15C10 16.1 10.9 17 12 17S14 16.1 14 15V13.5L15.5 12L14 10.5V9C14 7.9 13.1 7 12 7M12 8.5C12.28 8.5 12.5 8.72 12.5 9V15C12.5 15.28 12.28 15.5 12 15.5S11.5 15.28 11.5 15V9C11.5 8.72 11.72 8.5 12 8.5M7 18V20H17V18L15 16H9L7 18Z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">ERP Logo</h3>
                    <p className="text-gray-400">Please add erp-logo.png to /public/images/</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 2C8.67 2 8 2.67 8 3.5S8.67 5 9.5 5 11 4.33 11 3.5 10.33 2 9.5 2M12 4C11.45 4 11 4.45 11 5S11.45 6 12 6 13 5.55 13 5 12.55 4 12 4M14.5 2C13.67 2 13 2.67 13 3.5S13.67 5 14.5 5 16 4.33 16 3.5 15.33 2 14.5 2M12 7C10.9 7 10 7.9 10 9V10.5L8.5 12L10 13.5V15C10 16.1 10.9 17 12 17S14 16.1 14 15V13.5L15.5 12L14 10.5V9C14 7.9 13.1 7 12 7M12 8.5C12.28 8.5 12.5 8.72 12.5 9V15C12.5 15.28 12.28 15.5 12 15.5S11.5 15.28 11.5 15V9C11.5 8.72 11.72 8.5 12 8.5M7 18V20H17V18L15 16H9L7 18Z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Ebhath Research Program</h2>
                  <p className="text-purple-400">Advanced Research Initiative</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                The Ebhath Research Program (ERP) is our advanced initiative that brings together dedicated scholars 
                to conduct cutting-edge research and contribute to the global scientific community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">12 active scholars currently participating</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Multidisciplinary research approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Focus on educational innovation and accessibility</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Publications Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Publications</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our research publications and academic contributions to the scientific community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <div className="mb-6">
                <svg className="w-16 h-16 text-blue-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M17 7H7V9H17V7M17 11H7V13H17V11M14 15H7V17H14V15Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
              <p className="text-gray-400 text-lg">
                We are working on publishing our research findings and educational materials. 
                Stay tuned for updates on our upcoming publications!
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ERP Scholars Showcase */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ERP Scholars</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet our dedicated scholars who are advancing research in their respective fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Scholars</h3>
                <p className="text-gray-400 text-lg mb-6">
                  We currently have 12 dedicated scholars participating in the Ebhath Research Program, 
                  contributing to various research projects and educational initiatives.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-blue-400">12</div>
                  <div className="text-gray-300">Active Scholars</div>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Scholar Showcase</h3>
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden bg-gray-700/50 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-purple-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9L12 15L21 12.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                    </svg>
                    <p className="text-gray-400">Scholar photos coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}