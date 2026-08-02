'use client';

import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { CONTACT, SOCIAL_LINKS } from '../../lib/links';

const socials = [
  { name: 'YouTube', icon: FaYoutube, href: SOCIAL_LINKS.youtube },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin },
  { name: 'Facebook', icon: FaFacebookF, href: SOCIAL_LINKS.facebook },
  { name: 'Instagram', icon: FaInstagram, href: SOCIAL_LINKS.instagram },
];

const inputClass =
  'w-full px-4 py-3 bg-[#0A1120] border border-white/10 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-blue-500';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // No mail server is wired up to this site, so the form hands the message to the
  // visitor's own mail client instead of pretending to send it.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${formData.message}\n\n—\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-[#0A1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Contact us
          </h1>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Questions about a course, the Foundations Program, or working with us as a
            mentor? Email us directly, or use the form and it will open in your mail app.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Details */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">Details</h2>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <FaEnvelope className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhone className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{CONTACT.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">Follow Ebhath</p>
              <div className="flex gap-3 mt-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-xl font-semibold">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md bg-blue-600 font-medium hover:bg-blue-500 transition-colors"
              >
                Open in mail app
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
