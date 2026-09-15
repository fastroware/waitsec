# Motion and 3D

Use this guide when the user requests animation, motion, parallax, canvas graphics, scroll effects, or 3D for a page, section, or interface element.

Motion and 3D are optional enhancements. The page content, controls, and main action must work without them. Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for states, focus, and copy detail.

## Decision Gate

Before implementing an effect, answer:

1. What user-visible job does it do?
2. Can existing CSS or a project utility handle it?
3. Does the project already have a motion or graphics tool?
4. What happens with reduced motion, low power, a slow connection, or no graphics support?
5. Can the content remain visible if the effect fails?

If a still image, normal state change, or short CSS transition does the same job, use the simpler option.

## Scope the Request

Match the size of the motion work to the size of the request.

| Scope | Example | What to build |
| :--- | :--- | :--- |
| Light | One hover, toggle, or dropdown | One or two effects, no choreography |
| Medium | A hero, gallery, navigation, or section | A small sequence with one shared trigger |
| Full | A page or an app-wide overhaul | A stated motion system with shared values and an audit |

A hover effect never justifies a scroll-driven animation pipeline. State the scope before choosing tools.

## State the Interaction Thesis

For medium and full scope, write one sentence that names the feel and the technique, for example:

> Cards rise 12px with a 200ms ease-out fade on scroll, for a calm, orderly feel.

Then check it:

- Does it name the timing range?
- Does it cover hover and scroll behavior?
- Does it say what is forbidden, such as bounce, elastic, or long travel?
- Could someone derive the actual CSS or code from reading it?

Do not start implementing until the thesis is clear. A wrong thesis caught in one sentence costs one sentence. The same wrong thesis caught after implementation costs the implementation.

If the request is already specific, such as one hover scale on one button, skip the thesis and build the effect.

## Duration Comes From Context

Choose duration by what the motion is for, not by taste.

| Context | Duration | Why |
| :--- | :--- | :--- |
| Micro-interaction: hover, focus, toggle | 100 to 150ms | Instant feedback with no perceived delay |
| UI transition: modal, drawer, tab switch | 200 to 300ms | Smooth without dragging |
| Page or route transition | 300 to 500ms | Long enough to show where the user went |
| Scroll-driven or pointer-driven | No duration | Tied to input, so it is progress-based |

The rule under the table: the more often an animation plays, the shorter and subtler it must be. A hover fires many times a day and gets 100ms. A one-time reveal can afford 600ms of choreography. Giving the hover the reveal budget is what makes an interface feel exhausting.

## Easing Comes From Direction

| Action | Easing | Why |
| :--- | :--- | :--- |
| Entering | ease-out or a spring | Decelerates into place, like arriving |
| Exiting | ease-in | Accelerates away, getting out of the way |
| Moving between states | ease-in-out | Smooth at both ends |
| Scroll-synced | linear | Anything else reads as lag against the input |
| Playful | Underdamped spring | Overshoot is what reads as alive |

Exit is always more subtle than enter. An enter can combine translate, opacity, and scale. An exit is usually a short opacity fade. Keep that asymmetry, because the reverse feels like the interface is reluctant to let go.

## Five Prohibitions

1. Do not animate layout properties such as `width`, `height`, `top`, `left`, `margin`, or `padding`. Use transform and opacity.
2. Do not scale content to zero. Fade and shrink to a small visible value instead.
3. Do not ease in on an entrance. Entrances decelerate.
4. Do not exceed 500ms on a UI interaction.
5. Do not skip reduced motion.

## Keep Motion Consistent

A coherent interface uses a small named set of motion values, usually three to five durations and three to five easings, stored as tokens or variables where the project allows. Many one-off cubic-bezier values are not a design decision. When the project already names its durations and easings, use those values instead of adding new ones.

## Tool Choice

Use this order:

1. Existing project motion or graphics tools.
2. Modern CSS for small interface changes, scroll reveals, and page transitions.
3. Browser APIs for focused behavior when they keep the code small.
4. A new dependency only when the requested effect needs its features and the project can support its cost.

