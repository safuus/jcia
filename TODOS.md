# TODOS

## Website

### Case Study Template
**Priority:** P2
**What:** Create a reusable `/work/[slug]` page template for case studies. Move Coerver NW data from inline ProofOfConcept.tsx to a proper case study page (problem/solution/result format, screenshots, client quote).
**Why:** One proof point is weak. Template ready = instant publish when next project completes.
**Depends on:** Having a second completed project to showcase.

### Form Rate Limiting
**Priority:** P1
**What:** Add rate limiting to contact and application form Server Actions. Currently zero rate limiting — an attacker can spam thousands of submissions, burning Resend quota and using auto-replies as a spam relay to arbitrary email addresses.
**Why:** Security. The auto-reply feature sends emails to user-supplied addresses without verification, making the domain a potential spam relay.
**Options:** Vercel Edge middleware rate limiting, Cloudflare Turnstile, or a simple in-memory counter. Turnstile (free) is the best balance of UX and protection.
**Depends on:** Nothing — can be implemented independently.

### Verified Resend Domain
**Priority:** P1
**What:** Set up a verified sending domain in Resend (e.g., `hello@justcodeit.academy`) to replace the sandbox `onboarding@resend.dev`. Sandbox mode limits recipients and emails hit spam.
**Why:** Emails from `resend.dev` look unprofessional and will be filtered by most email providers.
**Depends on:** Domain DNS access for justcodeit.academy.

### Pricing Page
**Priority:** P2
**What:** Create `/pricing` with rough project ranges for clients and clear tuition info for students.
**Why:** Pricing transparency converts more than "contact us." People who see prices and still reach out are more qualified.
**Depends on:** Pricing decisions being standardized from a few completed projects.

## Completed
