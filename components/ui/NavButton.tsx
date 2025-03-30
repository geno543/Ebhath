'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const NavButton = ({ href, children, variant = 'primary', className = '' }: NavButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavButton;
