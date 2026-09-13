---
name: waitsec-pagemaker
description: "Web page architect for AI coding agents. Detects the project stack, then produces clean, mobile-first, SEO and GEO ready pages with valid Schema.org data, responsive navigation, and zero visual slop."
---

# waitsec-pagemaker: Clean Web Page Architect

You operate under the **waitsec-pagemaker** engineering discipline. This skill guides the agent in designing, structuring, and building complete web pages from scratch. It works hand-in-hand with [`skills/waitsec/SKILL.md`](../waitsec/SKILL.md) to keep code lean, secure, and free from AI design slop.

Before writing a single line of markup, always run the Project Recon in Part 0. It tells you which framework, template engine, styling system, and icon library are already in play, so you extend the project instead of fighting it.

---

## Generation Contract (Mandatory)

Treat this section as the prompt you must satisfy every time you generate a page. These are generation-time rules, not documentation notes. Apply all of them to the actual output, and if one cannot be satisfied, stop and tell the user instead of shipping something that violates it.

1. **Recon before markup.** Run Part 0, then state the detected stack, template engine, styling system, load method, version, and icon library in one short block.
2. **Follow the project.** Use the framework, template syntax, and styling system that already exist. Never add a second CSS system. Ask before switching a native CSS project to a framework.
3. **Install with the right method.** Tailwind with an existing build step installs through npm. Tailwind in a static project uses the CDN unless the user asks for a local install. Bootstrap and other requested frameworks install locally.
4. **Every generated page includes JSON-LD.** Add a valid Schema.org block in `<head>`, with the type matched to the page (see Part 8). No page ships without structured data. Auth and error pages use a minimal `WebPage` node and are set to `noindex`.
5. **Icons only from a library.** Use the project's existing icon library, or Lucide from CDN as the default. Never use an emoji as an icon. Never hand-write inline SVG markup. Never use an image as a UI icon.
6. **No em dash and no en dash.** Use colons, commas, periods, parentheses, or plain hyphens in every word of the output.
7. **No emoji anywhere.** Not in headings, body copy, buttons, badges, alt text, or metadata.
8. **Interaction follows the UX rules.** Confirm actions sit on the right on desktop and at the bottom of the stack on mobile, with Cancel before Save. Design loading, empty, error, and success states.
9. **The navbar must be responsive.** A working menu button on mobile, a solid sticky background, 4 to 5 primary links, and a visible active and focus state.
10. **Meet the SEO and GEO bar.** One H1, a unique title and meta description, a canonical URL, Open Graph tags, and answer-first content that machines can quote.
11. **Finish with the Pre-Flight Checklist.** Do not report the page as done until every box is checked.
12. **Translate vague style words.** When the user says minimalist, modern, clean, premium, bold, or similar, convert the word into concrete tokens using Part 10, reuse the project tokens first, and state the translation before generating. Never treat a style word as a license for gradients, glass, or heavy shadows.
13. **Motion must earn its place.** Reuse the project's motion library, or anime.js when real motion is requested: CDN in static projects, npm in build projects. Animate only `transform` and `opacity`, and honor `prefers-reduced-motion`.
14. **3D only when it explains something.** Use three.js or the project's 3D library, lazy-load it after the content, cap the device pixel ratio, and always provide a poster and a no-WebGL fallback.
15. **Reuse the project's images first.** Only when no existing image fits, source from Pexels with no identifiable people (prefer plants, landscapes, and textures), match the slot's aspect ratio, and vendor important images.

---

## Operating Mode & Role

When you are asked to build a new page, template, or screen, act as an experienced product designer and clean frontend engineer. Build pages where every section, color, and spacing choice has a real purpose. Read the existing project first, follow its conventions, and only then generate markup.

## Activation Triggers

Activate this skill whenever:
- The user asks for a complete new page (for example: "build a landing page", "make a contact page", "create a blog template", "make an about me page").
- Structuring multi-section web views or routes (`/`, `/about`, `/contact`, `/blog`, `/blog/[slug]`).
- Writing layout containers, responsive grids, navigation bars, and design themes.
- Adding SEO metadata, Open Graph tags, or Schema.org structured data to a page.
- Building authentication screens (login, register, password reset) or account lockout and rate-limit pages.
- Adding animation, parallax, scroll effects, or 3D graphics to a page.
- Choosing, sourcing, or placing images and other media on a page.

---

## Part 0: Project Recon (Run This First, Every Time)

Never generate a page blind. Spend the first minute reading the project, then state what you found. Recon is read-only: do not install or change anything until you have reported your findings.

### 1. Detect the Framework

Look for these markers in the project root and report the result in one line:

| Marker found | Framework |
| :--- | :--- |
| `artisan`, `composer.json` with `laravel/framework`, `app/`, `routes/web.php` | Laravel (PHP) |
| `package.json` with `next` | Next.js (React) |
| `package.json` with `nuxt` | Nuxt (Vue) |
| `package.json` with `vite` and no SSR framework | Vite SPA (React, Vue, or Svelte) |
| `package.json` with `@sveltejs/kit` | SvelteKit |
| `manage.py`, `settings.py` | Django |
| `config/routes.rb`, `Gemfile` with `rails` | Ruby on Rails |
| `wp-config.php` | WordPress |
| Only `.html` files, no framework files | Native or static site |

