# About Me & Portfolio Blueprint (waitsec-pagemaker)

Use this guide when creating a personal developer portfolio, founder bio, or engineer profile page. It ensures the page highlights real-world work and technical competence without cheesy resume clichés.

---

## Complete Page Anatomy & Responsive Flow

### 1. Intro Snapshot (The Header)
* **Desktop (1024px+):** Side-by-side layout. Profile photo or avatar on the left (80px to 96px), short 2-sentence bio on the right, followed by status badge (e.g. "Available for projects") and direct social links (GitHub, X, LinkedIn, Email).
* **Mobile (<768px):** Stacks vertically. Avatar centered or left-aligned with clean text underneath. Keep intro under 50 words so visitors see projects without scrolling endlessly.

### 2. Selected Projects Showcase
* **Desktop:** 2-column grid (`md:grid-cols-2 gap-6`). Each card highlights 1 tangible problem solved, tech stack badges, live demo link, and GitHub repository link.
* **Mobile:** 1-column vertical stack (`grid-cols-1 gap-6`). Full-width cards with large touch targets for external links.

### 3. Career & Experience Timeline
* **Desktop & Mobile:** Single vertical line aligned to the left edge with bullet dots. Never use an alternating left-and-right zigzag timeline that breaks on mobile.
* Content per role: Company name, job title, start/end dates, and 2 concise bullet points detailing measurable engineering impact.

### 4. Technical Skills & Tools
* **Desktop & Mobile:** Simple, clean text pills organized by category (Languages, Frameworks, Cloud & Databases, Tooling).
* Absolutely zero animated percentage bars or fake skill ratings.

### 5. Direct Reachout Section
* A clean footer box with a prominent email link (`mailto:your@email.com`) and location timezone.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The Fake Skill Percentage Bars

* **The Bad Habit:** Adding animated progress bars that claim "JavaScript: 95%", "Docker: 80%", "Teamwork: 90%".
* **The Problem:** Percentage numbers on human skills mean literally nothing. What does 95% of JavaScript even mean? Does it mean you wrote the V8 engine?
* **Why It Fails:** Senior hiring managers and engineering leads instantly recognize skill bars as amateur filler. It damages technical credibility.
* **Clean Fix:** Group skills into clear categorical text badges, or list them alongside the real projects where you actually used them:
  ```html
  <div class="space-y-4">
    <h3 class="text-sm font-semibold uppercase tracking-wider text-neutral-500">Core Technologies</h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md">TypeScript</span>
      <span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md">Next.js</span>
      <span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md">PostgreSQL</span>
      <span class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md">Tailwind CSS</span>
    </div>
  </div>
  ```
* **The Waitsec Way:** Prove skills through projects and code, not through invented percentages.

### 2. The Alternating Zigzag Timeline on Mobile

* **The Bad Habit:** Creating a timeline where odd years are on the left of a center line and even years are on the right.
* **The Problem:** On a 375px phone screen, dividing the screen in half leaves only 140px of width for text. Sentences wrap every 2 words.
* **Why It Fails:** It looks like a tangled mess on phones, and dates collide with company names.
* **Clean Fix:** Use a left-aligned timeline across all screen sizes. The timeline border sits strictly on the left margin:
  ```html
  <div class="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-8">
    <div class="relative pl-6">
      <!-- Timeline Node Dot -->
      <div class="absolute -left-1.5 top-1.5 w-3 h-3 bg-neutral-900 dark:bg-white rounded-full"></div>
      <div class="text-xs text-neutral-400 font-medium">2024 - Present</div>
      <h3 class="text-base font-bold text-neutral-900 dark:text-white mt-1">Lead Backend Engineer • Fastro</h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
        Redesigned API gateway architecture, reducing response latency by 35%.
      </p>
    </div>
  </div>
  ```
* **The Waitsec Way:** Keep mobile layouts simple. A single vertical line reads naturally from top to bottom on any device.

### 3. Vague Project Cards With No Live Proof

