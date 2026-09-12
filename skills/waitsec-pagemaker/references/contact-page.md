# Contact Page Blueprint (waitsec-pagemaker)

Use this guide when creating a contact page, support inquiry form, or feedback screen. It ensures users can reach out smoothly on mobile and desktop without friction or broken form states.

---

## Complete Page Anatomy & Responsive Flow

### 1. Header & Clear Expectations
* **Desktop & Mobile:** Clear heading ("Get in Touch" or "Contact Us"), followed by an honest response estimate (e.g. "We typically respond within 24 business hours"). Setting expectations prevents users from sending repeat tickets.

### 2. Form Layout & Alternative Channels (The Split)
* **Desktop (1024px+):** 2-column layout (`grid grid-cols-1 lg:grid-cols-12 gap-12`).
  - Left Side (7 cols): Clean form card with minimal inputs.
  - Right Side (5 cols): Direct contact box with direct email, office address, timezone, and live status badge.
* **Mobile (<768px):** Single vertical stack. The form appears first at the top. The direct contact details and social links appear below the form.

### 3. Minimal Field Discipline
Strictly limit input fields to what is necessary:
1. Full Name (`<input type="text" required>`)
2. Email Address (`<input type="email" required>`)
3. Topic / Category (clean `<select>` dropdown or horizontal radio pills)
4. Message (`<textarea rows="4" required>`)
Never demand phone numbers, fax numbers, company size, or physical mailing address for a general contact form.

### 4. Interactive States (Feedback Loop)
* **Default State:** Clean borders with high contrast labels.
* **Typing / Focus State:** High-contrast focus ring around active input (`focus-visible:ring-2 focus-visible:ring-neutral-900`).
* **Submitting State:** The submit button disables immediately and shows a clean spinner with "Sending...".
* **Success State:** The form disappears and displays an inline confirmation message: "Thank you! We received your message and will reply soon."
* **Error State:** Specific field outlines turn red (`border-red-500`) with a clear error explanation directly below the field.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The 10-Field Interrogation Form

* **The Bad Habit:** Demanding full name, company name, company URL, job title, phone number, budget dropdown, industry, country, and message.
* **The Problem:** The contact form looks like a government tax audit. On a phone, the user has to scroll through 4 screens just to find the submit button.
* **Why It Fails:** Conversion drops by over 50% for every 2 extra fields added to a form. Mobile users will not type their corporate biography on a phone keyboard.
* **Clean Fix:** Cut the form down to 3 essential fields: Name, Email, and Message. You can always ask follow-up questions in your reply email:
  ```html
  <form class="space-y-4 max-w-lg">
    <div>
      <label for="name" class="block text-sm font-medium text-neutral-700">Full Name</label>
      <input type="text" id="name" required class="w-full mt-1 px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 outline-none">
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-neutral-700">Email Address</label>
      <input type="email" id="email" required class="w-full mt-1 px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 outline-none">
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-neutral-700">Message</label>
      <textarea id="message" rows="4" required class="w-full mt-1 px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 outline-none"></textarea>
    </div>
    <button type="submit" class="w-full py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition">
      Send Message
    </button>
  </form>
  ```
* **The Waitsec Way:** Respect user time. Ask only for what you need to start the conversation.

### 2. Stripping Input Focus Outlines

* **The Bad Habit:** Setting `outline: none` on inputs without replacing it with a custom focus ring.
* **The Problem:** When a user taps or tabs into an input box, the border looks completely unchanged.
* **Why It Fails:** The user cannot tell which field is currently active. On mobile devices with virtual keyboards, it leads to typing into the wrong box.
* **Clean Fix:** Always provide an unmistakable focus ring:
  ```css
  /* Tailwind standard focus */
  input:focus {
    outline: none;
    border-color: #171717;
    box-shadow: 0 0 0 2px #171717;
  }
  ```
* **The Waitsec Way:** Focus indicators guide the user's attention. Never disable them without providing a better one.

### 3. The Silent Ghost Submission

* **The Bad Habit:** When the user clicks "Send Message", nothing happens for 4 seconds, then the page reloads back to an empty form with no message.
* **The Problem:** The user has no idea whether the message went through or crashed. They click the button 5 more times in frustration.
* **Why It Fails:** Software must always confirm state changes. Silent forms destroy confidence and generate duplicate tickets.
* **Clean Fix:** Disable the submit button immediately on click, show a loading state, and render an unmistakable success card:
  ```html
  <!-- Button Loading State: the spinner icon comes from the icon library, never inline SVG -->
  <button disabled class="w-full py-3 bg-neutral-700 text-white font-medium rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
    <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>
    <span>Sending...</span>
  </button>

  <!-- Inline Success State -->
  <div class="p-6 bg-green-50 border border-green-200 rounded-xl text-green-900">
    <h3 class="font-bold">Message sent successfully!</h3>
    <p class="text-sm mt-1 text-green-800">We received your note and will reply to your email within 24 hours.</p>
  </div>
  ```
* **The Waitsec Way:** Never leave users guessing. Give immediate visual feedback for every user submission.

### 4. The Trapped Mobile Keyboard Viewport Shift

* **The Bad Habit:** Setting the contact container to fixed pixel height (`height: 600px`) or centering the form inside a strict `h-screen flex items-center`.
* **The Problem:** When the virtual on-screen keyboard pops up on a phone, the viewport height shrinks by 50%. The input field gets pushed behind the keyboard, and the user cannot see what they are typing.
* **Why It Fails:** Users cannot see their words, cannot review typos, and cannot reach the submit button.
* **Clean Fix:** Allow the page to scroll naturally. Use `min-h-screen` instead of `h-screen`, and give the form bottom padding (`pb-24`) so the submit button easily clears the virtual keyboard:
  ```html
  <main class="min-h-screen py-12 px-4 sm:px-6 pb-32">
    <div class="max-w-xl mx-auto">...</div>
  </main>
  ```
* **The Waitsec Way:** Always account for virtual mobile keyboards. Content must scroll freely above the keyboard plane.

---

## SEO, GEO & Structured Data (Contact Page)

- Title: "Contact" plus the brand name, about 50 to 60 characters.
- Meta description: how to reach the team and the expected response time, about 140 to 160 characters.
- One `<h1>` such as "Get in touch".
- Print the email and address as visible text, not only inside the form, so they can be extracted.
- Server-render the contact details, the email link, and the response-time note.
- Keep the page focused on contact, and avoid unrelated marketing sections.

### JSON-LD for a Contact Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "url": "https://example.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Example Inc",
    "url": "https://example.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@example.com",
      "availableLanguage": ["English", "Indonesian"]
    }
  }
}
</script>
```

Add the organization `logo` and a `PostalAddress` when a physical address is shown. Only include channels that are actually displayed on the page.

---

## Pre-Flight Checklist for Contact Pages

- [ ] Is the form limited to 3 or 4 essential fields (Name, Email, Message)?
- [ ] Does every input field have a visible label and high-contrast focus ring?
- [ ] Is there an immediate loading spinner on the submit button to prevent double-submits?
- [ ] Does the page display an unmistakable success banner after submission?
- [ ] Is there a direct, visible email address (`mailto:`) provided as an alternative contact method?
- [ ] Does the form have enough bottom padding to clear mobile virtual keyboards?
- [ ] Is there a valid ContactPage with Organization and ContactPoint schema?
- [ ] Are the email and address visible as text, not only inside the form?
