export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The question isn&apos;t whether AI will change technical education.
        </h2>
        <p className="text-blue-100 text-xl mb-12">
          It&apos;s who will lead that change.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-12">
          {[
            { role: "Clients", detail: "Web development, MVPs, internal tools, data analysis" },
            { role: "Students", detail: "High school or college, basic programming, ready to build" },
            { role: "Incubators", detail: "Affordable technical execution for portfolio companies" },
            { role: "Enterprise", detail: "Build your AI-trained talent pipeline" },
          ].map(({ role, detail }) => (
            <div key={role} className="bg-blue-700 rounded-lg p-4">
              <div className="font-semibold text-sm mb-1">{role}</div>
              <div className="text-blue-200 text-xs">{detail}</div>
            </div>
          ))}
        </div>

        <a
          href="mailto:wa@codingmind.com"
          className="inline-block bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Get in Touch
        </a>
        <p className="text-blue-200 text-sm mt-4">wa@codingmind.com · Redmond, WA</p>
      </div>
    </section>
  );
}