If two markers conflict, or none are found, say so plainly and ask the user which stack to target before continuing.

### 2. Detect the Template Engine

Check how views are written, then follow that exact syntax:

- Blade (`.blade.php`) for Laravel, using `{{ }}`, `{!! !!}`, `@if`, `@foreach`, `@extends`, `@section`.
- Twig (`.twig`), EJS (`.ejs`), Pug (`.pug`), Jinja (`.html` with `{% %}`), ERB (`.erb`).
- JSX or TSX for React, SFC (`.vue`) for Vue, Svelte components for Svelte.
- Plain `.html` for static pages.

If the user names a specific file or template in the prompt, use that file and that syntax. If the mention is ambiguous (for example "make a page" in a project that has both Blade views and a Vite SPA), ask which one before writing.

### 3. Detect the Styling System

Find out what styles the project already uses before adding a single class:

- **Tailwind CSS:** look for `tailwind.config.js`, `tailwind.config.ts`, `tailwind.config.cjs`, `@tailwind base;` in a CSS file, `@import "tailwindcss";`, or a Tailwind CDN script tag. Record the major version, because v3 and v4 differ in config and syntax.
- **Bootstrap:** look for `bootstrap` in `package.json`, a `bootstrap.min.css` link, or a `bootstrap.scss` import. Record the version, because v4 and v5 differ.
- **Other frameworks:** Bulma, Foundation, Pico, UnoCSS, or any utility or component library. Identify and record it.
- **Native CSS:** plain `.css` files, `<style>` blocks, CSS modules, or SCSS and Sass without a utility framework.

For whichever system you find, also record **how it loads**: local build (npm or bundler import) or CDN, and the exact version when it is visible.

### 4. Decide the Styling Path

Follow this order and do not skip it:

1. **A framework already exists in the project:** use it. Never introduce a second CSS system.
2. **The user explicitly asked for Bootstrap or another framework:** use that framework, installed locally through the project's package manager.
3. **The user explicitly wants native CSS:** keep native CSS.
4. **Native CSS with no stated preference:** pause and ask one direct question: "Keep native CSS, or switch to Tailwind CSS?" Then wait for the answer.
5. **Tailwind chosen and the project has `package.json`:** install it through npm and wire it into the build. Do not use a CDN when a build step already exists.
6. **Tailwind chosen in a static project with no build step:** use the Tailwind CDN so the user gets a fast result. Only install locally if the user asks for it.
7. **Never mix two styling systems** (for example Tailwind utilities plus a Bootstrap grid) in the same page.

Report the final decision in one line: styling system, load method (local or CDN), and version.

### 5. Detect the Icon Library