Do not default to a named animation or 3D library. If the user requests one, confirm that it fits the current framework, version policy, and bundle setup. Respect a library the project already uses instead of replacing it.

Use local project dependencies in build projects. Follow the project's approved external-script policy for static pages. Pin external versions when the project allows a CDN and a CDN is justified.

### What CSS Handles First

Check these before reaching for a library:

- Scroll and view progress: `animation-timeline` with `scroll()` or `view()`, plus `animation-range`. Ship it behind `@supports (animation-timeline: scroll())` and use `animation-fill-mode: both`.
- Page transitions: the View Transitions API, same-document for single-page apps and cross-document for multi-page sites, with `view-transition-name` for shared elements.
- Entrances from `display: none`: `@starting-style` paired with `transition-behavior: allow-discrete`.
- Tooltips, popovers, and menus: anchor positioning with `position-try-fallbacks`.
- Component-size behavior: container queries.
- Visual techniques: `clip-path` reveals, `backdrop-filter`, `mix-blend-mode`, layered radial gradients, and `conic-gradient` masking.

Stay in CSS for a few small animations, a scroll reveal, an enter or exit from `display: none`, a tooltip, or a page transition. Reach for a library when the job has several sequenced steps, a stagger across a list of unknown length, an interruptible physics spring, or an SVG shape morph.

### When a Motion Library Already Exists or Is Justified

Reach for the capability the job needs instead of the whole library:

| Need | Look for |
| :--- | :--- |
| A single tween, easing, or stagger | Core tween API, transforms, opacity |
| Several sequenced steps, labels, or playback | Timeline API |
| Scroll-linked movement, pinning, or scrubbing | Scroll trigger API |
| Page transition helpers, drag, flip, or text split | The plugin set |
| Value mapping, clamping, snapping, or ranges | Utility helpers |

Register only the plugins the page uses, and keep that number small.

When the project already uses one of these, follow its idiomatic pattern instead of writing around it:

- **GSAP**: build sequences on a timeline instead of chaining delays, animate transform aliases such as `x`, `y`, `rotation`, and `scale` instead of a raw `transform` string, and use `autoAlpha` over `opacity` when an element must also stop receiving pointer events at zero. Re-run the scroll trigger's refresh method after a layout change so pinned and scrubbed sections stay aligned. In React, create and revert the animation inside a scoped hook tied to a container ref, not in a bare effect with manual selectors.
- **Framer Motion**: use the `animate`, `whileHover`, and `whileTap` props instead of manual event handlers for hover and tap state. Use `AnimatePresence` for exit animations tied to conditional rendering, and give each animated child a stable `key`. Use `layout` and `layoutId` for shared element and reorder transitions instead of measuring the DOM by hand.
- **Three.js and React Three Fiber**: dispose of geometries, materials, and textures when a component unmounts. Reuse materials across meshes instead of creating one per instance. Keep the render loop cheap and follow the same pixel-ratio cap and off-screen pause rules as the canvas guidance below.

## Framework Lifecycle and Cleanup

- In React, create motion inside an effect hook scoped to a ref, and clean it up on unmount. Reuse one scope or context per component instead of global selectors.
- In Vue and Svelte, create motion in the mount lifecycle and kill tweens, triggers, and observers on unmount.
- Scope selectors to the component root so one instance does not animate another.
- In server-rendered apps, do not touch `window` or schedule animation during render. Run it after mount.
- Do not set component state from a scroll or animation callback on every frame. Update the animated property or a ref directly.
- In a sequence, control when an entrance tween first renders instead of letting it fire before the timeline reaches it.

## Motion Rules

- Use motion to explain state, continuity, progress, hierarchy, or a user action.
- Keep content visible before scripts load.
- Prefer compositor-friendly properties such as transforms and opacity for movement and fades.
- Other properties may be used when the visual need requires them and the measured cost is acceptable.
- Keep durations and easing consistent with the existing product.
- Avoid long entrance sequences that delay reading or interaction.
- Trigger scroll effects with a small shared mechanism rather than repeated listeners.
- Prefer `animation-timeline` first, then `IntersectionObserver`, then a scroll listener as a last resort.
- Stop observers and animation work when they are no longer needed.
- Pause continuous work when content is off-screen or the page is hidden.
- Use `requestAnimationFrame` for animation loops, never `setTimeout` or `setInterval`.
- Use `will-change` sparingly, and remove it when the animation ends.

