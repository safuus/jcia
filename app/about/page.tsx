import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Just Code It Academy",
  description:
    "Meet the team behind Just Code It Academy. Founded by Colin Li, built on CodingMind Academy's proven infrastructure. Redmond, WA.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            About
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Built by builders.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Just Code It Academy exists because the gap between what schools teach and what
            the industry needs has never been wider — and AI is making it wider every month.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              CL
            </div>
            <div>
              <div className="font-bold text-lg">Colin Li</div>
              <div className="text-gray-400 text-sm">Founder</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Serial entrepreneur.
                <br />
                <span className="text-blue-400">Builder at heart.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Colin has a Math and Computer Science background with 15+ years of development
                experience. Just Code It Academy is his 7th startup — built on the infrastructure
                and lessons of his 6th, CodingMind Academy.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The core belief: the best way to learn to build is to build. Not simulations.
                Not toy projects. Real products, for real clients, with real consequences.
                AI makes this model possible at a scale that wasn&apos;t feasible even two
                years ago.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  stat: "7th startup",
                  detail: "Serial entrepreneur — each venture informed the next",
                },
                {
                  stat: "15+ years",
                  detail: "Development experience across full-stack, AI, and education",
                },
                {
                  stat: "Math + CS",
                  detail: "Rigorous technical foundation",
                },
                {
                  stat: "AI-first",
                  detail: "Every project uses AI tools from the first commit",
                },
              ].map(({ stat, detail }) => (
                <div key={stat} className="border border-gray-800 rounded-lg p-4">
                  <div className="text-blue-400 font-bold text-sm">{stat}</div>
                  <div className="text-gray-500 text-sm mt-1">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CodingMind Connection */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
              CM
            </div>
            <div>
              <div className="font-bold text-lg">Built on CodingMind Academy</div>
              <div className="text-gray-500 text-sm">codingmind.com</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">We didn&apos;t start from scratch.</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CodingMind Academy is an established K-12 AI and programming school in Redmond, WA.
                It provides trained teaching staff, a proven curriculum, and a direct pipeline of
                advanced students ready for real project work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Just Code It Academy builds on that foundation — taking CodingMind&apos;s most
                advanced students and placing them in professional development environments where
                they ship real products for real clients.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Trained teaching staff ready to deploy",
                "Proven curriculum foundation in AI and programming",
                "Student pipeline: CodingMind advanced students feed directly in",
                "Operational infrastructure: admin, comms, and logistics already built",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Make AI-native technical education financially sustainable.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Not a charity. Not a CSR play. A business model where clients get quality work,
            students get real experience, and the economics work for everyone. Youth Growth
            Network (ygn.ngo) taught us that youth development can&apos;t scale on goodwill
            alone. Just Code It Academy is built to be self-sustaining.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
