export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Model</p>
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl">
          Professional developers lead every project. Students participate through a structured
          two-path model. AI tools are central from day one.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:left-1/2"></div>

          {[
            {
              phase: "Phase 1 · Months 1–3",
              title: "Educational Training",
              description:
                "Students learn AI coding tools (GitHub Copilot, Cursor, ChatGPT, Claude), modern frameworks, development process, and professional workflows. Training happens alongside real projects — but students are not on the critical path yet.",
              side: "left",
            },
            {
              phase: "Phase 2A · Months 4–6",
              title: "Paid Internship Track",
              description:
                "Students who qualify enter paid employment at Washington State minimum wage. Real work expectations, real deadlines, real consequences. Approximately 10% of project work: QA testing, documentation, UI components, bug fixes.",
              side: "right",
            },
            {
              phase: "Phase 2B · Months 4–6",
              title: "Supervised Learning Track",
              description:
                "Students continue as enrolled learners under teacher mentorship. Observe real project work, participate in code reviews, build portfolio projects in parallel. No employment pressure — but no shortcuts either.",
              side: "left",
            },
          ].map(({ phase, title, description }, i) => (
            <div key={i} className={`relative mb-12 md:w-1/2 pl-12 md:pl-0 ${
              i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
            }`}>
              <div className="absolute left-0 md:left-auto md:right-auto w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center
                md:left-[-16px]" style={i % 2 !== 0 ? { left: "-16px" } : { right: "-16px" }}>
                {i + 1}
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">{phase}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI tools callout */}
        <div className="mt-8 bg-gray-950 text-white rounded-xl p-8">
          <h3 className="font-bold text-lg mb-3">AI-First, Not AI-Optional</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            GitHub Copilot, Cursor, Claude, ChatGPT — students learn these tools from day one
            because that&apos;s what professional teams use. We don&apos;t teach coding then add AI.
            We teach AI-augmented development as the baseline.
          </p>
        </div>
      </div>
    </section>
  );
}
