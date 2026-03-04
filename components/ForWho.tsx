export default function ForWho() {
  const audiences = [
    {
      icon: "💼",
      title: "Clients",
      subtitle: "Get quality work done",
      points: [
        "20–30% below traditional agency pricing",
        "Websites, MVPs, internal tools, data analysis",
        "AI-augmented development — faster iterations",
        "6-month delivery timeline with built-in buffer",
        "Talent pipeline: hire the interns you worked with",
      ],
      cta: "Start a Project",
    },
    {
      icon: "🎓",
      title: "Students",
      subtitle: "Build your first real thing",
      points: [
        "High school juniors/seniors or college students",
        "Basic programming knowledge required",
        "Portfolio of deployed, real-world projects",
        "Professional references from actual client work",
        "Choice of paid internship or mentored learning path",
      ],
      cta: "Apply Now",
    },
    {
      icon: "🏢",
      title: "Enterprise & Incubators",
      subtitle: "Build your talent pipeline",
      points: [
        "Pre-vetted graduates trained in modern AI workflows",
        "Affordable MVP development for portfolio companies",
        "Support Seattle-area AI technical education",
        "Early access to top-performing student talent",
      ],
      cta: "Partner With Us",
    },
  ];

  return (
    <section id="for-who" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Who It&apos;s For</p>
        <h2 className="text-4xl font-bold mb-16">Three ways in.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(({ icon, title, subtitle, points, cta }) => (
            <div key={title} className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-bold text-xl mb-1">{title}</h3>
              <p className="text-gray-500 text-sm mb-6">{subtitle}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