## Reduced Motion

- Respect `prefers-reduced-motion`. On the web use the `@media (prefers-reduced-motion: reduce)` query, and in JavaScript use `matchMedia('(prefers-reduced-motion: reduce)')`.
- Remove non-essential movement.
- Replace large travel, parallax, and repeated rotation with a still state or small change.
- Keep status and progress understandable without animation.
- Keep the finished state, not a broken one. A reduced-motion visitor should see the composition, just not the motion into it.
- Never hide focus indicators with animation, and keep animated text above its contrast ratio at every frame.
- Test keyboard and screen-reader use with motion disabled.

Reduced motion is a complete usable mode, not an empty canvas. An animated project with no reduced-motion handling anywhere is a critical failure.

## Parallax and Scroll Effects

Parallax is a depth relationship between layers. It is not limited to background images. The moving subject can be a card, product mockup, media frame, heading group, decorative shape, section panel, data preview, or another element that benefits from a clear sense of depth.

When the user asks for parallax:

1. Read the page structure and identify the element that should feel nearer, farther away, or connected to the scroll.
2. Choose the target that best supports the page story or hierarchy. Do not assume the image is the target.
3. Keep the effect to a small number of related layers with clear depth order.
4. Match distance, direction, and speed to the element. Cards and interface previews usually need smaller movement than large decorative scene layers.
5. Keep the normal document layout stable. Apply visual movement without changing the reading order or making controls chase the pointer.
6. If the page already makes the best target clear, proceed. Ask only when several directions would create meaningfully different experiences.

Useful patterns include:

- **Card depth:** Move a featured card or card group slightly against the page scroll to separate it from the surrounding section.
- **Product preview:** Give a dashboard, device frame, or interface mockup a small depth offset while supporting labels remain stable.
- **Layered section:** Move foreground and background shapes at different speeds to create depth without using a photo.
- **Media framing:** Move an image, crop, caption, or frame as separate layers when the content benefits from it.
- **Heading moment:** Move a short heading group as one unit when it helps a section transition. Keep long paragraphs stable.
- **Pointer depth:** On devices with precise pointers, a card may use a small tilt or inner-layer shift. Provide a calm touch and keyboard experience without requiring hover.

Guardrails:

- Use parallax only when the user asks or the product already uses it with purpose.
- Keep body text, forms, navigation, and primary controls stable.
- Do not tie important reading or actions to an exact scroll position.
- Avoid effects that fight native scrolling, create layout shift, or cause nausea.
- Prefer transforms driven by one shared scroll or pointer mechanism instead of separate listeners for each element.
- Limit travel and depth levels so the page still feels controlled.
- Provide the same information when the effect is off.
- Test narrow screens, touch input, reduced motion, and a representative lower-powered device when the effect is substantial.

## Responsive and Interaction Adaptation

Design the effect for the available space and input method instead of shrinking one desktop motion setup onto every screen.

### Mobile and Touch

- Use fewer moving layers and shorter travel distances.
- Keep the page in normal vertical flow and avoid sticky scenes that trap a large part of a small viewport.
- Do not require hover, pointer position, or precise dragging to understand content.
- Prefer a calm scroll-based offset or a still composition when pointer depth adds no value.
- Keep cards, text, and controls inside the viewport throughout their movement.
- Account for browser bars, orientation changes, and the on-screen keyboard.
- Disable the effect when performance, motion preference, or available space makes the still state better.

### Desktop and Precise Pointers

- Use pointer depth or layered scroll movement only when it improves focus or spatial understanding.
- Cap tilt, travel, and perspective so cards remain readable and do not feel detached from their section.
- Keep the effect controlled on large and ultrawide screens. More space does not require more movement.
- Make hover enhancements optional. Keyboard and touch paths must keep the same content and actions.

### Shared Responsive Rules

