# UI Copy Decisions

Use this reference when writing or reviewing labels, helper text, validation, status messages, warnings, empty states, tooltips, and other interface copy.

The goal is not to remove as much text as possible. The goal is to keep the text people need and remove text that does no useful work.

## The Three Decisions

### `KEEP`

Keep text when it is already clear, accurate, and useful.

Common reasons to keep text:

- It gives a control an accessible name.
- It labels a field or explains the expected value.
- It reports validation, status, progress, or failure.
- It explains consent, privacy, cost, billing, or a security effect.
- It warns about an irreversible or destructive action.
- It helps someone choose between options.
- It tells someone how to recover or what happens next.
- It provides context that cannot be understood from the visual design alone.

### `REWRITE`

Rewrite text when the information is needed but the wording is long, vague, technical, blaming, or hard to scan.

A rewrite should:

- Put the useful fact or next action first.
- Use words the intended user understands.
- Keep exact costs, limits, dates, and consequences.
- Say what happened and what the person can do next.
- Keep the meaning of legal, consent, privacy, and security text intact.
- Avoid exposing implementation details unless the interface is made for developers and the detail helps their task.

### `REMOVE`

Remove text only when it adds no needed meaning.

Good removal candidates:

- A sentence that repeats a clear button label.
- Developer narration about rendering, requests, caching, or loading methods.
- Filler added to occupy empty space.
- A decorative label that does not help identification or choice.
- A tooltip that repeats the visible label word for word.
- A metric that has no effect on the user's decision or task.

## Protected Copy

Do not remove these just because the interface looks cleaner without them:

- Accessible names for icon-only controls.
- Visible form labels, except when a tested accessible pattern provides an equal label.
- Validation errors and input requirements.
- Consent and privacy choices.
- Prices, fees, renewal terms, and purchase conditions.
- Security notices and session effects.
- Destructive or irreversible action warnings.
- Loading, success, failure, and recovery information.
- Eligibility, availability, and important limits.
- Text needed to understand an unfamiliar icon or control.

A visually hidden accessible name is still useful text. Do not remove it because it is not visible.

## Decision Process

For each piece of copy:

1. Identify the user and the task.
2. Ask what decision, action, or recovery this text supports.
3. Check whether the same meaning is already clear from a nearby label or control.
4. Check whether removing it would hide a requirement, cost, risk, status, or accessible name.
5. Choose `KEEP`, `REWRITE`, or `REMOVE`.
6. Give one short reason.

When unsure, do not default to removal. Keep safety and accessibility information. Rewrite useful text before deleting it.

## Examples

| Copy | Decision | Reason |
| :--- | :--- | :--- |
| `Email address` above an email field | `KEEP` | It labels the field. |
| `Click the Save button below to save` above a `Save` button | `REMOVE` | It repeats the control. |
| `API request failed with status 429` in a consumer app | `REWRITE` | The failure matters, but the internal wording does not help. |
| `Too many attempts. Try again in 10 minutes.` | `KEEP` | It explains the block and the next step. |
| `You will be charged $29 today, then monthly.` | `KEEP` | Cost and billing timing must stay visible. |
| `Loads 40 records per background request` | `REMOVE` | It describes implementation with no user value. |
| `Delete this workspace and all 18 projects? This cannot be undone.` | `KEEP` | It explains an irreversible result. |
| `Invalid input` | `REWRITE` | Name the field problem and how to fix it. |

## Anti-Patterns

### 1. Implementation Narration

* **The Bad Habit:** Writing copy about APIs, rendering, lazy loading, caches, or batch sizes in an interface for non-technical users.
* **The Problem:** Internal mechanics take space that should explain the visible result or next action.
* **Why It Fails:** People must translate developer language before they can continue their task.
* **Clean Fix:** Replace the mechanism with the useful status, result, or recovery step. Remove it when no user-facing meaning remains.
* **The Waitsec Way:** Interface copy explains the task, not the implementation.

### 2. Repeating an Obvious Control

* **The Bad Habit:** Adding helper text such as "Click Submit to submit the form" beside a clearly labeled button.
* **The Problem:** The same instruction appears twice and makes the screen harder to scan.
* **Why It Fails:** Repetition hides the few messages that actually need attention.
* **Clean Fix:** Keep the clear control label and remove the repeated sentence. Add help only when the action or result is not obvious.
* **The Waitsec Way:** Clear controls can speak for themselves.

### 3. Deleting Needed Guidance for a Cleaner Screen

* **The Bad Habit:** Removing labels, errors, prices, consent text, or destructive warnings to make the layout look minimal.
* **The Problem:** The interface looks quieter but withholds information needed for safe use.
* **Why It Fails:** People make mistakes, miss costs, lose data, or cannot use the control with assistive technology.
* **Clean Fix:** Keep the needed meaning, shorten it when possible, and improve the layout instead of deleting the information.
* **The Waitsec Way:** Restraint removes noise, not safety or access.

## Review Output

Use this format when the task is a copy audit:

```text
KEEP: "Current text"
Reason: One short reason.

REWRITE: "Current text"
Suggested: "Clearer text"
Reason: One short reason.

REMOVE: "Current text"
Reason: One short reason.
```

For normal page or component generation, apply these decisions silently unless the user asks for a copy report.
