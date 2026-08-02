import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

export const metadata = {
  title: 'Team — Ebhath',
  description: 'The instructors and staff behind Ebhath.',
};

type SocialLinks = {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  github?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  socialLinks: SocialLinks;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mohammed Mashhour',
    role: 'Founder, Arabic course instructor',
    location: 'Egypt',
    image: '/images/team/ebhathMohamed.png',
    socialLinks: {
      youtube: 'https://youtube.com/@MohammedMashhour',
      instagram: 'https://instagram.com/m.mashhour',
    },
  },
  {
    id: 2,
    name: 'Jake Yap',
    role: 'Filipino course instructor',
    location: 'Philippines',
    image: '/images/team/jake.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jakeyap',
      facebook: 'https://facebook.com/jakeyap.teach',
    },
  },
  {
    id: 3,
    name: 'Olive Stanley',
    role: 'Swahili course instructor',
    location: 'Tanzania',
    image: '/images/team/ebhatholive.png',
    socialLinks: {
      twitter: 'https://twitter.com/olivestanley',
      instagram: 'https://instagram.com/olive.swahili',
    },
  },
  {
    id: 4,
    name: 'Omar Negm',
    role: 'Chief media officer',
    location: 'Egypt',
    image: '/images/team/negm.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/omar-negm-9b805726b/',
    },
  },
  {
    id: 5,
    name: 'Mohamed Ramadan',
    role: 'Chief technology officer, web manager',
    location: 'Egypt',
    image: '/images/team/geno.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mohamed-ramadan-551a17272/',
      github: 'https://github.com/geno543',
    },
  },
  {
    id: 6,
    name: 'Omar Emam',
    role: 'Chief operating & product officer',
    location: 'Egypt',
    image: '/images/team/Omar Emam .jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/omar-emam-b71421306/',
    },
  },
  {
    id: 7,
    name: 'Mohammed Dahman',
    role: 'Program director',
    location: 'Egypt',
    image: '/images/team/dahman.jpeg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/muhammed-dahman-34868927a/',
    },
  },
  {
    id: 8,
    name: 'Abdelaziz Ahmed',
    role: 'Chief operating officer',
    location: 'Egypt',
    image: '/images/team/zizo.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/abdelaziz-ahmed-830a692b3/',
      facebook: 'https://www.facebook.com/share/1AmxMPstVV/',
    },
  },
  {
    id: 9,
    name: 'Abdelrahman Atia',
    role: 'Tech director',
    location: 'Egypt',
    image: '/images/team/Abdelrahman_Atia_Ebhath.jpg',
    socialLinks: {},
  },
  {
    id: 10,
    name: 'Mohamed Talaat',
    role: 'Web developer',
    location: 'Egypt',
    image: '/images/team/Mohamed_Talaat_ebhath.jpg',
    socialLinks: {},
  },
];

const socialIcons = [
  { key: 'linkedin', icon: FaLinkedinIn, label: 'LinkedIn' },
  { key: 'facebook', icon: FaFacebookF, label: 'Facebook' },
  { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
  { key: 'twitter', icon: FaTwitter, label: 'X' },
  { key: 'youtube', icon: FaYoutube, label: 'YouTube' },
  { key: 'github', icon: FaGithub, label: 'GitHub' },
] as const;

export default function TeamPage() {
  return (
    <main className="bg-[#0A1120]">
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              The team
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Instructors, researchers and organisers working across Egypt, the
              Philippines and Tanzania.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-6 flex gap-5"
            >
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="80px"
                  priority={member.id === 1}
                  className="object-cover rounded-full"
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-white leading-tight">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm text-blue-400">{member.role}</p>
                <p className="mt-1 text-sm text-gray-500">{member.location}</p>

                <div className="flex gap-3 mt-3">
                  {socialIcons.map(({ key, icon: Icon, label }) => {
                    const href = member.socialLinks[key];
                    if (!href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${label}`}
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.02] p-10">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Working in a language we do not cover?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
            We need instructors and mentors for Portuguese and Indian languages, and we
            are always glad to hear from researchers who want to help. Tell us what you
            work on.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
