# Blog & Article Index Blueprint (waitsec-pagemaker)

Use this guide when creating a blog listing, article archive, or news feed. It ensures your readers can easily discover, browse, and filter articles across phones, tablets, and wide monitors.

---

## Complete Page Anatomy & Responsive Flow

### 1. Header & Category Bar
* **Desktop (1024px+):** Clean page heading (e.g. "Engineering Journal"), a 1-sentence descriptor, and a horizontal row of category pills (All, Architecture, Security, Tutorials).
* **Mobile (<768px):** Category pills sit in a smooth horizontally scrollable row (`overflow-x-auto no-scrollbar`) with 44px touch targets. Never wrap 15 category tags into four messy vertical lines.

### 2. Featured / Latest Story (Hero Card)
* **Desktop:** Wide horizontal card (spans 2 columns or full width). High-resolution cover image on the left (50% width), title, category tag, 3-line excerpt, and author metadata on the right (50% width).
* **Mobile:** Stacks vertically. Image on top (aspect-video), followed by title, date, reading time, and excerpt.

### 3. Article Stream / Card Grid
* **Desktop Grid Option:** 3-column card grid (`lg:grid-cols-3 gap-8`).
* **Desktop Feed Option (Substack/Medium Style):** Single centered feed (`max-w-3xl mx-auto space-y-8`). Highly recommended for tech blogs.
* **Tablet:** 2-column grid (`md:grid-cols-2 gap-6`).
* **Mobile:** 1-column vertical stack (`grid-cols-1 gap-6`). Every card gets full screen width with generous tap target padding.

### 4. Article Card Anatomy
Every article preview card must contain:
1. Category badge (e.g. "Security" or "CSS").
2. Article title (`<h2>` or `<h3>`) with clear hover underline or color shift.
3. Reading metadata: Publication date and estimated reading time (e.g. "Sep 12, 2026 • 5 min read").
4. Short excerpt: strictly truncated to 2 or 3 lines (`line-clamp-2` or `line-clamp-3`).
5. Author snapshot: small 28px avatar and author name.

### 5. Pagination & Page Navigation
* **Desktop & Mobile:** Explicit page numbers or simple "Previous Page" and "Next Page" buttons.
* Avoid infinite scroll by default so users can reach the footer and search filters comfortably.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The Giant Image Trap on Mobile

* **The Bad Habit:** Placing massive 16:9 cover images with fixed 400px heights above every single article card.
* **The Problem:** On a phone, one single article card fills the entire screen. The user has to scroll 3 full times just to see two article titles.
* **Why It Fails:** People browse blog indexes to scan headlines quickly. Giant thumbnail images waste mobile vertical space and burn unnecessary cellular data.
* **Clean Fix:** Use compact thumbnail aspect ratios on mobile, or switch to a clean text-first layout where thumbnails are small squares placed on the right side:
  ```html
  <article class="flex flex-col sm:flex-row items-start justify-between gap-4 py-6 border-b border-neutral-200">
    <div class="flex-1">
      <span class="text-xs font-semibold text-neutral-500 uppercase">Architecture</span>
      <h2 class="text-xl font-bold mt-1 hover:text-neutral-600">
        <a href="/blog/scaling-sqlite">How We Scaled SQLite to 100k Requests</a>
      </h2>
      <p class="text-sm text-neutral-600 mt-2 line-clamp-2">
        A practical walkthrough of write-ahead logging and connection pooling.
      </p>
      <div class="text-xs text-neutral-400 mt-3">Sep 12, 2026 • 4 min read</div>
    </div>
    <!-- Small thumbnail on right (tablet/desktop), hidden or compact on mobile -->
    <div class="w-full sm:w-32 h-32 bg-neutral-100 rounded-lg overflow-hidden shrink-0">...</div>
  </article>
  ```
* **The Waitsec Way:** A blog index is an index for reading. Headlines and excerpts must always take priority over decorative stock images.

### 2. The Wrapping Category Pill Explosion

