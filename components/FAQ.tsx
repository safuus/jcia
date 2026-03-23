"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Will students work on my project? What if they break something?",
    answer:
      "Professional developers lead every project and handle the critical path. Students participate in supervised tasks — QA, documentation, UI components — but all work goes through mandatory code review. Your project is never at risk from student involvement.",
  },
  {
    question: "How is this different from hiring a traditional agency?",
    answer:
      "Our developers use AI tools (GitHub Copilot, Cursor, Claude) from the first line of code, so we ship faster and iterate in hours instead of days. That efficiency means roughly 50% lower rates — without compromising quality. You get senior developer judgment with AI-accelerated throughput.",
  },
  {
    question: "What does tuition cost for students?",
    answer:
      "Tuition is $3,000 for the initial 3-month training phase. After that, students either transition to a paid internship (minimum wage, real employment) or continue in the supervised learning track at a reduced rate. Contact us for current pricing details.",
  },
  {
    question: "Is this a real school? What credentials do students get?",
    answer:
      "We're a professional development studio with an integrated training program — not a traditional school. Students graduate with something better than a certificate: a deployed product in their portfolio, professional references, and real-world experience with modern AI development tools.",
  },
  {
    question: "Who's behind Just Code It Academy?",
    answer:
      "Just Code It Academy is founded by Colin Li, a serial entrepreneur (6 startups, building #7) with a Math + CS background and 15+ years of development experience. JCIA is built on the infrastructure of CodingMind Academy, an established K-12 programming school in Redmond, WA.",
  },
  {
    question: "What's the connection to CodingMind Academy?",
    answer:
      "CodingMind Academy is Colin's K-12 AI and programming school — it provides trained teaching staff, proven curriculum, and a pipeline of advanced students. Just Code It Academy builds on that foundation to offer a more intensive, project-based experience for older students ready to do real work.",
  },
  {
    question: "Can I hire graduates directly?",
    answer:
      "Yes — that's one of the advantages of the model. Clients who work with student interns on their projects can hire them directly after the program. You've already seen their work quality, communication style, and technical skills firsthand.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "React, Next.js, TypeScript, Python, and modern AI tools are our core stack. We also work with Node.js, databases (PostgreSQL, MongoDB), cloud platforms (AWS, Vercel), and integrate LLMs and AI workflows into existing products. We choose the right tool for each project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
          FAQ
        </p>
        <h2 className="text-4xl font-bold mb-12">Common questions.</h2>

        <div className="space-y-2">
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm text-gray-900">{question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
