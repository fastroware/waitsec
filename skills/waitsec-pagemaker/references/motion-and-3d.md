# Motion and 3D

Use this guide when the user requests animation, parallax, canvas graphics, or 3D for a page, section, or interface element.

Motion and 3D are optional enhancements. The page content, controls, and main action must work without them.

## Decision Gate

Before implementing an effect, answer:

1. What user-visible job does it do?
2. Can existing CSS or a project utility handle it?
3. Does the project already have a motion or graphics tool?
4. What happens with reduced motion, low power, a slow connection, or no graphics support?
5. Can the content remain visible if the effect fails?

If a still image, normal state change, or short CSS transition does the same job, use the simpler option.

## Tool Choice

Use this order:

1. Existing project motion or graphics tools.
2. Native CSS transitions and animations for small interface changes.
3. Browser APIs for focused behavior when they keep the code small.
4. A new dependency only when the requested effect needs its features and the project can support its cost.

Do not default to a named animation or 3D library. If the user requests one, confirm that it fits the current framework, version policy, and bundle setup.

Use local project dependencies in build projects. Follow the project's approved external-script policy for static pages. Pin external versions when the project allows a CDN and a CDN is justified.

## Motion Rules

- Use motion to explain state, continuity, progress, hierarchy, or a user action.
- Keep content visible before scripts load.
- Prefer compositor-friendly properties such as transforms and opacity for movement and fades.
- Other properties may be used when the visual need requires them and the measured cost is acceptable.
- Keep durations and easing consistent with the existing product.
- Avoid long entrance sequences that delay reading or interaction.
- Trigger scroll effects with a small shared mechanism rather than repeated listeners.
- Stop observers and animation work when they are no longer needed.
- Pause continuous work when content is off-screen or the page is hidden.

## Reduced Motion

- Respect `prefers-reduced-motion`.
- Remove non-essential movement.
- Replace large travel, parallax, and repeated rotation with a still state or small change.
- Keep status and progress understandable without animation.
- Test keyboard and screen-reader use with motion disabled.

Reduced motion is a complete usable mode, not an empty canvas.

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

## Verification

Check:

- Initial content visibility with scripts delayed or blocked.
- Reduced-motion behavior.
- Keyboard and touch interaction.
- Scroll stability and layout shift.
- Main-thread and rendering cost on a representative device.
- Cleanup when components unmount or leave the viewport.
- Fallback behavior without graphics support.

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

## Motion and 3D Checklist

- [ ] Does each effect have a clear user-visible job?
- [ ] For parallax, did I choose the best contextual target instead of assuming it must be an image?
- [ ] Are movement distance, speed, direction, and depth suitable for that target?
- [ ] Does the effect adapt deliberately across mobile, touch, desktop, and precise-pointer use?
- [ ] Are content order, controls, focus, native scrolling, and viewport boundaries stable at narrow, middle, and wide widths?
- [ ] Did I reuse project tools or a native solution before adding a dependency?
- [ ] Is content visible and usable before the effect loads?
- [ ] Does reduced-motion mode preserve all information and actions?
- [ ] Are scroll, focus, keyboard, and touch behavior stable?
- [ ] Is continuous work paused when it is not visible?
- [ ] If 3D is used, are rendering budgets and fallbacks defined?
- [ ] Did I measure meaningful performance claims on a representative setup?