- If the project already has an icon library (Lucide, Heroicons, Font Awesome, Bootstrap Icons, Phosphor, Tabler), use it.
- If the user asks for a specific icon set, use that set.
- Otherwise, default to **Lucide icons loaded from CDN**. Use the official Lucide browser script and `data-lucide` names, then call `lucide.createIcons()` after the page renders:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="save" class="w-5 h-5"></i>
  <script>lucide.createIcons();</script>
  ```
- Never hand-write raw inline SVG markup. Never use an emoji as an icon. Never use a raster image as a stand-in for a UI icon.

### 6. Detect Motion, 3D, and Media Assets

Find out what animation, 3D, and image tooling already exists before adding any:

- **Motion libraries:** GSAP, anime.js, Framer Motion, Motion One, AOS, ScrollReveal. Check `package.json` and script tags. Record the version and whether it loads locally or from a CDN.
- **3D libraries:** three.js, `@react-three/fiber`, Babylon.js, `model-viewer`. Record the same details.
- **Media assets:** scan `public/`, `public/images/`, `assets/`, `static/`, `img/`, `images/`, `resources/`, `storage/`, `uploads/`, and `media/` for existing logos, product shots, and photos. Note formats and dimensions.

Then decide:

1. Reuse the motion or 3D library already in the project.
2. Use the project's own images before sourcing any new ones.
3. If the user asks for animation, parallax, or 3D, follow [`references/motion-and-3d.md`](./references/motion-and-3d.md).
4. If the project has no suitable image for a slot, follow [`references/image-sourcing.md`](./references/image-sourcing.md).

### 7. Hard Content Rules

These rules apply to every generated page without exception:

- No emoji anywhere: not in copy, headings, buttons, or alt text.
- No hand-written inline SVG illustrations or icon markup.
- No em dash and no en dash. Use colons, commas, periods, parentheses, or plain hyphens.
- Icons come from the detected icon library or from Lucide CDN.

### 8. State Findings and Ask Only What Matters

Post a short recon summary before building, for example:

> Stack: Laravel 11 with Blade. Styling: Tailwind CSS v3, local build. Icons: none found, defaulting to Lucide CDN. Page: blog article template.

Then ask at most one or two questions, only about decisions that are expensive to reverse (styling system, template target, icon library). Everything else uses sensible defaults, and you state the defaults you chose.

### 9. Recon Pitfalls

#### 1. Assuming the Stack

* **The Bad Habit:** Generating a React component in a Blade project, or writing Tailwind classes in a project that uses plain CSS.
* **The Problem:** The page does not render, or it renders unstyled, and the user has to rewrite it.
* **Why It Fails:** The agent followed a template from memory instead of reading the project. Trust drops immediately.
* **Clean Fix:** Run Part 0 before writing markup. Match the framework, template syntax, and styling system you actually found.
* **The Waitsec Way:** Read the project first. The stack decides the syntax, not the model's habit.

#### 2. Mixing Two Styling Systems

* **The Bad Habit:** Adding Tailwind utilities on top of an existing Bootstrap page, or dropping Bootstrap classes into a Tailwind project.
* **The Problem:** Two spacing scales, two color systems, and two resets fight each other.
* **Why It Fails:** Spacing and colors drift, the bundle grows, and future changes become unpredictable.
* **Clean Fix:** Use the styling system already in the project, or ask before switching.
* **The Waitsec Way:** One system per project. Consistency is cheaper than variety.

#### 3. Silent Stack Guess

* **The Bad Habit:** Proceeding with a guessed stack instead of telling the user what you detected.
* **The Problem:** The user only discovers the mismatch after the page is generated.
* **Why It Fails:** Review time is wasted, and the correction costs more than the original question would have.
* **Clean Fix:** Print the recon summary in one short block, then proceed. If a crucial detail is missing, ask.
* **The Waitsec Way:** Say what you found before you build on it.

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

## Part 5: Interaction & UX Discipline

### 1. Primary Action on the Wrong Side

* **The Bad Habit:** Placing the confirming action ("Save", "Submit", "Continue") on the left and the secondary action ("Cancel", "Back") on the right.
* **The Problem:** On mobile the primary button sits away from the thumb, and on desktop it breaks the reading order users expect.
* **Why It Fails:** People expect the confirming action at the end of the row, on the right. Reversing it causes hesitation and mis-taps, and it is worse when a destructive action sits in the primary spot.
* **Clean Fix:** Keep the secondary action (Cancel, Back) first and the primary action (Save, Submit) last. On mobile the primary action sits at the bottom of the stack, close to the thumb. On desktop it sits on the right:
  ```html
  <div class="flex flex-col sm:flex-row sm:justify-end gap-3">
    <button type="button" class="w-full sm:w-auto px-4 py-2.5 border border-neutral-300 rounded-lg">Cancel</button>
    <button type="submit" class="w-full sm:w-auto px-4 py-2.5 bg-neutral-900 text-white rounded-lg">Save changes</button>
  </div>
  ```
* **The Waitsec Way:** Match the layout to the user's hand and habit. The confirming action lives where the thumb and cursor naturally land.

### 2. Destructive Action Without Guardrails

* **The Bad Habit:** Placing "Delete" next to "Save" with the same weight and the same color.
* **The Problem:** A slip of the thumb triggers an irreversible action.
* **Why It Fails:** Destructive mistakes cost real data, and users stop trusting the interface.
* **Clean Fix:** Separate destructive actions from safe ones, give them a distinct danger style, require an explicit confirmation for irreversible actions, and never make Delete the default focused button.
* **The Waitsec Way:** Make the safe path easy and the destructive path deliberate.

### 3. No Visible State Change

* **The Bad Habit:** A button that shows nothing after a click while a request runs in the background.
* **The Problem:** The user clicks again because the first click appeared to do nothing.
* **Why It Fails:** Double submissions create duplicate records, and silence reads as failure.
* **Clean Fix:** Disable the button on click, show a spinner or a "Saving..." label, then render a clear success or error state.
* **The Waitsec Way:** Every action needs feedback. The user should never wonder whether the click worked.

### 4. Primary Actions Out of Thumb Reach

* **The Bad Habit:** Tucking important controls into the top corners of the mobile screen.
* **The Problem:** One-handed users cannot reach them comfortably.
* **Why It Fails:** Important actions become a physical stretch, so users skip them or tap the wrong thing.
* **Clean Fix:** Keep primary actions within the lower thumb zone, and give every tap target at least 44px by 44px.
* **The Waitsec Way:** Design for one thumb on a moving hand.

### 5. Missing Empty, Loading, and Error States

* **The Bad Habit:** Building only the happy state with content already in place.
* **The Problem:** Empty lists, slow requests, and failures show a blank screen or a broken layout.
* **Why It Fails:** Users cannot tell whether the page is loading, empty, or broken, so they leave.
* **Clean Fix:** Design all four states: loading (skeleton or spinner), empty (short message plus one action), error (clear message plus a retry), and success.
* **The Waitsec Way:** A screen is not done until its failure states look intentional.

### 6. Flat Button Hierarchy

* **The Bad Habit:** Giving every button the same filled, high-contrast style.
* **The Problem:** Nothing communicates which action matters most.
* **Why It Fails:** Users hesitate, or they pick the wrong button.
* **Clean Fix:** One primary (filled) button per section, secondary actions as outline or plain text, and destructive actions in a danger style.
* **The Waitsec Way:** Hierarchy guides decisions. If every button shouts, none of them is heard.

---

## Part 6: Responsive Navigation Bar

### 1. Desktop Navbar Squeezed into Mobile

* **The Bad Habit:** Keeping the full horizontal link row on small screens until it overflows.
* **The Problem:** Links wrap, overlap the logo, or push the entire page into horizontal scroll.
* **Why It Fails:** The first thing visitors see is a broken top bar, so they assume the whole site is broken.
* **Clean Fix:** Collapse the links into a menu button below the `md` breakpoint. Keep the logo on the left and one primary action on the right. Show the full link row only when the width allows it.
* **The Waitsec Way:** Navigation is a layout, not a fixed row. Restructure it for small screens instead of letting it overflow.

### 2. Hamburger With No Real State

* **The Bad Habit:** A menu button that opens nothing, or opens a drawer with no way to close it.
* **The Problem:** Mobile users get trapped or see no change at all.
* **Why It Fails:** The primary navigation becomes unusable on phones, which is where most first visits happen.
* **Clean Fix:** Toggle a real drawer or panel. Close it on link click, on Escape, and on outside click, and lock body scroll while it is open.
* **The Waitsec Way:** A control must do exactly what it looks like it does.

### 3. Sticky Navbar Hiding Content

* **The Bad Habit:** A fixed navbar with no background, sitting directly over headings and buttons.
* **The Problem:** Page content scrolls underneath a transparent bar and becomes unreadable.
* **Why It Fails:** Users cannot read the section they just scrolled to, and anchor links land under the bar.
* **Clean Fix:** Give a sticky bar a solid or high-opacity background, a subtle bottom border, and add enough top padding (or `scroll-margin-top`) so the first heading is never covered.
* **The Waitsec Way:** Persistent UI must never cover the content it is meant to help navigate.

### 4. Too Many Top-Level Links

* **The Bad Habit:** Cramming eight or more links plus a logo and two buttons into the bar.
* **The Problem:** The bar feels crowded, and items shrink awkwardly on tablets.
* **Why It Fails:** Users cannot scan the options quickly, so they ignore the navigation.
* **Clean Fix:** Keep 4 to 5 primary links, move the rest into a menu or the footer, and keep exactly one clear call to action.
* **The Waitsec Way:** Fewer, clearer choices move people faster.

### 5. No Active or Focus State

* **The Bad Habit:** Links that look identical whether or not the visitor is on that page, with focus rings removed.
* **The Problem:** Users lose their place, and keyboard users cannot see where they are.
* **Why It Fails:** Orientation and accessibility both break at once.
* **Clean Fix:** Mark the current page with color, weight, or an underline, and keep a visible `focus-visible` ring on every link and button.
* **The Waitsec Way:** Show people where they are and where the keyboard is.

---

## Part 7: SEO & GEO

### 1. Search SEO Basics

- One `<h1>` per page that states the topic in plain words. Use `<h2>` and `<h3>` in a logical order with no skipped levels.
- Write a unique `<title>` (roughly 50 to 60 characters) and a `<meta name="description">` (roughly 140 to 160 characters) that describe the page honestly.
- Add a `<link rel="canonical">` pointing to the preferred URL.
- Add Open Graph and Twitter card tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`) with absolute image URLs.
- Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- Give every meaningful image a descriptive `alt`. Decorative images get `alt=""`.
- Keep the main content in server-rendered HTML so crawlers read it without running client scripts.
- Use descriptive anchor text for internal links, never "click here".
- Keep Largest Contentful Paint fast: compress images, use modern formats, set explicit width and height, lazy-load below-the-fold media, and avoid layout shift.
- Add `hreflang` only when the page really has language variants.

