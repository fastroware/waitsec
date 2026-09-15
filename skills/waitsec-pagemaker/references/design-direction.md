# Design Direction

Use this reference when a page needs visual direction and the project does not already have one, or when the user asks to change the current direction.

This is not a beautifier and not a restyle by default. Improving an existing look is normal page work. Replacing a working design system is a separate, larger decision that the user must make first.

Do not run this reference for a normal page inside a project that already has clear colors, type, and components. Reuse the system and move on.

## When To Use It

Use it when:

- The project is blank and the user asked for a new visual identity.
- The user explicitly asks for a new look or a redesign.
- The page has no consistent colors, type, or spacing, and the task is to establish them.

Do not use it to silently replace a system the user is happy with.

## 1. Understand Before Choosing

Never skip this step, especially when the brief is "just make it look good", because that sentence contains no decisions and someone still has to make them.

Cover five areas, one question at a time:

1. Product: what it is and what it does.
2. Audience: who uses it and in what mood.
3. Mood: three to five adjectives for how it should feel.
4. References: sites, apps, or products the user admires, or ones that feel wrong.
5. Stack: search the project instead of asking.

Push vague answers toward real choices. "Clean" becomes a choice between calm editorial whitespace, dense but organized, and dramatic minimalism. When "what do you want" stalls, ask "what would feel wrong", because negative examples are often sharper.

If the user asks to skip ahead, do not simply comply. Say what is covered, what is missing, what the gap affects, and offer the choice: one more question, or proceed on stated assumptions the user can correct. Name the assumptions out loud instead of hiding them.

## 2. State a Visual Thesis

Write one sentence that answers four questions:

1. What is the visual goal?
2. What technique or system achieves it?
3. What mood does it serve?
4. What is explicitly avoided?

Example:

> A calm, high-contrast system using a single accent color, generous spacing, and one serif for headings, avoiding gradients, glass, and card-heavy layouts.

For an open-ended page this sentence is a gate. Do not start styling until it is clear. A wrong direction caught in one sentence costs one sentence. The same direction caught after the whole page is built costs the page.

## 3. Write the System Before the Page

When the page establishes a direction, define the values once, then use them everywhere.

- Color: background, surface, text, muted text, border, one primary accent, and semantic states for success, warning, and danger.
- Type: one or two families, a small size scale, line heights, and heading weights.
- Space: one spacing scale, usually steps of 4 or 8.
- Radius and border: one or two radii and one border color.
- Elevation: a small number of shadow levels, or none if the direction is flat.
- Motion: the shared durations and easings from [`motion-and-3d.md`](./motion-and-3d.md).

Prefer a plain set of variables or tokens the project already supports. Every value in the page should trace back to one of these. A stray hex value or spacing number is a sign the system is not being followed.

When the project already has tokens, extend them. Do not create a second set beside the first.

## 4. Give Every Interactive Element All States

Each interactive element needs a defined default, hover, focus, active, and disabled state. Use the project's existing values.

- Keep focus visible and distinct from hover.
- Keep the disabled state readable, not just faded to nothing.
- Keep the loading and error states consistent with the same system.
- Do not invent a new accent color to signal a state the system can already express.

## 5. Apply With Restraint

Restraint is the default direction, not one option among many.

- Build hierarchy with type, spacing, alignment, and contrast before effects.
- Use one primary accent. Avoid multiple competing highlights.
- Avoid repeated gradients, blur, glass, large shadows, decorative grids, and all-pill controls unless the direction calls for them with a reason.
- Keep surfaces and borders quiet so content leads.
- Use fewer colors than feels comfortable, then remove one more if it does not carry meaning.

## 6. Audit Against the System

Run this before reporting the work complete. Search the code instead of reading from memory, because a search catches what a read-through misses.

- Any color value not traceable to the system.
- Any spacing or radius value outside the scale.
- Interactive elements missing default, hover, focus, active, or disabled.
- Focus styles removed with no `:focus-visible` replacement.
- Contrast below 4.5:1 for body text.
- Headings that jump levels or skip sizes in a way that breaks hierarchy.
- Repeated decorative effects that are not part of the stated thesis.
- A second design system layered beside the existing one.

Group findings by severity: critical, important, and nice-to-have. Fix critical issues before calling the page done.

## Design Direction Checklist

- [ ] Did I confirm the project does not already have a usable direction?
- [ ] Did I understand the product, audience, and mood before choosing values?
- [ ] For an open-ended page, is there a clear one-sentence visual thesis?
- [ ] Does every color, size, and space value trace back to one system?
- [ ] Does every interactive element have default, hover, focus, active, and disabled states?
- [ ] Is the direction restrained, with one primary accent and quiet surfaces?
- [ ] Did I extend existing tokens instead of creating a second system?
- [ ] Did the audit pass for stray values, missing states, and contrast?
- [ ] Were findings reported by severity instead of claimed as a clean pass?