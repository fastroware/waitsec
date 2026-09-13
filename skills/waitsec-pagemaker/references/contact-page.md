# Contact, Support, and Feedback Blueprint

Use this guide for a contact page, support request, sales inquiry, feedback form, or another page that starts a conversation.

Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for form details, accessibility, states, and copy. Use [`seo-and-structured-data.md`](./seo-and-structured-data.md) only when the page is public and indexable.

## Define the Contact Job

Identify:

- Who receives the message.
- What kinds of requests the channel accepts.
- Which information is needed to respond or route it.
- Whether the page needs a form, direct channel, or both.
- What privacy, consent, retention, or attachment rules apply.
- Whether a response time is known and approved for display.

Do not invent response times, office locations, phone numbers, email addresses, support hours, or availability.

## Choose the Channel

| Channel | Use when |
| :--- | :--- |
| Short form | Structured input helps route or respond to the request. |
| Email link | A public inbox is approved and direct email is acceptable. |
| Phone or chat | The channel is staffed and the details are current. |
| Support portal | Authenticated history, attachments, or service rules require it. |
| Feedback control | The product needs short contextual input rather than a general message. |

Alternative channels are optional. Show only real, supported contact paths.

## Form Fields

Ask only for information needed at the first step. Possible fields include:

- Name when a personal response needs it.
- Reply address.
- Topic when it changes routing.
- Message or question.
- Order, account, or project reference when support cannot act without it.
- Consent when policy or law requires it.
- Attachment only when the workflow supports safe upload handling.

Do not enforce an arbitrary three-field or four-field template. A short general form and a regulated support form have different needs.

## Form Behavior

- Use visible labels and helpful autocomplete values.
- Explain format or length limits before submission when they matter.
- Validate near the field and provide a useful summary when several fields fail.
- Keep entered values after a recoverable submission error.
- Disable or guard repeated submission while the request is running.
- Show clear success, failure, and retry states.
- If the form is replaced after success, provide a way to send another message when that is a real need.
- Let the page scroll above a mobile keyboard. Avoid fixed viewport-height form traps.

Server validation, spam controls, storage, rate limits, and sensitive-data handling must follow the project security rules and [`waitsec-quality`](../../waitsec-quality/SKILL.md).

## Page Content

A contact page may need:

- A clear heading and accepted request types.
- Expected response time only when known.
- Privacy or consent information.
- A form or supported direct channel.
- Location or hours only when they affect access and are safe to publish.
- A recovery path when the form is unavailable.

Avoid unrelated marketing sections that delay the contact task.

## Anti-Patterns

### 1. Asking for Data Before It Is Needed

* **The Bad Habit:** Requiring company size, phone number, address, budget, role, and other details for every first message.
* **The Problem:** The form becomes long and collects information the recipient may not use.
* **Why It Fails:** People abandon the request or share more personal data than the task requires.
* **Clean Fix:** Map each field to a routing or response need. Remove optional collection that has no clear first-step use.
* **The Waitsec Way:** Ask for the minimum information needed to continue responsibly.

### 2. Silent Submission

* **The Bad Habit:** Leaving the form unchanged while it submits, then clearing or reloading it without a clear result.
* **The Problem:** People cannot tell whether the message was sent and may submit it several times.
* **Why It Fails:** Uncertainty creates duplicate requests and makes the channel feel unreliable.
* **Clean Fix:** Show an immediate submitting state, prevent accidental repeats, preserve data on failure, and provide a clear success or retry message.
* **The Waitsec Way:** Every submission gets visible feedback.

### 3. Fabricated Contact Details

* **The Bad Habit:** Filling a template with sample addresses, response promises, support hours, or inboxes that look real.
* **The Problem:** The page publishes false routes and expectations.
* **Why It Fails:** Messages fail, visitors lose time, and the organization appears unreliable.
* **Clean Fix:** Use approved project data. Leave unknown optional details out or request the facts when the page cannot work without them.
* **The Waitsec Way:** Contact information must be real before it is useful.

## Page Checklist

- [ ] Is the channel and accepted request type clear?
- [ ] Does every field support routing, response, consent, or another real need?
- [ ] Are labels, requirements, errors, and autocomplete behavior accessible?
- [ ] Are submitting, success, failure, retry, and repeated-submit states handled?
- [ ] Are entered values preserved after recoverable errors?
- [ ] Are response times, addresses, hours, and contact methods factual and approved?
- [ ] Does the form remain usable with a mobile keyboard?
- [ ] Are server validation, spam controls, storage, and sensitive data routed to quality rules?
