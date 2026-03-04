export default function ProofOfConcept() {
  const metrics = [
    { label: "Timeline", value: "4 months" },
    { label: "Team", value: "1 dev · 3 teachers · 7 students" },
    { label: "Deliverable", value: "Live website, real users" },
    { label: "Student work", value: "Testing, docs, UI components" },
    { label: "Client satisfaction", value: "Professional quality" },
    { label: "Key learning", value: "6 months is the right target" },
  ];

  return (
    <section id="proof" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Proof of Concept</p>
        <h2 className="text-4xl font-bold mb-4">We&apos;ve already done it.</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl">
          We validated this model rebuilding the Coerver NW website — a real soccer training
          organization with real users. One developer led, seven students participated,
          project delivered on spec.
        </p>

        <div className="bg-gray-950 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              NW
            </div>
            <div>
              <div className="font-semibold">Coerver NW</div>
              <div className="text-gray-400 text-sm">Soccer training organization · Website rebuild</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {metrics.map(({ label, value }) => (
              <div key={label} className="bg-gray-900 rounded-lg p-4">
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</div>
                <div className="text-white font-medium">{value}</div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-blue-500 pl-4 text-gray-300 italic">
            &ldquo;This case established a repeatable delivery playbook now being standardized
            for future projects. We&apos;re ready to scale with refined processes and realistic timelines.&rdquo;
          </blockquote>
        </div>

        {/* Backed by CodingMind */}
        <div className="mt-12 flex items-start gap-6 p-6 border border-gray-200 rounded-xl bg-gray-50">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
            CM
          </div>
          <div>
            <div className="font-semibold mb-1">Backed by CodingMind Academy</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Just Code It Academy is built on the infrastructure of CodingMind Academy — an
              established K-12 programming and AI school in Redmond, WA. Trained teachers,
              proven curriculum, and a direct pipeline of advanced students. We didn&apos;t
              start from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
