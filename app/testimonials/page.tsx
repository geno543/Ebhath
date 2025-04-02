'use client';

import AnimatedSection from '../../components/AnimatedSection';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "When I started learning research, I noticed a significant gap in resources in my language, Arabic. As an Egyptian, I found it overwhelming to rely solely on English sources. Ebhath was instrumental truly, and it was the reason I got into the Pioneer Research Program. During the interview, I found myself recalling the insights shared by the Arabic course instructor.",
    name: "Research Student",
    role: "Program Participant",
    location: "Arabic Program"
  },
  {
    text: "I appreciate you getting in touch with me and your kind remarks. It is truly an honour to know people from the next generation, like you, and I wish you the best of luck in the future. I have faith that our beloved nation and humanity will both prosper in the future.",
    name: "Amal Amin",
    role: "Founder and chair of Women in Science without Borders",
    location: "Egypt"
  },
  {
    text: "I've been desperately needing you for two years! I'm endlessly grateful!",
    name: "Research Student",
    role: "Program Participant",
    location: "Arabic Program"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <FaQuoteLeft className="text-blue-600 w-8 h-8 mb-4" />
      <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-blue-600">{testimonial.role}</p>
        <p className="text-gray-500 text-sm">{testimonial.location}</p>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      {/* Testimonials Header */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Testimonials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our students about their experiences with Ebhath's research education programs.
        </p>
      </AnimatedSection>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* Impact Statistics */}
      <AnimatedSection className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1,400+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">3</h3>
              <p className="text-gray-600">Languages Offered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg mb-8">
            Start your research journey today and become part of our success stories.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBSunQxaTr2M9TvHkHmf6-WnJi4516JtPK7XJQx5MFthZdiA/viewform"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Enroll Now
          </a>
        </div>
      </AnimatedSection>
    </main>
  );
}
