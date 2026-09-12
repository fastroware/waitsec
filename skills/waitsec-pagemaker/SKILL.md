---
name: waitsec-pagemaker
description: "Web page architect and layout generator for AI coding agents. Produces clean, high-conversion landing pages, readable blogs, and standalone pages without AI visual clutter or broken mobile grids."
---

# waitsec-pagemaker: Clean Web Page Architect

You operate under the **waitsec-pagemaker** engineering discipline. This skill guides the agent in designing, structuring, and building complete web pages from scratch. It works hand-in-hand with [`skills/waitsec/SKILL.md`](../waitsec/SKILL.md) to keep code lean, secure, and free from AI design slop.

---

## Operating Mode & Role

When you are asked to build a new page, template, or screen, act as an experienced product designer and clean frontend engineer. Build pages where every section, color, and spacing choice has a real purpose.

## Activation Triggers

Activate this skill whenever:
- The user asks for a complete new page (for example: "build a landing page", "make a contact page", "create a blog template", "make an about me page").
- Structuring multi-section web views or routes (`/`, `/about`, `/contact`, `/blog`, `/blog/[slug]`).
- Writing layout containers, responsive grids, and design themes.

---

## Part 1: Mobile & Responsive Layout

### 1. Desktop Squeezed into Mobile

* **The Bad Habit:** Creating a wide desktop layout with 3 or 4 columns, and letting it shrink into a narrow phone screen without changing the structure.
* **The Problem:** Cards become 70px wide, images get clipped, and text squishes into narrow vertical strips.
* **Why It Fails:** People cannot tap buttons without hitting neighboring elements by accident, and reading squished text causes instant eye strain. Users assume the site is broken on mobile.
* **Clean Fix:** Change the layout to a single vertical stack on mobile (`grid-cols-1` or `flex-col`). Only expand into 2 columns on tablets, and 3 or 4 columns on large desktop screens.
* **The Waitsec Way:** Mobile is a standalone layout, not a desktop layout squeezed down. Build for the small phone screen first, then add columns only when the screen width genuinely allows it.

### 2. Breakpoints Based on Device Names

* **The Bad Habit:** Hardcoding arbitrary media query breakpoints because "that is the iPhone 14 size" or "that is the iPad size".
* **The Problem:** The design breaks whenever a user views it on a slightly different screen, a split-screen browser, or an Android phone with different pixel dimensions.
* **Why It Fails:** Phone models and tablet sizes change every single year. Tying layout rules to specific device names creates fragile code that breaks on future devices.
* **Clean Fix:** Place breakpoints where your content naturally begins to feel cramped. Narrow your browser window slowly. The moment text lines feel too short or cards feel crowded, that exact width is your breakpoint.
* **The Waitsec Way:** Design around your content, not around phone marketing specs. Let the content dictate when a layout needs to shift.

### 3. Mobile as a Late Patch

* **The Bad Habit:** Writing 500 lines of desktop CSS first, then adding a tiny 10-line media query at the very bottom to patch the worst mobile bugs.
* **The Problem:** The mobile layout is full of inherited desktop rules that cause horizontal scrolling, massive font sizes, and awkward margins.
* **Why It Fails:** A patch only fixes the bug you noticed today. It leaves twenty other mobile glitches that real visitors see right away.
* **Clean Fix:** Write base styles for mobile viewports first (mobile-first). Add media queries (`min-width`) to enhance the design as the screen gets wider.
* **The Waitsec Way:** A web page is mobile by default. Desktop is an enhancement, not the original starting point.

### 4. The Two-State Extreme

* **The Bad Habit:** Defining only two states: a tiny 1-column mobile stack, and an ultra-wide 4-column desktop grid, with nothing in between.
* **The Problem:** On tablets, iPads, and small laptops (roughly 600px to 1024px), the page either looks like a ridiculously stretched phone stack or a crowded desktop grid.
* **Why It Fails:** Millions of visitors use tablets and mid-sized screens. Treating the web as only "small phone" or "giant monitor" ruins the experience for mid-tier devices.
* **Clean Fix:** Use a three-tier progression: 1 column on phone, 2 columns on tablet (`md:grid-cols-2`), and 3 or 4 columns on desktop (`lg:grid-cols-3` or `xl:grid-cols-4`).
* **The Waitsec Way:** The web is a continuous sliding scale of widths. Test the entire range by dragging your window width from 320px up to 1440px.

### 5. Horizontal Page Overflow

* **The Bad Habit:** Setting fixed widths like `width: 650px` or `min-w-[500px]` on main containers, or letting code blocks and tables stretch off the screen.
* **The Problem:** The entire page wobbles left and right on mobile, and text disappears past the right edge of the screen.
* **Why It Fails:** Horizontal scrolling on a vertical web page is frustrating. Users lose their scroll position and cannot read sentences properly.
* **Clean Fix:** Never set fixed pixel widths on layout containers. Use fluid widths like `w-full max-w-5xl mx-auto px-4`. Wrap tables and code blocks in `overflow-x-auto`.
* **The Waitsec Way:** If content spills past the viewport width, the layout is broken. Zero horizontal page scrolling on mobile screens.

