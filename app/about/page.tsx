import Link from 'next/link';
import { FOUNDATION_PROGRAM_FORM } from '../../lib/links';

export const metadata = {
  title: 'About — Ebhath',
  description:
    'Ebhath is a 501(c)(3) nonprofit closing the gap in scientific research education for students who do not study in English.',
};

const milestones = [
  {
    year: '2023',
    title: 'Ebhath starts',
    description:
      'Founded to address the shortage of research-methodology material in Arabic.',
  },
  {
    year: '2023',
    title: 'First courses',
    description:
      'Our first research courses go live in Arabic and Filipino.',
  },
  {
    year: '2024',
    title: 'Swahili added',
    description:
      'A Swahili course joins the catalogue and enrolment passes 1,400 students.',
  },
  {
    year: '2025',
    title: 'Research Program',
    description:
      'The Ebhath Research Program launches in Egypt, running in Arabic and English.',
  },
];

export default function About() {
  return (
    <main className="bg-[#0A1120]">
      {/* Header */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              About Ebhath
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Most scientific research training is written in English. For students who
              study in Arabic, Filipino or Swahili, that is a real barrier — not because
              the work is beyond them, but because the material was never written for
              them. Ebhath exists to remove that barrier.
            </p>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              We are a fiscally sponsored 501(c)(3) nonprofit. We began in 2023 with
              Arabic and have since expanded into Filipino and Swahili. We are currently
              recruiting mentors to build courses in Portuguese and Indian languages;
              translation and recording in those languages has not started yet.
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
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-gray-200 font-medium hover:bg-white/5 hover:text-white transition-colors"
              >
                Browse the courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8">
              <h2 className="text-xl font-semibold text-white">Our mission</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Making scientific research education accessible across languages.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8">
              <h2 className="text-xl font-semibold text-white">Our vision</h2>
              <p className="mt-3 text-gray-400 leading-relaxed">
                A world where language is no longer a barrier to scientific knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            How we got here
          </h2>
          <ol className="mt-10 border-l border-white/10">
            {milestones.map((milestone) => (
              <li key={`${milestone.year}-${milestone.title}`} className="relative pl-8 pb-10 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500"
                  aria-hidden
                />
                <p className="text-sm font-medium text-blue-400">{milestone.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="mt-1 text-gray-400 leading-relaxed max-w-xl">
                  {milestone.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}