* **The Bad Habit:** Displaying 10 or 15 topic tags ("JavaScript", "Python", "Database", "Design", "DevOps") as inline flex pills that wrap into 4 uneven rows on mobile.
* **The Problem:** The top third of the phone screen is consumed by a wall of colorful tag pills, pushing the actual articles out of view.
* **Why It Fails:** It looks messy, creates visual clutter, and forces mobile users to scroll before they even see an article.
* **Clean Fix:** Use a single horizontal scrolling row on mobile, or use a clean dropdown selector:
  ```html
  <div class="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
    <button class="px-4 py-2 text-xs font-semibold bg-neutral-900 text-white rounded-full shrink-0">All Posts</button>
    <button class="px-4 py-2 text-xs font-semibold bg-neutral-100 text-neutral-700 rounded-full shrink-0 hover:bg-neutral-200">Security</button>
    <button class="px-4 py-2 text-xs font-semibold bg-neutral-100 text-neutral-700 rounded-full shrink-0 hover:bg-neutral-200">Architecture</button>
    <button class="px-4 py-2 text-xs font-semibold bg-neutral-100 text-neutral-700 rounded-full shrink-0 hover:bg-neutral-200">Frontend</button>
  </div>
  ```
* **The Waitsec Way:** Protect vertical mobile screen space. Keep navigation filters on a single horizontal plane.

### 3. The Uncontrollable Infinite Scroll

* **The Bad Habit:** Loading 20 more articles automatically every time the user scrolls near the bottom of the page, with zero option to stop.
* **The Problem:** The footer, contact links, copyright, and RSS feed links become completely unreachable because the page keeps jumping and inserting new items.
* **Why It Fails:** Users get trapped in an endless scroll. If they want to find an older article or visit the privacy policy, they are blocked.
* **Clean Fix:** Use clean, explicit pagination buttons or a manual "Load More Articles" button that only triggers when clicked:
  ```html
  <div class="flex items-center justify-between pt-10 border-t border-neutral-200">
    <a href="?page=1" class="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50">
      &larr; Newer Posts
    </a>
    <span class="text-xs text-neutral-500">Page 2 of 8</span>
    <a href="?page=3" class="px-4 py-2 text-sm font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50">
      Older Posts &rarr;
    </a>
  </div>
  ```
* **The Waitsec Way:** Put the user in total control of their navigation. Never trap users with automatic background triggers.

### 4. The Tiny Unreadable Date Stamp

* **The Bad Habit:** Showing dates in 9px light gray text (`text-[9px] text-gray-300`), making it nearly invisible against white backgrounds.
* **The Problem:** Readers have no idea whether an engineering tutorial was written yesterday or seven years ago.
* **Why It Fails:** Outdated software tutorials waste hours of developer time. Freshness is one of the most critical decision factors for technical articles.
* **Clean Fix:** Display dates and reading times in clear, readable 12px or 13px neutral text with proper contrast:
  ```html
  <div class="flex items-center gap-2 text-xs text-neutral-500 font-medium">
    <time datetime="2026-09-12">Sep 12, 2026</time>
    <span>•</span>
    <span>4 min read</span>
  </div>
  ```
* **The Waitsec Way:** Metadata gives context to content. Make publication dates and reading times clearly legible.

---

## SEO, GEO & Structured Data (Blog Index)

- Title: blog name plus its topic focus, about 50 to 60 characters.
- Meta description: what the blog covers and who it helps, about 140 to 160 characters.
- One `<h1>` for the index title, and `<h2>` for each article title.
- Server-render article titles, excerpts, and dates so crawlers read them without JavaScript.
- Link each card with the article title as anchor text, not "read more".
- Point a canonical tag at the canonical page of the listing, and keep paginated pages self-canonical.
- Keep the publish date and reading time visible, because freshness matters to both search and answer engines.

### JSON-LD for a Blog Index

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Engineering Journal",
  "url": "https://example.com/blog",
  "description": "Articles about software architecture, security, and frontend engineering.",
  "isPartOf": { "@type": "WebSite", "url": "https://example.com" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://example.com/blog/scaling-sqlite"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://example.com/blog/reading-stack-traces"
      }
    ]
  }
}
</script>
```

Use `Blog` instead of `CollectionPage` when the listing is a true blog. Include one `ListItem` per visible article, in the same order shown on the page.

---

## Pre-Flight Checklist for Blog Index Pages

- [ ] Do article cards stack into a clean single column on mobile without horizontal scrolling?
- [ ] Are category filter pills contained in a single horizontal scrollable row on mobile?
- [ ] Are article excerpts clamped to 2 or 3 lines so cards maintain a predictable height?
- [ ] Can visitors comfortably reach the footer without being trapped by automatic infinite scroll?
- [ ] Are publication dates and reading estimates clearly legible with strong contrast?
- [ ] Does the page expose a valid CollectionPage or Blog ItemList schema?
- [ ] Do article cards use the article title as anchor text instead of "read more"?