---

## Part 2: Scale, Sizing & Human Touch

### 1. Giant Desktop Spacing on Phones

* **The Bad Habit:** Leaving desktop padding (`py-24 px-16`) and huge gaps (`gap-12`) active on mobile screens.
* **The Problem:** A single hero section takes up three full screen scrolls on a phone before the user even sees the first sentence of real content.
* **Why It Fails:** Phone screens have limited space. Massive empty gaps make users feel like the app is empty or poorly built.
* **Clean Fix:** Drop section padding on mobile to `py-10 px-4`. Scale up to `md:py-16` and `lg:py-24` as the screen widens.
* **The Waitsec Way:** Spacing must respect the physical canvas in the user's hand. Small screen means compact, breathable spacing.

### 2. Tiny Tap Targets That Fingers Cannot Hit

* **The Bad Habit:** Making buttons, links, and icons 20px by 20px with no padding on mobile.
* **The Problem:** Touch targets are too small for real human fingers. Users tap a link and accidentally hit a delete button or open the wrong menu.
* **Why It Fails:** Unlike a mouse pointer with pixel precision, human thumbs cover roughly 44 to 48 pixels of screen space. Small targets cause mis-clicks and rage quits.
* **Clean Fix:** Every clickable element on mobile must have an interactive touch target of at least 44px by 44px. Add invisible padding (`p-2.5`) if the visual icon is small.
* **The Waitsec Way:** If a real human thumb cannot comfortably tap a button on the first attempt, the UI is not finished.

### 3. Full Screen 100vh Sections on Mobile

* **The Bad Habit:** Setting hero sections or cards to `height: 100vh` on mobile phones.
* **The Problem:** When the browser address bar slides in and out during scrolling, the screen jumps up and down violently. Content gets cut off at the bottom.
* **Why It Fails:** Mobile browsers constantly resize `100vh` as the user scrolls. It makes the site feel jittery and cuts off primary CTA buttons under the bottom navigation bar.
* **Clean Fix:** Use `min-h-[85vh]` or `min-h-screen` with `dvh` units (`min-h-[100dvh]`), and let content flow naturally with comfortable padding.
* **The Waitsec Way:** Never lock mobile heights strictly. Let the text and buttons define the natural height of the section.

### 4. Fixed Font Sizes That Wrap Awkwardly

* **The Bad Habit:** Using fixed `font-size: 48px` on main headlines across all screen sizes.
* **The Problem:** A single word takes up three lines on a phone, creating broken hyphenated words and pushed-down content.
* **Why It Fails:** Big desktop typography looks bold on a monitor, but becomes unreadable on a phone screen.
* **Clean Fix:** Scale typography down on mobile: `text-2xl sm:text-4xl lg:text-5xl`, or use fluid type with CSS `clamp()`.
* **The Waitsec Way:** Headlines must fit the natural reading rhythm of a human being on any device.

---

## Part 3: Visual Restraint & Color Discipline

### 1. Generic AI Purple Gradients

* **The Bad Habit:** Splashing blue-to-purple, cyan-to-pink, or rainbow gradients across backgrounds, buttons, and text headlines.
* **The Problem:** The design looks identical to every lazy AI template generated in the last two years.
* **Why It Fails:** It shows that the project has no real brand identity. Visitors recognize the AI aesthetic immediately and question the product's credibility.
* **Clean Fix:** Use clean, solid neutral backgrounds (clean whites, subtle grays, or solid dark tones). Pick one deliberate accent color for primary actions.
* **The Waitsec Way:** Good design is built on hierarchy, not colorful glows. Restraint makes a page look confident and professional.

### 2. Blur and Glassmorphism Everywhere

* **The Bad Habit:** Putting `backdrop-blur` and semi-transparent frosted glass layers on the navbar, every card, modal, and footer at once.
* **The Problem:** When every element is transparent and blurry, there is no solid ground plane. Background text bleeds through cards, making reading painful.
* **Why It Fails:** If everything is elevated glass, nothing stands out as important. Contrast drops and accessibility fails.
* **Clean Fix:** Keep background surfaces solid. If you use frosted glass, limit it to at most one element (like a sticky top navbar). Everything else stays matte and solid.
* **The Waitsec Way:** Elevation should be functional, not decorative. Use solid layers to keep text crisp and clear.

### 3. Pill Shapes on Everything

* **The Bad Habit:** Giving 9999px border-radius (`rounded-full`) to every button, card, modal, badge, and input field.
* **The Problem:** The UI loses visual distinction. A button looks like a badge, an input looks like a search pill, and cards look bubbly and childish.
* **Why It Fails:** Inconsistent or exaggerated roundness removes the professional structure of an interface.
* **Clean Fix:** Pick a clean, consistent border-radius (such as `rounded-md` or `rounded-lg`) for cards and inputs. Reserve pill shapes only for small tags or badges if needed.
* **The Waitsec Way:** Keep shapes intentional. Buttons should look like buttons, and cards should look like cards.

### 4. Overly Soft Floating Shadows

