import Image from 'next/image';
import Link from 'next/link';
import { DONATE_URL, FOUNDATION_PROGRAM_FORM } from '../lib/links';

const stats = [
  { value: '1,400+', label: 'Students enrolled' },
  { value: '3', label: 'Languages taught' },
  { value: '12', label: 'Scholars in the Research Program' },
];

export default function Home() {
  return (
    <main className="bg-[#0A1120]">
      {/* Hero */}
      <section className="relative border-b border-white/5">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-300 border border-blue-400/30 bg-blue-500/10 rounded-full pl-2 pr-3 py-1 hover:bg-blue-500/15 transition-colors"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide bg-blue-500/20 rounded-full px-2 py-0.5">
                  New
                </span>
                <span className="sm:hidden">Applications open</span>
                <span className="hidden sm:inline">
                  Applications are open for the Foundations Program
                </span>
              </a>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
                Research education in the language you already think in.
              </h1>

              <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
                We teach scientific research methodology in Arabic, Filipino and Swahili,
                so that a student&apos;s first language is never the reason they cannot
                start doing research.
              </p>

              <div className="mt-8 flex flex-col md:flex-row gap-3">
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

            {/* Desktop only — on narrow screens the logo in the navbar is enough. */}
            <div className="hidden lg:block lg:col-span-5">
              <Image
                src="/images/Ebhath_Official_Logo-08.png"
                alt="Ebhath"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-gray-500">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Foundations Program */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-blue-400 mb-3">Now open</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Ebhath Foundations Program
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                The Foundations Program is where most students begin with Ebhath. It
                introduces the fundamentals of scientific research — how a question is
                formed, how evidence is gathered, and how findings are written up — and
                it is taught in the languages our students already use every day.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Applications go through a short form. If you have questions before you
                apply, write to us at{' '}
                <a
                  href="mailto:support@ebhath.org"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@ebhath.org
                </a>
                .
              </p>
              <a
                href={FOUNDATION_PROGRAM_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
              >
                Apply now
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

      {/* About */}
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              About Ebhath
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Ebhath is a fiscally sponsored 501(c)(3) nonprofit. We started in 2023 with
              Arabic, added Filipino and Swahili, and are now recruiting mentors to build
              courses in Portuguese and Indian languages.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We also run the Ebhath Research Program in Egypt, which pairs students with
              mentors on real research projects in Arabic and English. That round is full
              and applications are closed.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/about"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                More about us →
              </Link>
              <Link
                href="/research-programs"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Both programs in detail →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-10 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Support the courses
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
            The courses on our channel are free to watch. Donations pay for the
            recording, translation and review behind them.
          </p>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Donation
          </a>
        </div>
      </section>
    </main>
  );
}
