# Motion & 3D Blueprint (waitsec-pagemaker)

Use this guide when a page needs animation, parallax, scroll effects, or 3D graphics. Motion and 3D are expensive, so they must earn their place and must never block the content.

---

## Part 1: Motion & Animation

### 1. When Motion Is Allowed

- Only when it communicates state or hierarchy: entrances, transitions, feedback, progress, or drawing attention to something that just changed.
- Never as looping decoration, never to hide slow loading, and never to delay the content.
- Parallax, scroll reveals, and hero animation are allowed when the user explicitly asks for them.

### 2. Choose the Library

- If the project already has a motion library (GSAP, Framer Motion, Motion One, AOS, anime.js), use it.
- If the user names a library, use that.
- Otherwise, for scroll and timeline animation, default to **anime.js**.
  - Static project or no build step: load from CDN.
  - Project with a build step: install through the package manager and import only what is used.
- Keep small reveals in plain CSS. Do not pull in a library just for a simple fade.

### 3. anime.js Rules

- Load the CDN build only when there is no build step:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"></script>
  ```
- For npm projects: `npm i animejs` and import only the functions you use.
- Animate `transform` and `opacity` only. Never animate layout properties (`width`, `height`, `top`, `margin`) because they thrash the browser.
- Keep durations short: 150ms to 400ms for UI, up to 800ms for a hero reveal. Keep easing consistent.
- Start animations on view with `IntersectionObserver`, not on page load.
- Respect `prefers-reduced-motion`: skip or reduce the motion.
- Never animate more than a few elements at once. Reveal long lists in groups.

### 4. Parallax Rules

- Keep parallax subtle. A background that moves a lot is nauseating and hurts reading.
- Never parallax body text. Move only backgrounds or decorative layers.
- Use `transform: translate3d()` and `will-change` during the animation, then remove `will-change`.
- Provide a static layout when motion is disabled or the device is low power.

### 5. Motion Pitfalls

#### 1. Motion on Everything

* **The Bad Habit:** Animating every section, card, and button on entrance.
* **The Problem:** The page feels busy, and the user waits for content to settle before reading.
* **Why It Fails:** Decoration competes with the message, and repeated motion tires the eye.
* **Clean Fix:** Animate only what changes state or needs attention. Prefer one calm reveal per section.
* **The Waitsec Way:** Motion is a signal, not wallpaper. Use it only when it means something.

#### 2. Layout-Thrashing Animation

* **The Bad Habit:** Animating `width`, `top`, or `margin` to move or resize an element.
* **The Problem:** Every frame forces the browser to recalculate layout, so the animation stutters.
* **Why It Fails:** Jank on mid-range phones makes the page feel broken, and the battery drain is real.
* **Clean Fix:** Animate `transform` and `opacity` only. Move elements with `translate`, resize with `scale`.
* **The Waitsec Way:** Animate the cheap properties. Keep the main thread free.

#### 3. Ignoring prefers-reduced-motion

* **The Bad Habit:** Shipping full parallax and auto-playing animation with no reduced-motion path.
* **The Problem:** Users with motion sensitivity get a page they cannot comfortably use.
* **Why It Fails:** It is an accessibility failure, and some people will close the tab immediately.
* **Clean Fix:** Wrap motion in `@media (prefers-reduced-motion: reduce)` and disable or shorten it.
* **The Waitsec Way:** Motion is optional for the user. Always offer the still version.

#### 4. Scroll Jank From Too Many Observers

* **The Bad Habit:** Creating an `IntersectionObserver` per element and animating dozens at once.
* **The Problem:** Many observers and simultaneous animations overload the main thread.
* **Why It Fails:** Scrolling stutters on mobile, which is where most visitors are.
* **Clean Fix:** Use one shared observer, animate in small groups, and stop observing after the reveal.
* **The Waitsec Way:** Budget the work per frame. Fewer, cleaner animations win.

#### 5. Animation That Blocks First Paint

* **The Bad Habit:** Loading a heavy motion library in the head and starting animation before content renders.
* **The Problem:** The hero stays invisible or half-drawn while the script loads.
* **Why It Fails:** Largest Contentful Paint suffers, and users see a blank or frozen screen.
* **Clean Fix:** Load motion after the content, keep it small, and never hide content behind an animation gate.
* **The Waitsec Way:** Content comes first. Motion loads after.

---

## Part 2: 3D with three.js

### 1. When 3D Is Allowed

- Only when 3D is the product or genuinely helps explain it: a product viewer, a configurator, a data globe, or a hero centerpiece.
- Never for a generic spinning cube or a decorative background that adds no meaning.
- If a static image or a short video explains it just as well, use that instead.

### 2. Choose the Library

- If the project already uses three.js, `@react-three/fiber`, or Babylon.js, use it.
- Otherwise default to **three.js**: CDN for static pages, npm for build projects.
- Import only the modules you need, or use a tree-shakeable build, so the bundle stays small.

### 3. Performance Rules

- Lazy-load the 3D bundle after the main content. It must not block Largest Contentful Paint.
- Cap the device pixel ratio at 2 so high-DPI phones do not render four times the pixels.
- Keep geometry low-poly, compress textures (KTX2 or WebP), and use instancing for repeated meshes.
- Pause rendering when the canvas is off-screen or the tab is hidden.
- Provide a poster image and a static fallback for devices without WebGL.
- Respect `prefers-reduced-motion`: no fast or perpetual auto-rotation.

### 4. Accessibility and Fallback

- A canvas is not accessible text. Always provide an equivalent description or a labeled image.
- The page must stay fully usable if the 3D layer fails to load.
- Never trap focus or block page scrolling on the canvas.

### 5. 3D Pitfalls

#### 1. 3D as Decoration

* **The Bad Habit:** Adding a rotating 3D object to the hero because it looks impressive.
* **The Problem:** It adds weight and load time without explaining anything.
* **Why It Fails:** The page gets slower, and visitors still do not understand the product better.
* **Clean Fix:** Use 3D only when interaction with a real object is the point. Otherwise use an image or video.
* **The Waitsec Way:** 3D must do a job. If it only decorates, remove it.

#### 2. Blocking First Paint

* **The Bad Habit:** Importing three.js at the top of the bundle and rendering before the page content.
* **The Problem:** The whole page waits on a large 3D library.
* **Why It Fails:** Slow first paint loses visitors before they see anything.
* **Clean Fix:** Code-split the 3D module, load it after content, and show a poster until it is ready.
* **The Waitsec Way:** Never let a feature starve the page it lives on.

#### 3. Ignoring Mobile GPU Limits

* **The Bad Habit:** Shipping high-poly models and uncompressed textures straight from the desktop build.
* **The Problem:** Mid-range phones drop frames or fail to render at all.
* **Why It Fails:** The centerpiece becomes a stutter or a blank box on the devices most people use.
* **Clean Fix:** Lower the polygon count, compress textures, cap the pixel ratio, and test on a mid-range phone.
* **The Waitsec Way:** Design for the weakest device that matters, then enhance upward.

#### 4. No Fallback

* **The Bad Habit:** Assuming WebGL always works and rendering nothing else.
* **The Problem:** Older devices and blocked GPUs see an empty rectangle.
* **Why It Fails:** A blank centerpiece looks broken and hides the product.
* **Clean Fix:** Detect WebGL, show a poster image and the key text when it is missing.
* **The Waitsec Way:** Every heavy feature needs a light path.

#### 5. Perpetual Motion

* **The Bad Habit:** Auto-rotating the model forever at high speed.
* **The Problem:** It distracts, drains battery, and bothers motion-sensitive users.
* **Why It Fails:** The eye keeps chasing the motion instead of reading the page.
* **Clean Fix:** Rotate slowly only on interaction, pause when idle, and honor reduced-motion.
* **The Waitsec Way:** Let the user drive the motion.

---

## Part 3: Load Method and Version

1. Detect any existing motion or 3D library and version in the project, then reuse it.
2. Static project without a build step: load from a CDN and pin the version.
3. Project with a build step: install locally and import only what is used.
4. Report the library, version, and load method before generating.
5. If the user asked for motion or 3D but the page does not need it, say so and offer the simpler option.

---

## Pre-Flight Checklist for Motion & 3D

- [ ] Did I reuse the project's existing motion or 3D library before adding a new one?
- [ ] Is the library loaded from a pinned CDN in static projects and installed locally in build projects?
- [ ] Do animations use only `transform` and `opacity`, with short durations and consistent easing?
- [ ] Does `prefers-reduced-motion` disable or reduce all motion?
- [ ] Is 3D loaded after the main content, with a poster image and a no-WebGL fallback?
- [ ] Is the device pixel ratio capped and the model or texture budget kept small?
- [ ] Does the page stay fully usable if the motion or 3D layer never loads?
