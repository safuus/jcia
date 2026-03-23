"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type FormState } from "@/lib/actions";

const initialState: FormState = { success: false };

export default function ContactForm() {
  const [audience, setAudience] = useState<"client" | "student" | "partner">("client");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message sent!</h3>
        <p className="text-green-700 text-sm">
          We&apos;ll get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 text-sm">{state.error}</p>
          <p className="text-red-500 text-xs mt-1">
            Or email us directly:{" "}
            <a href="mailto:wa@codingmind.com" className="underline">
              wa@codingmind.com
            </a>
          </p>
        </div>
      )}

      {/* Audience selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">I&apos;m a...</label>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { value: "client", label: "Client" },
              { value: "student", label: "Student" },
              { value: "partner", label: "Partner" },
            ] as const
          ).map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setAudience(value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                audience === value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <input type="hidden" name="audience" value={audience} />
      </div>

      {/* Student redirect */}
      {audience === "student" && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700 text-sm">
            Students — apply through our dedicated application page for a better experience.
          </p>
          <a
            href="/apply"
            className="inline-block mt-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Application →
          </a>
        </div>
      )}

      {/* Common fields */}
      {audience !== "student" && (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Client-specific fields */}
          {audience === "client" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select...</option>
                  <option value="website">Website / Web App</option>
                  <option value="mvp">MVP for Startup</option>
                  <option value="internal">Internal Tool</option>
                  <option value="ai">AI Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select...</option>
                  <option value="1-2months">1-2 months</option>
                  <option value="3-4months">3-4 months</option>
                  <option value="5-6months">5-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {/* Partner-specific fields */}
          {audience === "partner" && (
            <div>
              <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">
                Organization name
              </label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Your organization"
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={2000}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder={
                audience === "client"
                  ? "Tell us about your project..."
                  : "Tell us about your organization and how you'd like to partner..."
              }
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>

          <p className="text-gray-400 text-xs text-center">
            Or email us directly at{" "}
            <a href="mailto:wa@codingmind.com" className="text-blue-500 hover:underline">
              wa@codingmind.com
            </a>
          </p>
        </>
      )}
    </form>
  );
}