* **The Bad Habit:** Adding huge, diffused drop-shadows to every container so that every single box feels like it is floating 50px off the screen.
* **The Problem:** The entire page looks blurry, lacks sharp borders, and loses visual structure.
* **Why It Fails:** Shadows should communicate that an element is physically lifted (like a dropdown menu or modal). When every flat card has a giant shadow, depth loses all meaning.
* **Clean Fix:** Use crisp, subtle borders (`border border-neutral-200 dark:border-neutral-800`) to define cards. Reserve shadows for floating elements like dropdowns and modals.
* **The Waitsec Way:** Flat surfaces with clear borders age better and look cleaner than fake floating shadows.

### 5. Technical Background Dot Grids

* **The Bad Habit:** Putting blueprint lines, graph paper grids, or repeating dot matrices behind hero sections just to make the site look "techy".
* **The Problem:** The grid competes with the text, creates visual noise, and looks like a generic developer boilerplate template.
* **Why It Fails:** It adds visual clutter without delivering any product information.
* **Clean Fix:** Use a clean, solid background. Let your product screenshots, headlines, and real code snippets provide the visual interest.
* **The Waitsec Way:** Never use background wallpaper to compensate for a weak value proposition. State what the product does cleanly.

---

## Part 4: Human Readability & Accessibility

### 1. Low-Contrast Faint Gray Text

* **The Bad Habit:** Using light gray text (`#999999` or `#aaaaaa`) on white backgrounds because it looks "modern and soft".
* **The Problem:** The text is almost invisible in sunlight, on budget monitors, or to anyone with mild vision impairment.
* **Why It Fails:** Contrast is not an optional aesthetic choice. If people cannot read your words without squinting, they will close the tab.
* **Clean Fix:** Ensure all body text has at least a 4.5:1 contrast ratio against the background. Use dark neutral colors (like `#171717` on `#ffffff`, or `#f5f5f5` on `#0a0a0a`).
* **The Waitsec Way:** Readability always beats subtle styling. Text exists to be read clearly.

### 2. Text Over Busy Photos Without Darkening

* **The Bad Habit:** Placing white text directly over a colorful photo or a bright hero graphic.
* **The Problem:** In bright areas of the photo, the white text completely disappears.
* **Why It Fails:** Even if the text looks readable on your personal monitor, it breaks whenever screen brightness or device color balance changes.
* **Clean Fix:** Add a solid dark overlay (`bg-black/60`) or place the text in a solid container next to the image instead of on top of it.
* **The Waitsec Way:** Never gamble with readability over unpredictable background images.

### 3. Missing Keyboard Focus Rings

* **The Bad Habit:** Removing focus outlines with `outline: none` because the browser blue ring looks "ugly" to designers.
* **The Problem:** Users navigating with the keyboard (Tab key) have zero clue where their cursor is on the screen.
* **Why It Fails:** It locks out keyboard-only users, power users who love shortcuts, and anyone using assistive technology.
* **Clean Fix:** Replace the default ring with a custom high-contrast focus ring: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900`.
* **The Waitsec Way:** An interface that cannot be used with a keyboard is an incomplete interface.

---

## Part 5: Page Archetypes & Blueprint Routing

When the user asks for a specific type of page, check its dedicated reference guide:

### 1. Marketing & Conversion Pages
* **Includes:** SaaS homepages, landing pages, product launch screens.
* **Key Blueprint:** Clear hero statement, problem vs solution, key feature cards, social proof, and a single high-contrast primary CTA.
* *Detailed Guide:* [`skills/waitsec-pagemaker/references/landing-page.md`](./references/landing-page.md)

### 2. Editorial & Content Pages
* **Includes:** Blog catalogs, single article readers, changelogs, docs.
* **Key Blueprint:** Comfortable reading line length (60 to 75 characters per line), clean typography rhythm, clear subheadings, and distraction-free reading.
* *Detailed Guides:*
  - Blog Index: [`skills/waitsec-pagemaker/references/blog-index.md`](./references/blog-index.md)
  - Single Article: [`skills/waitsec-pagemaker/references/article-single.md`](./references/article-single.md)

### 3. Standalone Single Pages
* **Includes:** Contact forms, About Me / Portfolio, simple profile pages.
* **Key Blueprint:** Single-purpose layouts, minimal input forms (name, email, message) with instant validation states, and direct project links.
* *Detailed Guides:*
  - Contact Page: [`skills/waitsec-pagemaker/references/contact-page.md`](./references/contact-page.md)
  - About / Portfolio: [`skills/waitsec-pagemaker/references/about-me.md`](./references/about-me.md)

---

## Pre-Flight Checklist

Before returning generated page code to the user, verify:

- [ ] Does the mobile layout reflow into a clean vertical stack without horizontal scrolling?
- [ ] Are clickable buttons and links at least 44px by 44px on mobile viewports?
- [ ] Are generic AI gradients, floating shadows, and all-pill buttons removed in favor of clean solid styling?
- [ ] Does all text meet comfortable readability standards with high contrast against the background?
- [ ] Is there exactly one primary Call to Action (CTA) per marketing section?
