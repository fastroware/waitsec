# Single Article & Reading View Blueprint (waitsec-pagemaker)

Use this guide when creating a single article view, blog post template, or markdown documentation page. It ensures readers can focus comfortably on long-form text without eye strain on any device.

---

## Complete Page Anatomy & Responsive Flow

### 1. Top Navigation & Context
* **Desktop & Mobile:** A clean back link at the top (for example: "&larr; Back to all articles"). Keeps the reader oriented so they never feel lost in deep content.

### 2. Article Header & Metadata
* **Category Badge:** Small tag indicating the topic (e.g. "Tutorial" or "Architecture").
* **Main Title (`<h1>`):** Bold, clear, and prominent. Use `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight`.
* **Author & Meta Row:** Author avatar, full name, publication date, and estimated reading time (e.g. "Sep 12, 2026 • 6 min read").

### 3. Reading Container & Measure
* **Desktop (1024px+):** Constrain the reading container to `max-w-prose` or `max-w-3xl mx-auto px-4`. Never allow lines of text to stretch wider than 70 to 75 characters per line.
* **Mobile (<768px):** Full width with generous side padding (`px-4 sm:px-6`). Use comfortable 16px or 17px body text with relaxed line-height.

### 4. Rich Media & Code Elements
* **Code Blocks:** Dark background, syntax highlighting, monospace font, with an explicit `overflow-x-auto` wrapper so long lines of code scroll horizontally instead of blowing up the mobile page.
* **Blockquotes:** Indented with a 3px solid neutral accent border on the left and slightly italicized text.
* **Tables:** Always wrapped in a container with `overflow-x-auto` to allow smooth horizontal scrolling on phones.

### 5. Article Footer & Engagement
* **Author Card:** 2-sentence bio with direct links to GitHub or social profiles.
* **Next / Previous Navigation:** 2-column cards at the bottom of the article linking to the next piece of content.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The 1920px Full-Width Reading Nightmare

* **The Bad Habit:** Letting article paragraphs stretch 100% across the full width of an ultrawide desktop monitor.
* **The Problem:** Lines of text become 180 characters long. Readers have to physically turn their heads from left to right to finish a single sentence.
* **Why It Fails:** Human eyes lose track of the next line when scanning sentences longer than 75 characters. Readers get disoriented, skip paragraphs, and leave out of fatigue.
* **Clean Fix:** Strictly constrain the text wrapper using `max-w-3xl` or `max-w-prose` with centered margins:
  ```html
  <main class="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
    <article class="prose prose-neutral dark:prose-invert max-w-none">
      <p class="text-base sm:text-lg leading-relaxed text-neutral-800">
        Paragraph text stays comfortable and readable across any screen size.
      </p>
    </article>
  </main>
  ```
* **The Waitsec Way:** Reading comfort is non-negotiable. Cap line length between 60 and 75 characters per line on all devices.

### 2. Code Blocks That Break Mobile Viewports

* **The Bad Habit:** Rendering `<pre><code>` blocks with default styling or `white-space: pre` without horizontal overflow protection.
* **The Problem:** A single long line of code (like a long URL or terminal command) forces the entire mobile page to expand to 900px width.
* **Why It Fails:** The entire website starts wobbling sideways on mobile phones. Users have to pinch-to-zoom just to recenter the text.
* **Clean Fix:** Always wrap code blocks with `overflow-x-auto` and specify a clean monospace font stack:
  ```html
  <div class="my-6 rounded-xl bg-neutral-900 text-neutral-100 p-4 overflow-x-auto border border-neutral-800">
    <pre class="font-mono text-sm leading-normal"><code>const response = await fetch("https://api.example.com/v1/data/endpoint/users");</code></pre>
  </div>
  ```
* **The Waitsec Way:** Code snippets must adapt to the screen, not break the screen. Contain horizontal overflow strictly inside the code block.

### 3. Markdown Tables Clipping Columns on Phones

* **The Bad Habit:** Inserting a 5-column data table inside an article and expecting it to fit on a 375px phone screen.
* **The Problem:** The rightmost 3 columns get permanently cut off, or the text inside table cells squishes into unreadable single-letter stacks.
* **Why It Fails:** Tables cannot shrink below the width of their text. When table boundaries are locked, readers miss crucial data.
* **Clean Fix:** Wrap every markdown table in an explicit scroll container with a visual scroll indicator:
  ```html
  <div class="my-6 w-full overflow-x-auto border border-neutral-200 rounded-lg">
    <table class="w-full min-w-[500px] text-left text-sm">
      <thead class="bg-neutral-50 border-b border-neutral-200">...</thead>
      <tbody class="divide-y divide-neutral-200">...</tbody>
    </table>
  </div>
  ```
* **The Waitsec Way:** Tables are inherently wide. Always give them dedicated horizontal scroll containers so the main page stays rock solid.

### 4. Header Crowding & Suffocating Line-Height

* **The Bad Habit:** Using tight line-height (`leading-tight`) on body paragraphs and putting zero top margin above `<h2>` and `<h3>` subheadings.
* **The Problem:** Subheadings look glued to the paragraph above them, and dense blocks of text look like intimidating walls of gray ink.
* **Why It Fails:** Reading on a screen is tiring. Without generous breathing room, readers skim and bounce.
* **Clean Fix:** Give subheadings double the margin above them (`mt-10 mb-4`), and use relaxed line height (`leading-relaxed` or `line-height: 1.75`) for body text:
  ```html
  <h2 class="text-2xl font-bold tracking-tight text-neutral-900 mt-12 mb-4">
    Core Architectural Changes
  </h2>
  <p class="text-base sm:text-lg leading-relaxed text-neutral-700 mb-6">
    Notice how the generous space above makes it instantly obvious that a new topic has begun.
  </p>
  ```
* **The Waitsec Way:** Visual breathing room creates typographic rhythm. Generous spacing makes complex technical content easy to absorb.

---

## Pre-Flight Checklist for Single Article Pages

- [ ] Is the article reading width capped at `max-w-3xl` or `65-75ch` to prevent eye strain?
- [ ] Do all code blocks and tables have `overflow-x-auto` to prevent mobile viewport wobbling?
- [ ] Is body paragraph line-height set to relaxed (`leading-relaxed` / 1.75)?
- [ ] Are subheadings given generous top margin (`mt-10` to `mt-12`) to separate topics clearly?
- [ ] Is there a clear back-navigation link at the top of the article?
