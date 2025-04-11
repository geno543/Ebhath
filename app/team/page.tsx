'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaYoutube ,FaGithub} from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Mohammed Mashhour',
    role: 'Founder/Arabic course instructor.',
    bio: 'Egypt',
    image: '/images/team/ebhathMohamed.png', // Local image path
    socialLinks: {
      youtube: 'https://youtube.com/@MohammedMashhour',
      instagram: 'https://instagram.com/m.mashhour',
      // github: 'https://github.com/MohammedMashhour'
    }
  },
  {
    id: 2,
    name: 'Jake Yap',
    role: 'Filipino course instructor',
    bio: 'Philippines',
    image: '/images/team/jake.png', // Local image path
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jakeyap',
      facebook: 'https://facebook.com/jakeyap.teach'
    }
  },
  {
    id: 3,
    name: 'Olive Stanley',
    role: 'Swahili course instructor',
    bio: 'Tanzania',
    image: '/images/team/ebhatholive.png', // Local image path
    socialLinks: {
      twitter: 'https://twitter.com/olivestanley',
      instagram: 'https://instagram.com/olive.swahili'
    }
  },
  {
    id: 4,
    name: 'Omar Negm',
    role: 'Chief media officer',
    bio: 'Egypt',
    image: '/images/team/negm.png', // Local image path
    socialLinks: {
      // twitter: 'https://twitter.com/olivestanley',
      // instagram: 'https://instagram.com/olive.swahili'
    }
  },{
    id: 6,
    name: 'Mohamed Ramadan',
    role: 'Web Manager',
    bio: 'Egypt',
    image: '/images/team/geno.png', // Local image path
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mohamed-ramadan-551a17272/',
      github: 'https://github.com/geno543'
    }
  },
   {
    id: 5,
    name: 'Mohammed Dahman',
    role: 'Program Director',
    bio: 'Egypt',
    image: '/images/team/dahman.jpeg', // Local image path
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammed-dahman-34868927a/',
      // github: 'https://github.com/MohammedMashhour'
    }
  },
];

export default function TeamPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-white py-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Meet Our Team
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Our diverse team of research experts is dedicated to providing the best learning experience for our students.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card Background Blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-[#1E293B] rounded-2xl p-6 border border-blue-500/20 group-hover:border-blue-400 transition-all duration-300">
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur group-hover:blur-lg transition-all duration-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 128px, 128px"
                    priority={member.id === 1}
                    className="relative w-full h-full object-cover rounded-full ring-4 ring-[#1E293B]"
                  />
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.socialLinks.youtube && (
                    <a
                      href={member.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                    >
                      <FaYoutube className="w-5 h-5" />
                    </a>
                  )} {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Join the Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented research experts to join our team and help make scientific research accessible to everyone.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />
        </motion.div>
      </section>
    </main>
  );
}
