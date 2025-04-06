'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '../../components/AnimatedSection';
import { FaGraduationCap, FaGlobe, FaBook, FaUsers, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';

export default function About() {
  const milestones = 
    [
      { year: "2023", title: "Foundation", description: "Ebhath was established with a vision to break language barriers in research education." },
      { year: "2023", title: "First Courses", description: "Launched our first research courses in Arabic and Filipino, marking the beginning of our efforts." },
      { year: "2024", title: "Growth", description: "Expanded to include courses in Swahili and reached 1,500+ students." },
      { year: "2025", title: "Expansion", description: "Launched Egypt’s Ebhath Research Program, integrating both Arabic and English in research education." }
  ]
  
;

  const values = [
    {
      icon: FaGraduationCap,
      title: "Quality Education",
      description: "Delivering world-class research methodology courses"
    },
    {
      icon: FaGlobe,
      title: "Global Access",
      description: "Breaking down language barriers in education"
    },
    {
      icon: FaBook,
      title: "Rich Content",
      description: "Comprehensive curriculum in native languages"
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Building a network of global researchers"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Guidance",
      description: "Learn from experienced research professionals"
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description: "Fostering international research partnerships"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B1221]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d2e_1px,transparent_1px),linear-gradient(to_bottom,#1a365d2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-12 flex justify-center">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop"
                  alt="Research Education"
                  width={800}
                  height={500}
                  className="rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 to-transparent" />
              </motion.div>

              {/* Decorative Images */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
                  alt="Educational Background 1"
                  width={300}
                  height={200}
                  className="rounded-lg opacity-50 blur-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2070&auto=format&fit=crop"
                  alt="Educational Background 2"
                  width={300}
                  height={200}
                  className="rounded-lg opacity-50 blur-sm"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 left-1/4 z-30"
              >
                <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 right-1/4 z-30"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur-xl" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-30 max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Empowering Research Education
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Breaking barriers in research education through inclusive, accessible, and quality learning experiences.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8"
              >
                <motion.a
                  href="/courses"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Learning
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-[#0B1221] to-[#162544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-[#1E293B] rounded-2xl p-8 border border-blue-500/20 group-hover:border-blue-400 transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300" />
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                  Making scientific research education accessible across languages.                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-[#1E293B] rounded-2xl p-8 border border-purple-500/20 group-hover:border-purple-400 transition-all duration-300">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-300" />
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                  A world where language is no longer a barrier to scientific knowledge.                 </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>


      {/* Timeline */}
      <AnimatedSection className="py-24 bg-gradient-to-b from-[#0B1221] to-[#162544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative bg-[#1E293B] rounded-xl p-6 border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
                          <span className="text-blue-400 font-bold text-lg">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-white mt-2">{milestone.title}</h3>
                          <p className="text-gray-400 mt-2">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full" />
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-[#0B1221]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-[#1E293B] rounded-3xl p-12 border border-blue-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experienced in Research? Start Your Journey Today!</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join Egypt's Ebhath Research Program and start educating in Arabic Language.
                </p>
                <motion.a
                  href="/courses"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Apply Now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