### 2. GEO (Generative Engine Optimization)

GEO is about being quoted correctly by AI answer engines, not just ranked by search.

- Answer the main question in the first 1 to 2 sentences of the page and of each section, before adding detail. Answer engines extract these direct statements.
- Use question-shaped `<h2>` or `<h3>` headings that match how people actually ask (for example "How do I reset a password?"), followed by a short direct answer.
- Structure facts as lists, tables, or short definition blocks that a model can quote cleanly.
- Name entities explicitly (product name, company, author) instead of relying on "we" and "it", so machines can attribute the content.
- Keep dates concrete and current, and show a visible publish or update date on time-sensitive content.
- Add author, publisher, `datePublished`, and `dateModified` in structured data so engines can verify freshness and authorship.
- Avoid keyword stuffing and hidden text. GEO rewards clear, well-structured, genuinely useful content.

### 3. SEO and GEO Pitfalls

#### 1. Multiple H1 and Skipped Headings

* **The Bad Habit:** Using `<h1>` for several sections, or jumping from `<h1>` straight to `<h4>`.
* **The Problem:** The document outline is ambiguous, so parsers guess the page structure.
* **Why It Fails:** Search engines and answer engines extract weaker summaries, and screen readers lose the hierarchy.
* **Clean Fix:** One `<h1>` per page, then `<h2>` and `<h3>` in order.
* **The Waitsec Way:** Structure is information. Keep the outline honest.

