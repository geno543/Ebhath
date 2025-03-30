'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo = ({ variant = 'light', className = '' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-blue-600';
  
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
    >
      <motion.span
        className={`text-2xl font-bold ${textColor} relative z-10`}
        variants={{
          hover: {
            y: -2,
            transition: { duration: 0.3 }
          }
        }}
      >
        Ebhath
      </motion.span>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300"
        variants={{
          hover: {
            scaleX: 1,
            opacity: 1,
            transition: { duration: 0.3 }
          }
        }}
        initial={{ scaleX: 0, opacity: 0 }}
      />
    </motion.div>
  );
};

export default Logo;
