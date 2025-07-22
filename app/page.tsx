'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaUsers, FaBook, FaArrowRight, FaLightbulb, FaSearch, FaChartBar, FaFlask, FaBookOpen, FaBullseye } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useState } from 'react';

// Separate ImageCard component without file upload functionality
function ImageCard() {
  const imageSrc = '/images/WhatsApp Image 2025-04-11 at 15.19.08_cbd134e0.jpg';

  return (
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
            src={imageSrc}
            alt="Research image"
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
  );
}

export default function Home() {
  // Define the floating icons array
  const floatingIcons = [
    <FaBook key="book" />,
    <FaFlask key="microscope" />,
    <FaGraduationCap key="grad" />,
    <FaBookOpen key="bookopen" />,
    <FaLightbulb key="lightbulb" />,
    <FaGlobe key="globe" />,
    <FaSearch key="search" />,
    <FaChartBar key="chart" />,
    <FaFlask key="flask" />,
    <FaBook key="dna" />,
    <FaBookOpen key="bookopen2" />,
    <FaBullseye key="bullseye" />
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020B1C] via-[#041536] to-[#061F4E] overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Multi-layered grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d2e_1px,transparent_1px),linear-gradient(to_bottom,#1a365d2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb1a_1px,transparent_1px),linear-gradient(to_bottom,#2563eb1a_1px,transparent_1px)] bg-[size:96px_96px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#020B1C]/90 via-[#041536]/60 to-[#061F4E]/70" />
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Enhanced Floating Research Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-300/20 hover:text-blue-300/40 transition-colors duration-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0.7, 0.4, 0],
                scale: [0.8, 1.1, 1, 1.1, 0.8],
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 16 + 12}px`,
              }}
            >
              {floatingIcons[i]}
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                501(c)3 Nonprofit Organization
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="text-white block mb-2">Ebhath</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient block">
                  Research
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 animate-gradient block">
                  Organization
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl font-semibold text-blue-200">
                  Do Research
                </p>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Breaking language barriers in scientific education. Empowering underrepresented communities with research resources in their native languages.
                </p>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=M3V67TGZLAMDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-10 py-5 rounded-2xl text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <span className="relative z-10">Support Our Mission</span>
                  <motion.span
                    className="relative z-10 ml-3"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight className="inline-block" />
                  </motion.span>
                </a>

                <Link
                  href="/research-programs"
                  className="group relative inline-flex items-center px-10 py-5 rounded-2xl text-lg font-bold bg-white/5 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 transform hover:scale-105"
                >
                  <span className="relative z-10">Explore Programs</span>
                  <span className="relative z-10 ml-3 group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>

              {/* Enhanced Language Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Available Languages</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    { lang: 'Arabic', flag: '🇸🇦', status: 'active' },
                    { lang: 'Filipino', flag: '🇵🇭', status: 'active' },
                    { lang: 'Swahili', flag: '🇰🇪', status: 'active' },
                    // { lang: 'Portuguese', flag: '🇧🇷', status: 'coming' },
                    // { lang: 'Hindi', flag: '🇮🇳', status: 'coming' }
                  ].map((item, i) => (
                    <motion.span
                      key={item.lang}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                      className={`group relative px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-300 hover:scale-105 ${
                        item.status === 'active'
                          ? 'text-blue-200 bg-blue-500/10 border-blue-400/30 hover:bg-blue-500/20 hover:border-blue-400/50'
                          : 'text-gray-400 bg-gray-500/10 border-gray-400/20 hover:bg-gray-500/20'
                      }`}
                    >
                      <span className="mr-2">{item.flag}</span>
                      {item.lang}
                      {item.status === 'coming' && (
                        <span className="ml-2 text-xs opacity-60">(Soon)</span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

     {/* Enhanced Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative group">
                {/* Animated background elements */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
                
                {/* Main image container */}
                <motion.div
                  className="relative z-10 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 p-8">
                    <Image
                      src="/images/Ebhath_Official_Logo-08.png"
                      alt="Ebhath Research Organization"
                      width={500}
                      height={400}
                      className="object-contain w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/50 rounded-tr-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase"
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative group cursor-pointer"
          >
            <div className="w-8 h-14 rounded-full border-2 border-white/20 group-hover:border-blue-400/50 flex items-start justify-center p-2 transition-colors duration-300 backdrop-blur-sm">
              <motion.div 
                className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-blue-400/70 transition-colors duration-300"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <AnimatedSection className="py-32 bg-gradient-to-b from-gray-900 via-[#0B1221] to-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming research education across languages and cultures worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: 3, label: "Courses Available", icon: "📚", suffix: "", description: "Comprehensive research programs" },
              { number: 1400, label: "Enrolled Students", icon: "🎓", suffix: "+", description: "Global learners empowered" },
              { number: 6, label: "Team Members", icon: "👥", suffix: "", description: "Dedicated professionals" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Animated background glow */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-[#0B1221]/80 to-[#162544]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-blue-400/30 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Icon */}
                  <motion.div 
                    className="text-center mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="inline-block text-6xl lg:text-7xl mb-2 filter drop-shadow-lg">
                      {stat.icon}
                    </span>
                  </motion.div>
                  
                  {/* Number */}
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                        <CountUp
                          end={stat.number}
                          duration={3}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        {stat.suffix}
                      </div>
                      <motion.div 
                        className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Label and description */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {stat.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-400/30 group-hover:border-purple-400/60 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Publications Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
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
              <div className="text-6xl mb-6">📚</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
              <p className="text-gray-400 text-lg">
                We are working on publishing our research findings and educational materials. Stay tuned for updates!
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ERP Scholars Section */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ebhath Research Program (ERP)</h2>
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
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden bg-gray-700/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎓</div>
                    <p className="text-gray-400">Scholar photos coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </AnimatedSection>

      {/* Hidden Application Section - Keep for future use */}
      {/* 
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
      */}

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
            <div className="lg:col-span-1">
              <ImageCard />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
