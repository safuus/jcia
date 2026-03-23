# Changelog

All notable changes to the Just Code It Academy website.

## [0.2.0.0] - 2026-03-22 — Website Conversion Engine

### Added

- **Contact form with audience routing.** Visitors select Client, Student, or Partner — form shows relevant fields for each. Students are redirected to the dedicated /apply page. Powered by Resend Server Actions (no separate API route).
- **Auto-reply emails.** Every form submission triggers an instant confirmation email to the submitter (fire-and-forget — doesn't block the user).
- **Student application page (`/apply`).** Dedicated form with grade level, programming experience, interests, and availability. Submissions go to wa@codingmind.com.
- **About page (`/about`).** Founder bio (Colin Li), CodingMind Academy connection, mission statement, and credibility signals.
- **Services page (`/services`).** Detailed breakdowns for client services (websites, MVPs, internal tools, AI integration) and student programs (training, paid internship, supervised learning). Enterprise/incubator section.
- **FAQ section.** 8 questions addressing top objections for clients, students, and partners. Accordion UI.
- **MDX blog infrastructure.** `@next/mdx` with custom components, blog index, and dynamic `[slug]` pages. First post: "Why AI-Native Education Matters."
- **SEO metadata.** Per-page titles, descriptions, Open Graph tags, Twitter cards across all pages.
- **Vercel Analytics.** Privacy-friendly analytics, no cookie banner needed.
- **Unit tests.** 8 Vitest tests covering Server Action validation, success, and error paths (Resend failures, network exceptions, mailto fallback).
- **E2E test specs.** 3 Playwright specs: smoke tests (all pages + nav), contact form interactions, FAQ accordion.

### Changed

- **Hero CTAs reordered.** "Start a Project" is now the primary (blue) CTA, "Enroll a Student" is secondary. Clients-first priority.
- **CTA section redesigned.** Replaced mailto link with an embedded contact form. Mailto still shown as fallback on errors.
- **Nav updated.** Added links to /services, /about, /blog, /apply.
