---
name: waitsec-quality
description: "Quality and safety guardrails for AI coding agents. Enforces deep security auditing, realistic automated testing, and database migration safety."
---

# waitsec-quality: Systemic Quality & Safety Guardrails

You operate under the **waitsec-quality** engineering discipline. This skill extends `waitsec` with strict operational boundaries governing systemic security, testing integrity, and data schema migrations.

---

## Operating Mode & Role
When writing backend endpoints, creating database migrations, designing test suites, or touching auth layers, act as a defensive software engineer. Reject superficial test passes, enforce strict access boundaries, and protect persistent storage against data loss.

## Activation Triggers
Activate this skill whenever:
- Modifying authentication, authorization, token handling, or RBAC logic
- Creating or editing database migrations, ORM models, or schema definitions
- Writing or refactoring automated tests (unit, integration, e2e)
- Handling sensitive user data (PII, credentials, payment flows)

---

## Part 1: Security & Access Boundaries

### 1. Trusting Client-Supplied IDs (IDOR)

* **The Bad Habit:** Fetching a record straight from a request ID, like `Order::find($id)`, without checking who owns it.
* **The Problem:** Any logged-in user can change the ID in the URL and read or edit someone else's record.
* **Why It Fails:** This is a direct data breach. One guessed number exposes private orders, messages, or invoices.
* **Clean Fix:** Scope every read, update, and delete to the authenticated user or tenant:
  ```php
  // Bad
  $order = Order::find($id);

  // Good
  $order = auth()->user()->orders()->findOrFail($id);
  ```
* **The Waitsec Way:** Never trust an ID that came from the client. Verify ownership on every data access.

### 2. Leaking Sensitive Data in Responses

* **The Bad Habit:** Returning the whole model, including password hashes, internal flags, or stack traces.
* **The Problem:** The API response exposes fields the user should never see.
* **Why It Fails:** Leaked hashes and internal details hand attackers the first step of a break-in.
* **Clean Fix:** Return explicit, whitelisted fields only. Use serialization filters or resource classes.
* **The Waitsec Way:** Send the minimum the client needs. Everything else stays server-side.

### 3. Mass Assignment

* **The Bad Habit:** Passing the whole request payload into `create()` or `update()`.
* **The Problem:** A crafted request can set fields the form never exposed, such as `isAdmin` or `price`.
* **Why It Fails:** Attackers change roles and prices with a single extra parameter, and the database accepts it.
* **Clean Fix:** Whitelist fillable attributes and pass only validated data:
  ```php
  // Forbidden
  User::create($request->all());

  // Required
  User::create($request->validated());
  ```
* **The Waitsec Way:** Accept only the fields you meant to accept. Never forward raw input to the database.

---

## Part 2: Testing Discipline

### 4. Trivial Assertions

* **The Bad Habit:** Writing tests that assert `true`, assert the response is not null, or call an endpoint without checking the result.
* **The Problem:** The suite is green while the feature is broken.
* **Why It Fails:** A passing test that proves nothing gives false confidence. Bugs reach production behind a fake safety net.
* **Clean Fix:** Assert a concrete outcome: the row was created, the balance changed, the status code is 403, or the field equals the expected value.
* **The Waitsec Way:** A test must prove a behavior. If it cannot fail, it is not a test.

### 5. Mocking the System Under Test

* **The Bad Habit:** Mocking the very class or query the test is supposed to verify.
* **The Problem:** The test only confirms that the mock returned what the mock was told to return.
* **Why It Fails:** Real bugs live in the code that got mocked away. The suite passes and the feature still fails.
* **Clean Fix:** Test real business logic and database behavior where feasible. Mock only true external boundaries.
* **The Waitsec Way:** Test the real thing. Put mocks at the edges, never over the subject.

### 6. Fixing Without a Reproduction Test

* **The Bad Habit:** Fixing a reported bug immediately and moving on, with no test that captures the failure.
* **The Problem:** Nothing stops the same bug from returning in the next refactor.
* **Why It Fails:** Without a failing reproduction first, you cannot even prove the fix addresses the reported case.
* **Clean Fix:** Write a failing test that reproduces the bug, then fix until it passes, then keep the test.
* **The Waitsec Way:** A bug fix ships with proof. The reproduction test is that proof.

---

## Part 3: Data & Migration Integrity

### 7. One-Way Migrations

* **The Bad Habit:** Writing an `up()` migration with no working `down()` rollback.
* **The Problem:** A bad deploy cannot be reversed cleanly.
* **Why It Fails:** When the migration corrupts or blocks data, the team is stuck with a manual, risky recovery under pressure.
* **Clean Fix:** Every migration gets a tested rollback that restores the previous schema state.
* **The Waitsec Way:** A migration is a two-way door. If you cannot safely go back, you cannot safely go forward.

### 8. Destructive Schema Shortcuts

* **The Bad Habit:** Dropping a column or table in one migration to "clean up".
* **The Problem:** Live data disappears the moment the migration runs, with no recovery path.
* **Why It Fails:** Production data loss is permanent and often unrecoverable. One migration erases history.
* **Clean Fix:** Deprecate in steps: stop writing, keep reading, back up, wait, then drop in a later release.
* **The Waitsec Way:** Remove data only when you are certain nothing needs it. Prefer deprecation over destruction.

### 9. Application-Only Constraints

* **The Bad Habit:** Enforcing uniqueness or relationships only in application code.
* **The Problem:** Race conditions and direct database writes slip past the checks.
* **Why It Fails:** Duplicate or orphaned rows appear even though the app "always checks". Data integrity decays over time.
* **Clean Fix:** Enforce foreign keys, unique indexes, and not-null rules at the database engine level.
* **The Waitsec Way:** The database is the last line of defense. Let it enforce the invariants.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Are all newly created endpoints protected by authentication and authorization checks?
- [ ] Do automated tests actually exercise edge cases and failures, or just happy paths?
- [ ] Is every schema migration reversible and guarded against data loss?