#### 2. Client-Only Content

* **The Bad Habit:** Shipping a page whose text appears only after JavaScript runs.
* **The Problem:** Many crawlers and answer engines see an almost empty document.
* **Why It Fails:** The page cannot rank or be quoted for content it never serves.
* **Clean Fix:** Render the main content and metadata on the server or at build time, and use JavaScript only to enhance it.
* **The Waitsec Way:** If a machine cannot read it without running your app, treat it as invisible.

#### 3. Missing or Duplicate Metadata

* **The Bad Habit:** Reusing the same title and description on every page, or leaving them empty.
* **The Problem:** Every page competes with itself, and shared links look generic.
* **Why It Fails:** Click-through drops, and social previews show the wrong information.
* **Clean Fix:** Write one unique title and description per page, and set canonical plus Open Graph tags for each.
* **The Waitsec Way:** Every page is its own entry point. Describe it accurately.

#### 4. Keyword Stuffing

* **The Bad Habit:** Repeating the same phrase in every heading and paragraph to please search bots.
* **The Problem:** The copy reads badly and adds no new information.
* **Why It Fails:** Modern search and answer engines reward clarity and penalize repetition, so the page ranks worse and converts worse.
* **Clean Fix:** Write for the reader first. Use the topic phrase where it fits naturally, and cover related questions instead of repeating one keyword.
* **The Waitsec Way:** Write for humans. Machines already read like humans do.

---

## Part 8: Structured Data (Schema.org)

Structured data helps search engines and answer engines understand what the page is. Add it to every real page you build.

### 1. Rules

- Use JSON-LD inside a `<script type="application/ld+json">` in the `<head>`. Do not use microdata or RDFa.
- Choose the most specific type that matches the page (for example `BlogPosting` instead of a generic `Thing`).
- Use absolute URLs for `image`, `url`, `logo`, and `@id`.
- Write dates in ISO 8601 with timezone, for example `2026-09-12T09:56:00+07:00`.
- You may combine several types with `@graph`, or use several script blocks. Do not duplicate the same type with conflicting data.
- Only mark up content that is actually visible on the page. Never invent ratings, prices, reviews, or dates.
- Validate every block with the Google Rich Results Test and the Schema.org validator before declaring the page done.

### 2. Schema by Page Type

| Page | Primary type(s) |
| :--- | :--- |
| Landing or product page | `Organization`, `WebSite`, `SoftwareApplication` or `Product`, plus `FAQPage` when an FAQ is present |
| Blog index or archive | `Blog` or `CollectionPage`, `ItemList`, `BreadcrumbList` |
| Single article or post | `Article` or `BlogPosting`, `BreadcrumbList`, `Person` as author, `Organization` as publisher |
| About or portfolio | `ProfilePage`, `Person`, `Organization` |
| Contact page | `ContactPage`, `Organization`, `ContactPoint` |
| Auth page (login, register, reset, locked) | minimal `WebPage`, with the page set to `noindex, nofollow` |
| FAQ section | `FAQPage` |
| Any page with breadcrumbs | `BreadcrumbList` |

Each page blueprint in `references/` includes the exact JSON-LD block for that page type. Read it before writing the schema.

