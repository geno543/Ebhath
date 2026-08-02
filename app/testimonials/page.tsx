import { FOUNDATION_PROGRAM_FORM } from '../../lib/links';

export const metadata = {
  title: 'Testimonials — Ebhath',
  description: 'What students and colleagues have said about Ebhath.',
};

const testimonials = [
  {
    text: 'When I started learning research, I noticed a significant gap in resources in my language, Arabic. As an Egyptian, I found it overwhelming to rely solely on English sources. Ebhath was instrumental truly, and it was the reason I got into the Pioneer Research Program. During the interview, I found myself recalling the insights shared by the Arabic course instructor.',
    name: 'Research student',
    role: 'Arabic course',
  },
  {
    text: 'I appreciate you getting in touch with me and your kind remarks. It is truly an honour to know people from the next generation, like you, and I wish you the best of luck in the future. I have faith that our beloved nation and humanity will both prosper in the future.',
    name: 'Amal Amin',
    role: 'Founder and chair, Women in Science without Borders',
  },
  {
    text: "I've been desperately needing you for two years! I'm endlessly grateful!",
    name: 'Research student',
    role: 'Arabic course',
  },
];

export default function Testimonials() {
  return (
    <main className="bg-[#0A1120]">
      <section className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
              What people tell us
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed">
              A few messages from students who took the courses, and from people working
              in the same space.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.text.slice(0, 40)}
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-8"
            >
              <blockquote className="text-gray-300 leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.02] p-10">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Start your own
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
            Applications for the Ebhath Foundations Program are open.
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
      </section>
    </main>
  );
}
