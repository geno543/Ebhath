import Link from 'next/link';
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CONTACT, DONATE_URL, FOUNDATION_PROGRAM_FORM, SOCIAL_LINKS } from '../lib/links';

const socials = [
  { name: 'YouTube', icon: FaYoutube, href: SOCIAL_LINKS.youtube },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin },
  { name: 'Facebook', icon: FaFacebookF, href: SOCIAL_LINKS.facebook },
  { name: 'Instagram', icon: FaInstagram, href: SOCIAL_LINKS.instagram },
];

const siteLinks = [
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/research-programs' },
  { name: 'Courses', href: '/courses' },
  { name: 'Team', href: '/team' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1120] border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-sm">
            <h3 className="text-lg font-semibold text-white">Ebhath</h3>
            <p className="mt-3 leading-relaxed">
              A 501(c)(3) nonprofit teaching scientific research in under-served
              languages.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-white/10 hover:border-white/25 hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Site
            </h3>
            <ul className="mt-4 space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                Apply to the program →
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300"
              >
                Donation →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm">
          © {currentYear} Ebhath. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