- Use the same semantic content and reading order in every responsive state.
- Recalculate viewport-dependent values after meaningful resize or orientation changes.
- Do not create page-level horizontal overflow, clipped focus rings, or moving hit targets.
- Keep section transitions smooth without taking control of native scrolling.
- Test at narrow, middle, and wide widths based on the content, not only named devices.
- Let motion support hierarchy and feedback. Do not let it delay reading, hide controls, or make navigation harder.

## 3D and Canvas

Use 3D when interaction with a spatial object is part of the product or clearly improves explanation, such as a real viewer, configurator, model, or data display.

- Load heavy graphics after the main content unless the project has measured another safe plan.
- Keep geometry, textures, shaders, and render resolution within a stated budget.
- Cap pixel density when full device resolution adds cost without visible value.
- Pause rendering off-screen and when the tab is hidden.
- Provide a poster, image, text description, or usable HTML fallback.
- Keep page navigation, scrolling, and focus outside the canvas usable.
- Give controls accessible names and keyboard behavior.
- Do not place needed text only inside a canvas.

For a generative canvas, follow these rules:

- Do not use `clearRect` when the effect needs trails. Fill with a translucent color instead.
- Do not call `getImageData` inside the render loop. It stalls on a GPU readback.
- Do not skip device-pixel-ratio scaling, or the canvas will look soft on a high-density display.
- Do not allocate objects inside update or render. Pre-allocate a pool and recycle entries.
- Handle resize by recalculating and redrawing, not by stretching the bitmap.

## Motion Audit

Run these checks on the affected files before reporting the work complete. Prefer searching the code over reading it from memory, because a search catches what a read-through misses.

- Conditional renders with no matching exit animation.
- Hover rules with no transition on the base selector.
- Mapped lists with no stagger where a stagger was intended.
- Animated inline styles with no transition.
- Transitions on layout properties.
- Permanent `will-change` left on many elements.
- Animation loops built on `setTimeout` or `setInterval`.
- Negative `outline` removal with no `:focus-visible` replacement.
- Clickable `div` or `span` with no role and no keyboard handling.
- Decorative animation with no `aria-hidden`.
- Missing reduced-motion handling. Treat total absence in an animated project as critical.
- Contrast at 4.5:1, including while text is fading, where it often drops below the line.

Group findings by severity: critical, important, and nice-to-have.

## Verification

Check:

- Initial content visibility with scripts delayed or blocked.
- Reduced-motion behavior.
- Keyboard and touch interaction.
- Scroll stability and layout shift.
- Main-thread and rendering cost on a representative device.
- Cleanup when components unmount or leave the viewport.
- Fallback behavior without graphics support.
- Narrow, middle, and wide widths, for example 375, 768, 1024, and 1440 when the project supports them.

Use project performance tools when available. Do not claim a performance result without measurement.

## Anti-Patterns

### 1. Motion on Every Element

* **The Bad Habit:** Animating each section, card, heading, and button as it appears.
* **The Problem:** The page never feels settled and important state changes look like decoration.
* **Why It Fails:** Repeated movement competes with reading and can make the interface uncomfortable.
* **Clean Fix:** Keep motion for meaningful changes and a small number of page moments. Let most content appear normally.
* **The Waitsec Way:** Motion is a signal, not a page theme.

### 2. Installing a Library for One Small Fade

* **The Bad Habit:** Adding a motion package before checking CSS and existing project utilities.
* **The Problem:** A minor effect increases bundle size, setup, and maintenance work.
* **Why It Fails:** The page pays a lasting cost for behavior the platform already supports.
* **Clean Fix:** Use a short native transition. Add a dependency only when several required interactions need its real features.
* **The Waitsec Way:** Use the smallest tool that performs the requested job.

### 3. Treating Parallax as an Image-Only Effect

* **The Bad Habit:** Assuming a parallax request means moving a hero background image without checking the page structure.
* **The Problem:** The effect may miss a better target such as a featured card, product preview, section layer, or content frame.
* **Why It Fails:** The motion feels copied from a template instead of supporting the page's actual hierarchy and story.
* **Clean Fix:** Inspect the available layers, choose the element that benefits from depth, and tune the movement to its role. Keep reading and controls stable.
* **The Waitsec Way:** Choose the parallax subject from the page context, not from habit.

