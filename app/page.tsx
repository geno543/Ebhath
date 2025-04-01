'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaUsers, FaBook, FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020B1C] via-[#041536] to-[#061F4E] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          Research-themed pattern background
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d2e_1px,transparent_1px),linear-gradient(to_bottom,#1a365d2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#020B1C]/80 via-[#041536]/50 to-[#061F4E]/50" />
        </div>

        Floating Research Elements
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                color: 'rgba(147, 197, 253, 0.15)',
              }}
            >
              {['📚', '🔬', '🎓', '📝', '💡', '🌍', '🔍', '📊'][i]}
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left"
            >

              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="text-white">Ebhath</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 animate-gradient">
                Research Organization
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-5xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Do Research
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfBSunQxaTr2M9TvHkHmf6-WnJi4516JtPK7XJQx5MFthZdiA/viewform"
                  className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group"
                >
                  Join Now
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="inline-block" />
                  </motion.span>
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-white/10 text-white hover:bg-white/20 transition duration-300 backdrop-blur-sm group"
                >
                  View Courses
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>

              {/* Language Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {['Arabic', 'Filipino', 'Swahili'].map((lang, i) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-sm text-blue-200 bg-blue-500/10 rounded-full border border-blue-400/20"
                  >
                    {lang}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element */}
           
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: 3, label: "Courses Available", icon: "📚", suffix: "" },
              { number: 1400, label: "Enrolled Students", icon: "🎓", suffix: "+" },
              { number: 6, label: "Team Members", icon: "👥", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                </div>
                <div className="relative bg-[#0B1221] backdrop-blur-sm border border-[#1E293B] rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-center space-y-4">
                    <motion.span 
                      className="inline-block text-5xl mb-2"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat.icon}
                    </motion.span>
                    <div className="relative">
                      <div className="text-5xl font-bold text-blue-300">
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        {stat.suffix}
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur group-hover:blur-md transition-all duration-300" />
                    </div>
                    <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
                    
                    {/* Menu dots */}
                    <div className="absolute top-4 right-4">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Research Program</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our global community of researchers and unlock your potential with our comprehensive research education platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "👨‍🎓",
                title: "Apply as a Member",
                description: "Join our program to learn research methodology in your native language",
                gradient: "from-blue-500/20 to-blue-400/20",
                href: "/apply?type=member",
                cta: "Apply Now"
              },
              {
                icon: "👨‍🏫",
                title: "Apply as a Mentor",
                description: "Share your expertise and help bridge the language gap in research education",
                gradient: "from-purple-500/20 to-purple-400/20",
                href: "/apply?type=mentor",
                cta: "Join as Mentor"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                <Link href={feature.href} className="block h-full">
                  <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-300">
                    <div className="space-y-4">
                      <span className="inline-block text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      <button className="mt-6 w-full px-6 py-3 bg-blue-500/20 text-blue-300 rounded-lg font-medium hover:bg-blue-500/30 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                        {feature.cta}
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-[#0B1221] to-[#162544]">
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
              <div className="inline-block">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About Us
                </motion.h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ebhath is a fiscally sponsored official 501(c)3 nonprofit dedicated to closing the educational gap in scientific research resources by offering courses in underrepresented languages for underrepresented minorities. In 2023, Ebhath began working to bridge this gap in the Arabic language, and we are currently expanding our efforts to include Filipino and Swahili. We are currently recruiting mentors to develop courses in Portuguese and Indian languages, although translation and recording in these languages have not yet commenced.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a 
                  href="/about" 
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>

              {/* Stats or Additional Info */}
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Our Mission</h4>
                  <p className="text-gray-400">Making scientific research education accessible across languages.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
                  <p className="text-gray-400">A world where language is no longer a barrier to scientific knowledge.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl transform rotate-3 scale-105 blur-xl" />
              <div className="relative bg-[#162544] rounded-3xl p-6 border border-blue-500/20">
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop"
                    alt="Research Education"
                    width={2070}
                    height={1380}
                    className="object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