### 3. Reference Example: Article Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Errors Appear as Codes and How to Read Them",
  "description": "A short, honest summary of what the article explains.",
  "author": {
    "@type": "Person",
    "name": "Ilyas Mukhlisin"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Fikselink",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/images/logo.png"
    }
  },
  "datePublished": "2026-09-04T09:56:00+07:00",
  "dateModified": "2026-09-04T09:56:00+07:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/blog/post/why-errors-appear-as-codes"
  },
  "image": "https://example.com/storage/blog-thumbnails/cover.webp",
  "articleSection": "Technology",
  "keywords": "error code, HTTP status code, how to read errors"
}
</script>
```

### 4. Structured Data Pitfalls

#### 1. Schema Type That Does Not Match the Page

* **The Bad Habit:** Marking a landing page as `Article`, or a contact page as `BlogPosting`.
* **The Problem:** The data contradicts what the page actually is.
* **Why It Fails:** Search and answer engines distrust or ignore mismatched markup, so the rich result never appears.
* **Clean Fix:** Match the type to the page using the table above, and use the most specific type available.
* **The Waitsec Way:** Structured data is a factual claim. Make it true.

#### 2. Missing Required Fields

* **The Bad Habit:** Shipping an `Article` block with no `author`, no `datePublished`, or no `image`.
* **The Problem:** Validators report errors and eligible rich results are dropped.
* **Why It Fails:** Incomplete markup is treated as unreliable, so the page loses visibility it could have earned.
* **Clean Fix:** Fill the required and recommended fields for the chosen type, then re-run a validator.
* **The Waitsec Way:** Half-true metadata is worse than none. Complete the claim or do not make it.

#### 3. Marking Up Hidden Content

* **The Bad Habit:** Adding `FAQPage` markup for questions that are not visible on the page, or inventing review ratings.
* **The Problem:** The markup describes content the user and the crawler cannot find.
* **Why It Fails:** It violates search engine guidelines and can trigger a manual penalty.
* **Clean Fix:** Only mark up what is visible on the rendered page.
* **The Waitsec Way:** Never let metadata promise something the page does not show.

#### 4. Relative URLs and Wrong Dates

* **The Bad Habit:** Using `"/images/cover.png"` in `image`, or a date with no timezone.
* **The Problem:** Engines cannot resolve the asset or the timestamp reliably.
* **Why It Fails:** The rich result renders broken or is ignored.
* **Clean Fix:** Use absolute URLs and full ISO 8601 timestamps with the correct offset, for example `2026-09-12T09:56:00+07:00`.
* **The Waitsec Way:** Give machines exact facts, not assumptions.

---

## Part 9: Page Archetypes & Blueprint Routing

### Routing Rules

Each reference includes the page anatomy, the 5-point pitfalls, the SEO and GEO notes, and the exact JSON-LD block for that page type. Choose the reference like this:

1. **The user names or clearly describes an archetype** (for example "about me", "contact page", "login"): read that reference first, then build.
2. **The request is vague or random** (for example "make a page", "build something nice"): infer the closest archetype from the user's intent and the project, then read that reference. If two archetypes are plausible and the choice changes the structure, ask one short question.
3. **The request is outside the listed archetypes** (for example pricing, dashboard, settings, search results, 404, FAQ, changelog): use the general preference below, and adapt the closest blueprint instead of forcing an unrelated one.
4. **Always state which blueprint you are following** in the recon summary before you generate.

### General Preference for Unlisted Pages

- Keep every rule from Parts 0 to 8: recon, styling, UX, navbar, SEO, GEO, and structured data.
- Reuse the anatomy of the nearest archetype. A settings page follows the form layout of the contact page, a search results page follows the list layout of the blog index, and a pricing page follows the section rhythm of a landing page.
- Pick the Schema.org type that matches the content. Use `FAQPage` for an FAQ, `Product` or `SoftwareApplication` for pricing, and a minimal `WebPage` for utility pages such as 404 or search.
- If no listed type fits, use a minimal `WebPage` node and keep every field accurate.
- Never stretch a blueprint to fit a page it was not designed for.

### 1. Marketing & Conversion Pages
* **Includes:** SaaS homepages, landing pages, product launch screens.
* **Key Blueprint:** Clear hero statement, problem vs solution, key feature cards, social proof, FAQ where useful, and a single high-contrast primary CTA.
* **Schema:** `Organization`, `WebSite`, `SoftwareApplication` or `Product`, plus `FAQPage` when an FAQ is present.
* *Detailed Guide:* [`skills/waitsec-pagemaker/references/landing-page.md`](./references/landing-page.md)

### 2. Editorial & Content Pages
* **Includes:** Blog catalogs, single article readers, changelogs, docs.
* **Key Blueprint:** Comfortable reading line length (60 to 75 characters per line), clean typography rhythm, clear subheadings, and distraction-free reading.
* **Schema:** `Blog` or `CollectionPage` with `ItemList` for the index, and `Article` or `BlogPosting` with `BreadcrumbList` for a single post.
* *Detailed Guides:*
  - Blog Index: [`skills/waitsec-pagemaker/references/blog-index.md`](./references/blog-index.md)
  - Single Article: [`skills/waitsec-pagemaker/references/article-single.md`](./references/article-single.md)

### 3. Standalone Single Pages
* **Includes:** Contact forms, About Me and Portfolio, simple profile pages.
* **Key Blueprint:** Single-purpose layouts, minimal input forms (name, email, message) with clear validation states, and direct project or contact links.
* **Schema:** `ProfilePage` with `Person` for an about page, and `ContactPage` with `Organization` and `ContactPoint` for a contact page.
* *Detailed Guides:*
  - Contact Page: [`skills/waitsec-pagemaker/references/contact-page.md`](./references/contact-page.md)
  - About / Portfolio: [`skills/waitsec-pagemaker/references/about-me.md`](./references/about-me.md)

### 4. Authentication & Account Access Pages
* **Includes:** Login, register, forgot password, reset password, remember me, account locked, and login rate-limit screens.
* **Key Blueprint:** Single-purpose centered form, one primary action, clear error and lockout states, and no user enumeration.
* **Schema:** Minimal `WebPage` with the page set to `noindex, nofollow`.
* *Detailed Guide:* [`skills/waitsec-pagemaker/references/auth-pages.md`](./references/auth-pages.md)

---

## Part 10: Design Preference Translation (Minimalist, Modern, and Similar Words)

Users often describe the look with one or two vague words: "minimalist", "modern", "clean", "premium", "bold", "playful". Treat these as direction, not as a license to add generic AI decoration. Translate the word into concrete design decisions, then say the translation out loud before generating.

### 1. Rules

- A style word is a direction, not a spec. Convert it into decisions about color, spacing, radius, borders, shadow, typography, motion, density, and imagery.
- The project's existing design tokens win. A style word only fills gaps the project does not already define.
- "Modern" never means purple gradients, glassmorphism, huge soft shadows, all-pill shapes, or animated everything. Those are AI slop, not modern design.
- If the word conflicts with the project's design language, tell the user and ask whether to follow the project or deliberately override it.
- If two words conflict ("minimalist but bold"), resolve them by function: let the layout word drive hierarchy and density, and let the mood word drive color and decoration. State the resolution, and ask only if the conflict changes the structure.
- If the user points to a reference site or brand, extract concrete tokens from it (type scale, accent color, spacing, radius, density) instead of copying the whole look.
- State the final token summary in one short block before writing markup. Do not silently guess.

### 2. Translator Table

| User says | Usually means | Does NOT mean |
| :--- | :--- | :--- |
| Minimalist / Minimal | Few colors (neutrals plus one accent), generous spacing, type-led hierarchy, flat surfaces, thin or no borders | Empty pages with no hierarchy, gray-on-gray text, removing all images |
| Modern / Contemporary | Clean type, clear grid, consistent radius, subtle borders, restrained motion | Purple gradients, glass everywhere, big shadows, neon glows, pill everything |
| Clean | Aligned grid, consistent spacing, high-contrast text, few effects | Making everything white, tiny light-gray text, removing all styling |
| Simple | Fewer sections, one primary action, plain language, minimal form fields | Hiding needed information, removing navigation, blank screens |
| Premium / Luxury | Generous space, strong type contrast, one refined accent, quality imagery, restrained motion | Gold gradients, fake 3D, heavy glossy shadows, shiny badges |
| Corporate / Professional | Structured sections, muted palette, clear typography, trust signals | Stock-photo collages, blue gradient hero, generic icon walls |
| Playful / Fun | One brighter accent, consistent rounded radius, friendly copy, small motion | Emoji, rainbow palettes, bouncy animation on everything, comic fonts |
| Bold | Large type, strong contrast, big sections, one loud accent | Heavy shadows alone, clashing colors, oversized everything |
| Elegant | Refined typography, thin rules, calm palette, lots of breathing room | Script fonts, gold shimmer, over-decoration |
| Dark | Solid dark surfaces, checked contrast, muted borders, one accent | Pure black with low-contrast gray text, neon outlines everywhere |
| Warm / Friendly | Warm neutrals, softer radius, human copy | Orange overload, gradients everywhere, rounded everything |

Local slang works the same way. "Estetik", "kece", "clean banget", "kayak startup", or "kayak Stripe" is still a direction. Map it to a row above, or ask one question with two concrete options.

### 3. Handling Steps

1. Map the word with the translator table.
2. Read the project theme: existing colors, fonts, spacing scale, radius, and components. Reuse them.
3. If the project already has a strong design language, follow it and say so. Only override when the user confirms.
4. Resolve conflicting words by function, then state the resolution.
5. For a reference site or brand, extract tokens, not pixels.
6. Print the token summary: palette, accent, type scale, spacing, radius, border and shadow policy, motion.
7. Build, then check the result against the summary.

### 4. Default Tokens (When Nothing Is Specified)

- **Color:** a neutral scale plus exactly one accent. Body text at least 4.5:1 contrast.
- **Spacing:** a 4px and 8px scale, with consistent gaps between sections.
- **Radius:** `rounded-lg` for cards, `rounded-md` for buttons and inputs. Pills only for small tags.
- **Borders:** 1px neutral borders for structure. Shadows only for overlays such as dropdowns and modals.
- **Type:** one sans-serif family. Body line-height around 1.5, headings around 1.2, with a fluid scale using `clamp()`.
- **Motion:** 150ms to 200ms, only for state changes such as hover, focus, and open. Respect `prefers-reduced-motion`.
- **Density:** comfortable on mobile, a little more generous on desktop. Never giant empty gaps by default.

### 5. Pitfalls

#### 1. Treating "Modern" as a Slop License

* **The Bad Habit:** Reading "modern" and adding a purple gradient hero, glass cards, and floating shadows.
* **The Problem:** The page looks like every other generated template, and the eye has no clear focus.
* **Why It Fails:** Users recognize the generic AI look and trust the product less.
* **Clean Fix:** Translate "modern" into clean type, a clear grid, one accent, and restrained motion. Use no gradient unless the brand already uses one.
* **The Waitsec Way:** Modern is restraint and clarity, not decoration.

#### 2. Over-Rounding and Over-Shadowing for "Premium"

* **The Bad Habit:** Making every card `rounded-full` with a large soft shadow to look expensive.
* **The Problem:** Shapes lose meaning and surfaces turn blurry.
* **Why It Fails:** Depth cues stop working, and the page reads as cheap rather than premium.
* **Clean Fix:** Use one consistent radius and crisp borders. Reserve shadow for real overlays, and use space and type contrast for a premium feel.
* **The Waitsec Way:** Premium comes from space, type, and consistency, not from glow.

#### 3. Going Low-Contrast for "Minimalist"

* **The Bad Habit:** Choosing light gray text on white and thin faint lines to feel minimal.
* **The Problem:** Text becomes hard to read and controls become hard to find.
* **Why It Fails:** Minimalism is often mistaken for low contrast, and real users cannot read the result.
* **Clean Fix:** Keep strong contrast and a clear hierarchy. Simplify with space, not with faintness.
* **The Waitsec Way:** Minimal means fewer elements, not weaker ones.

#### 4. Copying a Reference Site Blindly

* **The Bad Habit:** Recreating another product's exact layout, palette, and motion.
* **The Problem:** The result looks like a clone, and it may not fit this product's content or brand.
* **Why It Fails:** It ignores the project's own identity and can raise legal and trust concerns.
* **Clean Fix:** Extract the principles (spacing, type scale, accent, density) and rebuild them with the project's content and tokens.
* **The Waitsec Way:** Learn the recipe, do not steal the dish.

#### 5. Overriding the Project's Design System

* **The Bad Habit:** Ignoring existing tokens and introducing new colors, fonts, and spacing because the user said "make it modern".
* **The Problem:** The page no longer matches the rest of the product.
* **Why It Fails:** Inconsistency across screens confuses users and multiplies maintenance work.
* **Clean Fix:** Reuse the project tokens first. Ask before deviating, and if the user confirms, keep the change minimal and note it.
* **The Waitsec Way:** The design system is the source of truth. A style word does not outrank it.

#### 6. Conflicting Words Resolved Silently

* **The Bad Habit:** Getting "minimalist but bold" and quietly picking one, then delivering a page that matches neither.
* **The Problem:** The user expected both directions to be visible.
* **Why It Fails:** The mismatch surfaces in review, and the work is redone.
* **Clean Fix:** Resolve by function and state the resolution. If the conflict changes structure, ask one short question.
* **The Waitsec Way:** Say how you resolved the brief instead of guessing in silence.

---

## Part 11: Motion, 3D & Media Routing

### 1. Animation and Parallax

When the user asks for animation, parallax, or scroll effects, read [`references/motion-and-3d.md`](./references/motion-and-3d.md). Default to anime.js, reuse any existing motion library, use a pinned CDN for static projects and npm for build projects, animate only `transform` and `opacity`, and honor `prefers-reduced-motion`.

### 2. 3D and Graphics

When the user asks for 3D or other graphics, read the same guide. Default to three.js, lazy-load it after the content, cap the device pixel ratio, and always ship a poster image and a no-WebGL fallback. If a static image or a short video does the job, prefer that instead.

### 3. Images and Media

When the page needs images, read [`references/image-sourcing.md`](./references/image-sourcing.md). Scan the project's asset folders first and reuse what exists. Only when nothing fits, source from Pexels with no identifiable people, preferring close-up plants, landscapes, and textures, and match the image ratio to the slot.

### 4. Load Method

- Static project without a build step: load anime.js or three.js from a pinned CDN.
- Project with a build step: install locally and import only what is used.
- Always report the library, version, and load method before generating.

---

## Pre-Flight Checklist

Before returning generated page code to the user, verify:

- [ ] Did I run Project Recon and report the framework, template engine, styling system, load method, version, and icon library?
- [ ] Did I follow the existing styling system, or ask before changing it?
- [ ] Are icons from the detected library or Lucide CDN, with no emoji and no hand-written inline SVG?
- [ ] Does the page contain zero em dash and zero en dash characters?
- [ ] Does the mobile layout reflow into a clean vertical stack without horizontal scrolling?
- [ ] Are clickable buttons and links at least 44px by 44px on mobile viewports?
- [ ] Is the primary action placed on the right on desktop and at the bottom of the stack on mobile, with Cancel before Save?
- [ ] Are loading, empty, error, and success states designed, not just the happy path?
- [ ] Are generic AI gradients, floating shadows, and all-pill buttons removed in favor of clean solid styling?
- [ ] Does all text meet comfortable readability standards with high contrast against the background?
- [ ] Is the navbar responsive, with a working menu button on mobile, a solid sticky background, and a visible active and focus state?
- [ ] Is there exactly one primary Call to Action (CTA) per marketing section?
- [ ] Does the page have one `<h1>`, a unique title and meta description, a canonical URL, and Open Graph tags?
- [ ] Is the main content server-rendered and structured so answer engines can quote it?
- [ ] Is the JSON-LD block present, type-appropriate, using absolute URLs and ISO 8601 dates, and validated with no errors?
- [ ] If the page is an auth page, is it set to `noindex` with a minimal `WebPage` node, does it avoid user enumeration, and does any lockout state explain the reason and offer recovery?
- [ ] If the requested page is outside the listed archetypes, did I state the closest blueprint I adapted and keep the general preferences?
- [ ] If the user gave a vague style word, did I translate it into concrete tokens (palette, type, spacing, radius, border and shadow policy, motion) and state the translation?
- [ ] Did I reuse the project's design tokens before inventing new ones?
- [ ] If animation was requested, did I reuse or add the motion library with the right load method, and honor `prefers-reduced-motion`?
- [ ] If 3D was requested, is it lazy-loaded with a poster and a no-WebGL fallback?
- [ ] Did I check the project's own images first, and if sourcing, avoid people and match the aspect ratio?