### 4. 3D Used as Empty Decoration

* **The Bad Habit:** Adding a rotating object or animated canvas because the hero needs visual interest.
* **The Problem:** The page gains heavy rendering work without explaining the product or content.
* **Why It Fails:** Load time, battery use, and distraction increase while understanding stays the same.
* **Clean Fix:** Use 3D only for a real spatial task or explanation. Otherwise use existing media, a still image, or stronger content hierarchy.
* **The Waitsec Way:** Heavy graphics must do useful work.

### 5. Content Hidden Behind an Effect

* **The Bad Habit:** Starting key content invisible and revealing it only after a library loads or a scroll trigger runs.
* **The Problem:** Script failure, reduced motion, or missed triggers leave the page empty or incomplete.
* **Why It Fails:** The enhancement becomes a gate to the information people came to use.
* **Clean Fix:** Render readable content first and layer the effect on top. Keep a still, usable fallback.
* **The Waitsec Way:** Enhancement may fail. The page may not.

### 6. Animating Layout Properties

* **The Bad Habit:** Animating `width`, `height`, `top`, or `left` because it is the first way to move an element.
* **The Problem:** Each frame forces layout and paint work instead of a compositor-only change.
* **Why It Fails:** The page stutters on ordinary devices, and nearby content shifts while the element moves.
* **Clean Fix:** Animate transform and opacity. Reserve or measure the final space so layout does not jump. Use a width or height animation only when the visual need truly requires it and the measured cost is acceptable.
* **The Waitsec Way:** Smooth motion comes from cheap properties, not from a faster machine.

### 7. Scattering Durations and Easings

* **The Bad Habit:** Typing a new millisecond value and a new cubic-bezier curve for every effect.
* **The Problem:** Similar interactions move at different speeds and the interface feels assembled from parts.
* **Why It Fails:** People read the mismatch as sloppiness even when they cannot name it.
* **Clean Fix:** Keep a small named set of durations and easings, three to five of each, and reuse them. When the project already defines them, use those.
* **The Waitsec Way:** A few shared values are easier to use and easier to change.

### 8. Forgetting Cleanup

* **The Bad Habit:** Creating tweens, scroll triggers, and observers without stopping them when the component unmounts.
* **The Problem:** Old effects keep running, stack on top of new ones, and keep the page busy in the background.
* **Why It Fails:** Revisiting the page shows doubled movement, drifting scroll behavior, and growing memory use.
* **Clean Fix:** Kill tweens and triggers and disconnect observers in the unmount or cleanup path. Pause work that leaves the viewport.
* **The Waitsec Way:** An effect owns its own resources and releases them.

## Motion and 3D Checklist

- [ ] Does each effect have a clear user-visible job?
- [ ] For medium or full scope, is there a stated interaction thesis?
- [ ] Do durations and easings follow context and direction, from a small shared set?
- [ ] Does the work avoid animating layout properties, scaling to zero, and easing in on entrances?
- [ ] For parallax, did I choose the best contextual target instead of assuming it must be an image?
- [ ] Are movement distance, speed, direction, and depth suitable for that target?
- [ ] Does the effect adapt deliberately across mobile, touch, desktop, and precise-pointer use?
- [ ] Are content order, controls, focus, native scrolling, and viewport boundaries stable at narrow, middle, and wide widths?
- [ ] Did I reuse project tools or a native solution before adding a dependency?
- [ ] Is content visible and usable before the effect loads?
- [ ] Does reduced-motion mode preserve all information and actions?
- [ ] Are scroll, focus, keyboard, and touch behavior stable?
- [ ] Is animation work cleaned up on unmount and paused when not visible?
- [ ] Is `will-change` removed once the animation ends?
- [ ] If 3D or canvas is used, are rendering budgets, fallbacks, and canvas rules handled?
- [ ] Did the motion audit pass for focus, reduced motion, and contrast during motion?
- [ ] Did I measure meaningful performance claims on a representative setup?