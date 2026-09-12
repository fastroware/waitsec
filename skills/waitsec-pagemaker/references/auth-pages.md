# Auth Pages Blueprint (waitsec-pagemaker)

Use this guide when creating login, register, forgot password, reset password, remember me, or account lockout and rate-limit screens. These pages are private by nature, so the goal is clarity, safety, and a short path back into the product.

---

## Complete Page Anatomy & Responsive Flow

### 1. Login Page
* **Desktop (1024px+):** Centered card (`max-w-md`) or a 2-column split with the form on the left and a solid brand panel on the right. No busy background.
* **Mobile (<768px):** Single column. Brand mark on top, then the form. Inputs and the primary button are full width.
* Fields: email or username, password with a show or hide toggle, a "Remember me" checkbox, the primary "Sign in" button, and a secondary "Forgot password?" link.
* One primary action only. Social login buttons appear only when a real provider is wired up, and they sit below a labeled divider.

### 2. Register Page
* Minimal fields: name, email, password, and confirm password (or a single password field with a visible rules checklist).
* Show password rules as a short checklist and validate as the user types.
* Terms or privacy checkbox only when it is legally required.
* Primary "Create account", with a clear link back to login.

### 3. Forgot and Reset Password
* Forgot: one email field and one primary "Send reset link" button. Always show the same neutral success message, whether or not the email exists.
* Reset: new password plus confirm. The token is handled server-side, and the page notes that the link expires.

### 4. Remember Me
* Label states the exact duration, for example "Remember me for 30 days".
* Unchecked by default on shared or public devices.
* Never store tokens in `localStorage` or `sessionStorage`. Use secure, httpOnly, sameSite cookies set by the server.

### 5. Account Locked and Rate Limit Blocked
* Explain what happened in plain words, how long the lock lasts, and the next step.
* Provide one recovery action: retry when the countdown ends, reset the password, or contact support.
* Show a live countdown and keep the submit button disabled until it ends.
* Render this as its own clear state, not a generic error page.

---

## Interaction and Security Rules (Non-Negotiable)

- Never reveal whether an account exists. Use the same message for an unknown email and a wrong password.
- Enforce the rate limit on the server. The UI only reflects the remaining wait time.
- Use correct autocomplete attributes: `autocomplete="email"`, `autocomplete="current-password"` for login, and `autocomplete="new-password"` for register and reset.
- Keep password fields accessible with visible labels and a show or hide toggle.
- Errors appear as a summary at the top of the form and, where useful, inline under the field.
- Use `aria-live="polite"` for the lockout countdown and for async error messages.
- Give every control at least a 44px by 44px target on mobile.
- Set input font size to at least 16px on mobile so iOS does not zoom on focus.
- Center the card with `min-h` and normal document flow, never a fixed `h-screen` that traps the form when the keyboard opens.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. User Enumeration

* **The Bad Habit:** The login form says "Email not found" for an unknown address and "Wrong password" for a known one.
* **The Problem:** The different responses let an attacker test which emails have accounts.
* **Why It Fails:** It turns the login page into an account discovery tool and invites credential stuffing against real users.
* **Clean Fix:** Return one generic message such as "Email or password is incorrect" for both cases, and keep the response time consistent.
* **The Waitsec Way:** Treat account existence as private data. Say less to stay safe.

### 2. Lockout With No Explanation or Recovery

* **The Bad Habit:** After too many attempts the form silently stops working or returns a blank error.
* **The Problem:** The user assumes the site is broken and keeps retrying, which extends the lock.
* **Why It Fails:** Frustration grows, support load rises, and legitimate users are locked out with no path back.
* **Clean Fix:** Show a clear locked state with the reason, a live countdown, and one recovery action.
* **The Waitsec Way:** A block must explain itself and offer a way out.

### 3. Insecure Remember Me

* **The Bad Habit:** Storing a long-lived token in `localStorage` so the checkbox "just works".
* **The Problem:** Any script on the page can read the token, and a stolen token keeps the session alive.
* **Why It Fails:** It turns a small XSS into a permanent account takeover.
* **Clean Fix:** Use secure, httpOnly, sameSite cookies set by the server, with a sensible expiry, and rotate the token on use.
* **The Waitsec Way:** Convenience must never weaken the session.

### 4. Password Fields That Fail on Mobile

* **The Bad Habit:** A password input with no show or hide toggle, tiny text, and no correct autocomplete hint.
* **The Problem:** Users mistype, cannot verify, and the browser fills the wrong field or the wrong kind of value.
* **Why It Fails:** Failed logins pile up, and some users abandon the form entirely.
* **Clean Fix:** Add a show or hide toggle, use at least 16px text, and set the correct `autocomplete` attribute for each field.
* **The Waitsec Way:** Remove friction from the most repeated action in the product.

### 5. Fixed h-screen Form Trap

* **The Bad Habit:** Centering the card inside `h-screen flex items-center`.
* **The Problem:** When the mobile keyboard opens, the viewport shrinks and the input scrolls out of view.
* **Why It Fails:** Users cannot see what they type or reach the submit button.
* **Clean Fix:** Use `min-h-screen` with normal flow and enough bottom padding so the form scrolls above the keyboard.
* **The Waitsec Way:** Let the page scroll. Never lock the height of a form on mobile.

### 6. No Loading or Disabled State

* **The Bad Habit:** The submit button stays active while the request runs.
* **The Problem:** Users click several times and send duplicate login or register requests.
* **Why It Fails:** It triggers avoidable rate limits and adds confusing error states.
* **Clean Fix:** Disable the button on submit, show a spinner or "Signing in..." label, and re-enable it on failure.
* **The Waitsec Way:** Every submit needs feedback and a single-flight guard.

---

## SEO, GEO & Structured Data (Auth Pages)

- Auth pages should not rank. Set `<meta name="robots" content="noindex, nofollow">`.
- Keep a simple title ("Sign in" or "Create account") plus the brand, and skip promotional copy.
- Exclude auth pages from the sitemap and avoid linking to them as content.
- Because this is a private page, use a minimal `WebPage` node. Do not add rich result types that a login page cannot support.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sign in",
  "url": "https://example.com/login",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://example.com"
  }
}
</script>
```

---

## Pre-Flight Checklist for Auth Pages

- [ ] Is `<meta name="robots" content="noindex, nofollow">` present, and the page excluded from the sitemap?
- [ ] Does the page avoid revealing whether an account exists, with the same message and timing for all failures?
- [ ] Do password fields have a show or hide toggle and the correct `autocomplete` attribute?
- [ ] Does "Remember me" state its duration and default to off on shared devices?
- [ ] Are session tokens kept out of `localStorage` and placed in secure httpOnly cookies?
- [ ] Does the locked or rate-limited state explain the reason, show a countdown, and offer one recovery action?
- [ ] Is the submit button disabled during the request to prevent double submits?
- [ ] Does the form use `min-h-screen` with normal scrolling instead of a fixed `h-screen`?
- [ ] Is a minimal `WebPage` JSON-LD block present and valid?
