import ContactForm from "@/components/ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s build something real.
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you need software built, want to train your next developer, or are
            looking for a talent pipeline — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
          <ContactForm />
        </div>

        <p className="text-gray-400 text-sm text-center mt-6">
          Redmond, WA ·{" "}
          <a href="mailto:wa@codingmind.com" className="text-blue-500 hover:underline">
            wa@codingmind.com
          </a>
        </p>
      </div>
    </section>
  );
}
