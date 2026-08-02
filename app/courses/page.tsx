import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';
import { FOUNDATION_PROGRAM_FORM, SOCIAL_LINKS } from '../../lib/links';

export const metadata = {
  title: 'Courses — Ebhath',
  description:
    'Research methodology courses from Ebhath, taught in Arabic, Filipino and Swahili.',
};

interface Course {
  title: string;
  language: string;
  instructor: string;
  duration: string;
  level: string;
  status: 'Available' | 'Coming soon';
  link?: string;
}

const courses: Course[] = [
  {
    title: 'Scientific research methodology',
    language: 'Arabic',
    instructor: 'Mohamed Moussa',
    duration: '6 weeks',
    level: 'Beginner',
    status: 'Available',
    link: SOCIAL_LINKS.youtube,
  },
  {
    title: 'Scientific research methodology',
    language: 'Filipino',
    instructor: 'Jake Yap',
    duration: '6 weeks',
    level: 'Beginner',
    status: 'Coming soon',
  },
  {
    title: 'Scientific research methodology',
    language: 'Swahili',
    instructor: 'Olive Stanley',
    duration: '6 weeks',
    level: 'Beginner',
    status: 'Coming soon',
  },
];

export default function Courses() {
  return (
    <main className="bg-[#0A1120]">
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              Courses
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Every Ebhath course teaches the same thing — how scientific research is
              actually done — in a different language. The Arabic course is live on
              YouTube; the others are being recorded.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.language}
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-blue-400">
                  {course.language}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded border ${
                    course.status === 'Available'
                      ? 'text-green-300 border-green-500/30 bg-green-500/10'
                      : 'text-gray-400 border-white/10'
                  }`}
                >
                  {course.status}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">{course.title}</h2>
              <p className="mt-2 text-gray-400">Taught by {course.instructor}</p>

              <dl className="mt-6 space-y-2 text-sm text-gray-500 flex-1">
                <div className="flex justify-between">
                  <dt>Length</dt>
                  <dd className="text-gray-300">{course.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Level</dt>
                  <dd className="text-gray-300">{course.level}</dd>
                </div>
              </dl>

              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
                >
                  <FaYoutube className="w-4 h-4" />
                  Watch on YouTube
                </a>
              ) : (
                <p className="mt-8 text-sm text-gray-500 border-t border-white/10 pt-4">
                  Not published yet.
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.02] p-10">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Want to be taught, not just watch?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
            The Foundations Program takes you through the same material with the Ebhath
            team. Applications are open.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={FOUNDATION_PROGRAM_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              Apply to the Foundations Program
            </a>
            <Link
              href="/research-programs"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-gray-200 font-medium hover:bg-white/5 hover:text-white transition-colors"
            >
              See our programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
