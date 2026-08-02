'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { DONATE_URL, FOUNDATION_PROGRAM_FORM } from '../lib/links';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research-programs', label: 'Programs' },
  { href: '/courses', label: 'Courses' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A1120]/95 border-white/10 backdrop-blur'
          : 'bg-[#0A1120]/70 border-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Ebhath_logo_herosection.png"
              alt="Ebhath"
              width={160}
              height={60}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3 py-2 text-sm transition-colors ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`block h-px mt-1 transition-colors ${
                      active ? 'bg-blue-500' : 'bg-transparent'
                    }`}
                  />
                </Link>
              );
            })}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
              >
                Apply Now
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-gray-200 border border-white/15 rounded-md hover:bg-white/5 hover:text-white transition-colors"
              >
                Donation
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden p-2 -mr-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A1120] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base transition-colors ${
                  pathname === link.href
                    ? 'text-white bg-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
              >
                Apply Now
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-center text-sm font-medium text-gray-200 border border-white/15 rounded-md hover:bg-white/5 transition-colors"
              >
                Donation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
