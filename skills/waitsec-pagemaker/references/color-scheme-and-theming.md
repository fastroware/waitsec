# Light and Dark Color Scheme

Light and dark theme support with a working toggle is the default for any page or visual system pagemaker builds from scratch, not an optional add-on that needs to be requested each time. Load this reference whenever [`design-direction.md`](./design-direction.md) or [`visual-styles.md`](./visual-styles.md) is in play, or whenever the brief asks for light and dark mode directly.

If the project already ships an established single-theme system and the current task does not otherwise touch its visual system, do not force a theme rework just to add a toggle. Note the gap to the user instead of silently expanding the task's scope.

## Token Structure

Define every color as a semantic token with a light and a dark value, not one value that gets inverted later:

- Background, surface, and a raised or elevated surface tone.
- Text, muted text, and a border color.
- One primary accent, with hover and active variants.
- Semantic states: success, warning, danger, and any others the product needs.

Dark surfaces read better as elevated dark grays, for example a base near `#121212` with lighter layers for elevation, rather than pure black. Pure white text on pure black causes glare; a slightly off-white text color holds up better. An accent color often needs a brightness or saturation adjustment between the two themes to hold the same contrast target. Do not reuse one identical hex value in both themes and assume it reads the same way in each.

Shadows barely register on a dark background. Signal elevation in dark mode with a lighter surface tone or a subtle border instead of relying on shadow alone. Images, logos, and illustrations sometimes need a dark-mode variant, or a small brightness reduction, so they do not glare against a dark surface.

## Choosing the Initial Theme

- Default to the visitor's system preference through the `prefers-color-scheme` media query.
- If the person has made an explicit choice before, honor and persist that choice over the system preference on later visits.
- Offer three effective states: light, dark, and follow system. Follow system is the sensible default until someone picks one directly.

## Preventing a Flash of the Wrong Theme

- Set the theme attribute or class before first paint, using a small blocking script placed in the document head, not a script that runs after the rest of the page has loaded.
- Read the stored preference synchronously, fall back to the system preference, then set the attribute before any content paints.
- Do not rely on a client framework's hydration cycle alone to set the initial theme, or the page flashes the wrong theme for a frame on every load.

## The Toggle Control

- Give it a visible label, or an icon paired with an accessible name. Never an icon alone with no label a screen reader can announce.
- Reflect state clearly, for example `role="switch"` with `aria-checked`, or a native control with a clearly associated label.
- Give it default, hover, focus, active, and disabled states like any other interactive control.
- Keep it reachable from the same place across the site, usually the header or a settings area, matching the project's existing navigation conventions.

## The Transition

- Apply the theme transition to color-related properties only: `background-color`, `color`, `border-color`, `fill`, `stroke`, `box-shadow`. Do not transition layout properties.
- Use a short, uniform duration in the 200ms to 300ms range with an ease-in-out curve, since switching themes is a state change with no clear enter or exit direction.
- Keep the transition disabled until after the initial theme has been applied and the page is interactive. Enabling it too early makes the very first load look like it animates from the wrong theme into the right one.
- Respect `prefers-reduced-motion`. Switch instantly instead of transitioning when the visitor's system asks for reduced motion.

## Contrast and Verification

- Check contrast independently in each theme. A color pair that passes in light mode does not guarantee the same pair passes in dark mode.
- Verify every interactive state, hover, focus, active, and disabled, in both themes, not only the default state.
- Audit for hard-coded color values that bypass the token system in either theme. A stray hex value usually means one theme was styled and the other was forgotten.

## Reuse Before Building

If the project already defines light and dark tokens or a toggle, extend that system. Do not create a second one beside it. Check the existing tokens, naming convention, and storage mechanism before adding new ones.

## Anti-Patterns

### 1. One Palette, Inverted

* **The Bad Habit:** Generating the dark theme by mechanically inverting or auto-darkening the light theme's exact values.
* **The Problem:** Contrast, hue, and perceived elevation all shift under a blind inversion, so colors that read fine in light mode become unreadable or glaring in dark mode.
* **Why It Fails:** Color perception is not linear. An inverted palette rarely holds up to a real contrast check.
* **Clean Fix:** Define each theme's tokens by design intent, what should feel elevated, what should recede, and check contrast separately in each.
* **The Waitsec Way:** Two themes, tuned twice, not one theme mirrored once.

### 2. The Flashing Toggle

* **The Bad Habit:** Setting the theme after the rest of the page has already painted, from a regular script tag or a framework's mount lifecycle.
* **The Problem:** Every page load flashes the wrong theme for a frame before the correct one applies.
* **Why It Fails:** It reads as broken even when the underlying logic is correct, and it repeats on every navigation for a returning visitor.
* **Clean Fix:** Read the stored or system preference and set it in a small blocking script in the document head, before first paint.
* **The Waitsec Way:** The right theme should be the first thing anyone sees, not the second.

### 3. Animating the First Paint

* **The Bad Habit:** Leaving the color transition active from the very first load, so the page visibly animates from a default theme into the resolved one.
* **The Problem:** What should be an instant, correct render instead looks like a flicker or an unintended fade-in on every visit.
* **Why It Fails:** People read unintentional motion on load as a glitch, not a feature.
* **Clean Fix:** Keep transitions off until the initial theme is applied and the page is interactive, then enable them for later toggles only.
* **The Waitsec Way:** Motion belongs to the toggle, not to the page load.

## Theming Checklist

- [ ] Does every color exist as a token with a separate, real light and dark value, not an inverted one?
- [ ] Does the initial theme follow system preference, with an explicit later choice persisted and honored?
- [ ] Is the theme set before first paint through a blocking script, with no flash on load?
- [ ] Does the toggle have a real accessible name and the full set of interaction states?
- [ ] Does the theme transition cover only color-related properties, at 200ms to 300ms with an ease-in-out curve?
- [ ] Is the transition disabled on first paint and enabled only after the initial theme is applied?
- [ ] Does the toggle switch instantly instead of transitioning when reduced motion is requested?
- [ ] Was contrast checked independently in both themes, across every interactive state?
- [ ] Did I extend an existing theming system instead of building a second one beside it?
