# Landing Page Blueprint (waitsec-pagemaker)

Use this guide when creating a marketing page, product launch screen, or SaaS homepage. It ensures your page converts well on both small phones and wide desktop screens without typical AI clutter.

---

## Complete Page Anatomy & Responsive Flow

### 1. Header & Navigation Bar
* **Desktop (1024px+):** Horizontal layout. Logo on the left, 3 to 4 clear links in the center, and 1 high-contrast Action Button on the right.
* **Mobile (<768px):** Clean bar with Logo on the left and a 44px by 44px hamburger menu icon or a single direct CTA button on the right. Slide-out drawer or full-screen overlay for mobile links with zero layout shift.

### 2. Hero Section
* **Desktop:** Clean centered layout or 2-column split (headline and CTA on the left, interactive product preview or screenshot on the right).
* **Mobile:** Stacks vertically. Headline first, short subtitle second, primary CTA button third, and product preview underneath. Never push the CTA below the fold on phones.

### 3. Problem & Solution Contrast
* **Desktop:** 2-column comparison card (Current Painful Way on the left vs Your Product Solution on the right).
* **Mobile:** Stacks into two vertical cards. Show the Pain Point card first, followed immediately by the Solution card.

### 4. Core Features Grid
* **Desktop:** 3-column grid (`lg:grid-cols-3 gap-8`). Equal card heights with consistent padding.
* **Tablet:** 2-column grid (`md:grid-cols-2 gap-6`).
* **Mobile:** 1-column stack (`grid-cols-1 gap-4`). Each card takes full width so text is easy to read.

### 5. Social Proof & Verifiable Metrics
* **Desktop:** Clean horizontal row of partner logos, GitHub star count, or verified customer quotes.
* **Mobile:** 2-column logo grid or vertically stacked quote cards. Never use auto-sliding carousels that users cannot pause with a thumb.

### 6. Pricing Tiers
* **Desktop:** 3-column side-by-side cards. The recommended plan is slightly highlighted with a subtle border.
* **Mobile:** Stacks vertically. Place the Recommended Plan at the very top so mobile users see the best value first without scrolling through basic tiers.

### 7. Frequently Asked Questions (FAQ) & Footer
* **Desktop & Mobile:** Simple vertical accordions (`<details>` and `<summary>`). Clicking opens the answer in place without jumping the page.
* **Footer:** Clean multi-column layout on desktop, neatly stacked links on mobile with copyright, privacy, and social icons.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The Multi-CTA Confusion Trap

* **The Bad Habit:** Putting three different buttons in the hero section: "Start Free Trial", "Book a Demo", and "Read Whitepaper", all with bright background colors.
* **The Problem:** The visitor has no idea which button is the primary action. On mobile, three stacked buttons take up half the screen before any explanation of the product.
* **Why It Fails:** When people are given too many competing choices, they freeze and click nothing. Conversion rates drop sharply.
* **Clean Fix:** Choose exactly 1 primary action button with your main brand color. If you need a second link, make it a plain text link or an outline button:
  ```html
  <div class="flex flex-col sm:flex-row items-center gap-3">
    <a href="/signup" class="w-full sm:w-auto px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg text-center">
      Start Free Trial
    </a>
    <a href="#demo" class="w-full sm:w-auto px-6 py-3 text-neutral-600 hover:text-neutral-900 font-medium text-center">
      View Live Demo &rarr;
    </a>
  </div>
  ```
* **The Waitsec Way:** Every marketing page has one main job. Make the single most important action obvious in less than 3 seconds.

### 2. The Stretched Desktop Comparison Table

* **The Bad Habit:** Building a wide 4-column comparison table comparing features against competitors, and letting it shrink directly into a mobile phone view.
* **The Problem:** The columns squish down to 60px wide, table headers overlap, and checkmark icons clip outside cell borders.
* **Why It Fails:** Users cannot read which feature belongs to which plan. Trying to pinch-to-zoom on a phone breaks page navigation.
* **Clean Fix:** On desktop, use a clean responsive table. On mobile screens below 768px, hide the wide table and show stacked feature cards for each plan instead:
  ```html
  <!-- Desktop Table View -->
  <div class="hidden md:block overflow-x-auto">
    <table class="w-full text-left border-collapse">...</table>
  </div>

  <!-- Mobile Stacked Card View -->
  <div class="block md:hidden space-y-4">
    <div class="p-5 border border-neutral-200 rounded-xl">...</div>
  </div>
  ```
* **The Waitsec Way:** Never force desktop tables into narrow phone viewports. Transform tables into vertical cards when the screen gets tight.

### 3. Copy-Paste Feature Cards