* **The Bad Habit:** Listing 8 generic project cards with titles like "E-Commerce App" and "Task Manager", with no live demo and no source code link.
* **The Problem:** The visitor has no way to verify whether the project was actually built or just copied from a YouTube tutorial.
* **Why It Fails:** Recruiters and clients want to see live code and architecture decisions. Dead links cause visitors to bounce.
* **Clean Fix:** Showcase 3 or 4 high-quality projects. For each project, explain the technical problem it solved, provide a live link, and link the GitHub repository:
  ```html
  <div class="p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 transition-colors">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-bold text-neutral-900 dark:text-white">Waitsec CLI</h3>
      <div class="flex items-center gap-3 text-sm">
        <a href="https://github.com/..." class="text-neutral-500 hover:text-neutral-900">GitHub &rarr;</a>
        <a href="https://waitsec.dev" class="text-neutral-900 dark:text-white font-medium">Live &rarr;</a>
      </div>
    </div>
    <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
      Lightweight engineering discipline tool for AI coding agents with zero external dependencies.
    </p>
    <div class="flex gap-2 mt-4 text-xs font-mono text-neutral-500">
      <span>Node.js</span> • <span>ESM</span> • <span>CLI</span>
    </div>
  </div>
  ```
* **The Waitsec Way:** Fewer projects with real code beats twenty shallow placeholders.

### 4. Hiding the Contact Email Behind a Wall

* **The Bad Habit:** Hiding the contact option behind a broken third-party contact form with 8 mandatory fields.
* **The Problem:** The user just wants to send a quick freelance inquiry or collaboration email, but the form errors out or sends into a void.
* **Why It Fails:** Friction kills inbound opportunities. If people cannot easily email you, they will message someone else.
* **Clean Fix:** Always provide a direct, visible email address with a clickable `mailto:` link:
  ```html
  <div class="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
    <h2 class="text-2xl font-bold">Let's build something together</h2>
    <p class="text-neutral-600 dark:text-neutral-400 mt-2 text-sm">Currently open to select contract and advisory roles.</p>
    <a href="mailto:hello@example.com" class="inline-block mt-4 px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium rounded-lg">
      hello@example.com
    </a>
  </div>
  ```
* **The Waitsec Way:** Remove barriers between you and your audience. Make reaching out as easy as clicking one button.

---

## SEO, GEO & Structured Data (About & Portfolio)

- Title: full name plus role, for example "Ilyas Mukhlisin, Backend Engineer", about 50 to 60 characters.
- Meta description: who you are, what you build, and how to reach you, about 140 to 160 characters.
- One `<h1>` with your name.
- Server-render the bio, project list, and contact email.
- Add `sameAs` links to GitHub, LinkedIn, and X so engines can confirm the identity.
- Describe each project with a concrete outcome, not a vague claim, so answer engines have something to quote.

### JSON-LD for an About or Portfolio Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://example.com/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Backend Engineer",
    "url": "https://example.com",
    "image": "https://example.com/images/avatar.jpg",
    "worksFor": { "@type": "Organization", "name": "Fastro" },
    "knowsAbout": ["Laravel", "PostgreSQL", "API design"],
    "sameAs": [
      "https://github.com/username",
      "https://www.linkedin.com/in/username"
    ]
  }
}
</script>
```

When the about page is part of a company site, add an `Organization` node and connect it with `worksFor` or `memberOf`.

---

## Pre-Flight Checklist for About Me & Portfolio Pages

- [ ] Are all fake animated skill percentage bars removed in favor of clean categorical tags?
- [ ] Is the career timeline strictly left-aligned with zero alternating zigzag layouts?
- [ ] Does every featured project have a working live link or public repository link?
- [ ] Is there a direct, clickable `mailto:` link clearly visible on the page?
- [ ] Do project cards collapse into a clean single vertical stack on mobile screens?
- [ ] Is there a valid ProfilePage with Person data, including sameAs links to real profiles?
