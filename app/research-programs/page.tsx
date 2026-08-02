import Image from 'next/image';
import Link from 'next/link';
import { FOUNDATION_PROGRAM_FORM } from '../../lib/links';

export const metadata = {
  title: 'Programs — Ebhath',
  description:
    'The Ebhath Foundations Program and the Ebhath Research Program: how we teach scientific research in under-served languages.',
};

export default function ResearchPrograms() {
  return (
    <main className="bg-[#0A1120]">
      {/* Header */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              Our programs
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              Two programs, one goal: give students a route into scientific research that
              does not depend on already being fluent in English.
            </p>
          </div>
        </div>
      </section>

      {/* Foundations Program */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-blue-400 mb-3">
                Applications open
              </p>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Ebhath Foundations Program
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                Our introductory program, and the place most students start. It covers
                the fundamentals of scientific research — forming a question, gathering
                evidence, and writing up findings — in the languages our students already
                use.
              </p>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  Taught in Arabic, with Filipino and Swahili courses in progress
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  Open to students with no prior research experience
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  Run by Ebhath, a fiscally sponsored 501(c)(3) nonprofit
                </li>
              </ul>
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Apply to the Foundations Program
              </a>
            </div>

            <div className="rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/images/Ebhath_foundation.jpg"
                alt="Ebhath Foundations Program"
                width={1280}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Program */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/images/ebhath_research.jpg"
                alt="Ebhath Research Program"
                width={1280}
                height={320}
                className="w-full h-auto"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-gray-500 mb-3">
                Egypt · Applications closed
              </p>
              <h2 className="text-3xl font-semibold text-white tracking-tight">
                Ebhath Research Program
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                Launched in 2025, ERP pairs students with mentors to work on real
                research projects in both Arabic and English. Twelve scholars are taking
                part in the current round, and applications are closed. If you want to
                hear when the next round opens, write to us.
              </p>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  12 active scholars
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  Mentor-led, project-based work
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400" aria-hidden>
                    —
                  </span>
                  Arabic and English
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/15 text-gray-200 font-medium hover:bg-white/5 hover:text-white transition-colors"
              >
                Ask about the next round
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Publications
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              We have not published yet. Work from the Research Program and our course
              materials will be listed here as it becomes available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