* **The Bad Habit:** Generating 6 identical cards, each with the exact same layout: a tiny blue icon, a vague headline like "Blazing Fast", and two lines of generic text.
* **The Problem:** The features section looks like a placeholder template. High-value features and minor features look completely identical.
* **Why It Fails:** Visitors scan pages quickly. When all cards look the same, visitors skip the entire section without reading.
* **Clean Fix:** Give primary features more visual weight. Use a bento-grid style: 1 large card with an actual UI preview for your flagship feature, and smaller cards for supporting features:
  ```html
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Flagship Feature (spans 2 columns on desktop) -->
    <div class="md:col-span-2 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
      <h3 class="text-xl font-semibold">Real-Time Sync Engine</h3>
      <p class="text-neutral-600 mt-2">Syncs data across tabs in under 50ms.</p>
      <!-- Real preview box -->
      <div class="mt-4 bg-white p-4 rounded-xl border border-neutral-200 font-mono text-xs">...</div>
    </div>

    <!-- Secondary Feature -->
    <div class="p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
      <h3 class="text-lg font-semibold">Offline Ready</h3>
      <p class="text-neutral-600 mt-2">Queues changes until your connection returns.</p>
    </div>
  </div>
  ```
* **The Waitsec Way:** Design follows content importance. Give your biggest product advantage the biggest visual real estate.

### 4. The 4-Column Pricing Overflow on Mobile

* **The Bad Habit:** Putting 3 or 4 pricing plans in a rigid grid that stays horizontal on small screens, causing the page to stretch sideways.
* **The Problem:** The mobile screen wobbles left and right, and the primary "Buy Now" buttons get clipped out of view.
* **Why It Fails:** Buying should be effortless. If a customer cannot see the price and the checkout button on their phone, they will leave immediately.
* **Clean Fix:** Stack pricing tiers vertically on mobile (`grid-cols-1`), switch to 2 columns on tablet (`md:grid-cols-2`), and 3 columns on desktop (`lg:grid-cols-3`). Always pin the Recommended plan at the top of the mobile stack:
  ```html
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <!-- Highlighted Plan: ordered first on mobile with order-1 -->
    <div class="order-1 lg:order-2 p-6 border-2 border-neutral-900 rounded-2xl bg-white shadow-sm">
      <span class="text-xs font-bold uppercase tracking-wider text-neutral-500">Most Popular</span>
      <h3 class="text-2xl font-bold mt-1">Pro Team</h3>
      <div class="text-4xl font-extrabold mt-3">$29<span class="text-sm font-normal text-neutral-500">/mo</span></div>
      <a href="/checkout" class="block w-full py-3 mt-6 text-center bg-neutral-900 text-white font-medium rounded-lg">Get Started</a>
    </div>

    <!-- Basic Plan -->
    <div class="order-2 lg:order-1 p-6 border border-neutral-200 rounded-2xl bg-white">...</div>

    <!-- Enterprise Plan -->
    <div class="order-3 lg:order-3 p-6 border border-neutral-200 rounded-2xl bg-white">...</div>
  </div>
  ```
* **The Waitsec Way:** Make the purchase path obvious and thumb-friendly. Zero horizontal scrolling on checkout sections.

### 5. The Jittery Full-Height Hero on Mobile

* **The Bad Habit:** Forcing the hero section to `height: 100vh` on mobile phones.
* **The Problem:** As the user scrolls down, the mobile browser URL bar shrinks or disappears. This triggers a sudden recalculation of `100vh`, making the hero jump up and down.
* **Why It Fails:** Visual jumping disorients users and makes the website feel cheap and buggy.
* **Clean Fix:** Use natural vertical padding (`py-16` or `py-20`), or use dynamic viewport units (`min-h-[100dvh]`):
  ```html
  <section class="min-h-[85vh] flex items-center justify-center py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900">...</h1>
    </div>
  </section>
  ```
* **The Waitsec Way:** Respect the physical mechanics of phone browsers. Let content breathe naturally instead of locking screen height.

---

## SEO, GEO & Structured Data (Landing Page)

State what the product is and who it is for within the first two sentences of the hero. Answer engines quote those lines, so make them complete and direct.

- Title: product name plus one clear benefit, about 50 to 60 characters.
- Meta description: what the product does and who it is for, about 140 to 160 characters.
- One `<h1>` that carries the core value proposition in plain words.
- Server-render the hero headline, subheadline, and primary CTA.
- Add an FAQ block with question-shaped `<h3>` headings. Start each answer with a direct one-sentence response.
- Keep the Open Graph image at 1200x630 and use an absolute URL.

### JSON-LD for a Landing Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "Example Inc",
      "url": "https://example.com",
      "logo": "https://example.com/images/logo.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com",
      "name": "Example",
      "publisher": { "@id": "https://example.com/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Example App",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://example.com",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a free plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The free plan covers one project with no time limit."
          }
        }
      ]
    }
  ]
}
</script>
```

Include the `FAQPage` block only when the FAQ is actually visible on the page. Use `Product` instead of `SoftwareApplication` for a physical or ecommerce product.

---

## Pre-Flight Checklist for Landing Pages

- [ ] Does the hero section have exactly 1 high-contrast primary CTA button?
- [ ] Do all pricing and comparison tables stack into vertical cards on screens narrower than 768px?
- [ ] Are feature cards structured with varied visual weight (bento style) rather than copy-paste clones?
- [ ] Is there zero horizontal page wobble when testing at 320px width?
- [ ] Are all headlines scaled down comfortably on mobile to avoid breaking words into multiple lines?
- [ ] Is there one H1, a unique title, a meta description, and an absolute Open Graph image?
- [ ] Is the JSON-LD valid, type-appropriate, and free of validator errors?
