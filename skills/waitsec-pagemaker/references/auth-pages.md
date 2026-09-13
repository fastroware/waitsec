# Authentication Page Blueprint

Use this guide for sign-in, registration, password recovery, password reset, verification, account lockout, or similar access pages.

Pagemaker owns page composition and client UX. Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for forms, accessibility, states, and copy. Route server-side authentication, authorization, sessions, tokens, rate limits, tests, and sensitive data to [`waitsec-quality`](../../waitsec-quality/SKILL.md).

## Scope Boundary

Client page work includes:

- Field layout and labels.
- Password visibility controls.
- Autocomplete attributes.
- Submission, validation, success, and blocked states.
- Recovery links and return paths.
- Keyboard, focus, mobile keyboard, and screen-reader behavior.

Client code must not pretend to enforce server security. A disabled button or countdown can reflect a server rule, but it cannot replace that rule.

## Page Variants

| Page | Typical content | Conditional content |
| :--- | :--- | :--- |
| Sign in | Account identifier, password, submit action | Remember option, provider buttons, password recovery |
| Register | Fields required by the real account model | Password rules, consent, invitation context |
| Forgot password | Account identifier and submit action | Support or return link |
| Reset password | New credential fields and submit action | Expiry information provided by the server |
| Verification | Current status and next action | Resend behavior and change-address path |
| Locked or rate limited | Clear blocked state and recovery path | Retry time when the server safely provides it |

Do not show social providers, consent boxes, account fields, or recovery methods that are not implemented.

## Form Rules

- Use persistent visible labels.
- Use the correct input types and project conventions.
- Set useful autocomplete values, such as `email`, `username`, `current-password`, and `new-password` where they match the field.
- Provide a password show or hide control with an accessible name and announced state.
- Use a readable mobile input size and let the page scroll above the keyboard.
- Keep submit and recovery actions easy to distinguish.
- Preserve safe field values after recoverable errors. Clear secret values when project security rules require it.
- Disable or guard repeated submissions while a request is pending.

## Messages and Privacy

- Use the server's approved generic sign-in failure message.
- Password recovery should not expose whether an account exists.
- Do not include stack traces, provider errors, token values, or internal rate-limit details in normal user copy.
- State what the person can do next.
- Keep security and consent text that affects the user's decision.
- Do not promise an email, retry time, or recovery path the server does not provide.

The server decides response timing, account lookup behavior, session storage, token rotation, cookie settings, and rate limits. Follow quality rules rather than recreating those controls in page instructions.

## Remembered Sessions

Show a remember option only when the product supports it. The label should explain the real behavior when duration or device scope matters.

Do not choose client token storage from this page blueprint. Session design belongs to the server and security implementation.

## Locked and Rate-Limited States

- Render a distinct blocked state rather than a dead form.
- Explain the allowed next step without exposing sensitive account information.
- Show a retry time or countdown only when the server provides a reliable value.
- Keep the final decision on the server even if the UI disables submission.
- Make status updates available to assistive technology without announcing every second when that would be noisy.
- Provide a recovery or support path only when it really exists.

## Indexing

Auth and account-recovery pages are normally not intended for search. Follow the project's existing `noindex` and sitemap behavior. Use [`seo-and-structured-data.md`](./seo-and-structured-data.md) only to inspect or correct that behavior. Do not add JSON-LD merely because the route is a page.

## Anti-Patterns

### 1. Revealing Account Existence

* **The Bad Habit:** Showing different visible messages for an unknown account and an incorrect secret.
* **The Problem:** The page tells an observer which account identifiers are registered.
* **Why It Fails:** That information can support targeted password attacks and unwanted account discovery.
* **Clean Fix:** Display the approved generic response and let the server enforce consistent secure behavior. Route server implementation and tests to quality.
* **The Waitsec Way:** Access pages reveal only what a person needs to recover or continue safely.

### 2. Treating Client Controls as Security

* **The Bad Habit:** Implementing a countdown, disabled button, or hidden field and assuming it enforces a rate limit or protects a token.
* **The Problem:** A direct request can bypass the page control.
* **Why It Fails:** Attackers do not have to use the rendered interface.
* **Clean Fix:** Use client controls for feedback and duplicate-submit prevention. Enforce authentication, rate limits, and token rules on the server under quality guidance.
* **The Waitsec Way:** The interface explains security state. It does not create the security boundary.

### 3. Fixed-Height Form Trap

* **The Bad Habit:** Vertically centering the auth form inside a fixed viewport height with no natural page scroll.
* **The Problem:** The mobile keyboard can cover the active field or submit action.
* **Why It Fails:** People cannot review input or finish the form while the keyboard is open.
* **Clean Fix:** Use natural flow, a flexible minimum height when needed, and enough bottom space for keyboard-safe scrolling.
* **The Waitsec Way:** Access forms must remain usable in the real mobile viewport.

### 4. No Submission Feedback

* **The Bad Habit:** Leaving the primary action active and unchanged while an auth request runs.
* **The Problem:** People submit repeatedly and cannot tell whether the request started.
* **Why It Fails:** Duplicate requests can trigger blocks and create confusing state changes.
* **Clean Fix:** Guard repeat submission, show a clear pending state, and restore an actionable error or recovery state when the request fails.
* **The Waitsec Way:** Every access attempt gets clear, safe feedback.

## Page Checklist

- [ ] Does the page show only fields and providers the real auth flow supports?
- [ ] Are labels, input types, autocomplete, focus, and password controls accessible?
- [ ] Are pending, validation, failure, success, locked, and recovery states handled where relevant?
- [ ] Do visible messages avoid exposing account existence and internal errors?
- [ ] Does the page remain usable with a mobile keyboard and zoom?
- [ ] Are remembered-session claims based on real server behavior?
- [ ] Are rate limits, tokens, cookies, auth tests, and sensitive data routed to quality?
- [ ] Does the route follow the project's existing noindex and sitemap behavior without forced schema?
