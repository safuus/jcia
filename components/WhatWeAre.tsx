export default function WhatWeAre() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-6">What We Are</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
          An AI-native dev studio <br className="hidden md:block" />
          + talent accelerator.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Not a bootcamp",
              body: "No simulated projects. No fake clients. Every line of code ships to a real product with real users.",
            },
            {
              title: "Not a charity",
              body: "Financially self-sustaining. Clients pay for quality work. Students pay for professional training. The economics work.",
            },
            {
              title: "Not a school",
              body: "No credential-first, no textbook-first. If you haven't shipped something real, you haven't graduated.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="border border-gray-800 rounded-xl p-6">
              <div className="text-red-400 font-semibold mb-2">{title}</div>
              <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-blue-900 bg-blue-950 rounded-xl">
          <p className="text-blue-200 text-lg leading-relaxed">
            Traditional colleges still teach from textbooks while the industry has moved to
            AI-augmented workflows. We train students on the tools they&apos;ll actually use —
            focusing on what AI can&apos;t replicate: system architecture, client requirements
            gathering, and creative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
