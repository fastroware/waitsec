---
name: anti-overengineering
description: Prevent bloated abstractions, unnecessary design patterns, and excessive files while keeping security airtight.
---

# Anti-Overengineering: Lean Code, Airtight Security

Do not turn a simple 10-line requirement into a 12-file enterprise architecture. Solve today's problem with the simplest working implementation.

**Core Principle:** *Lean code does not mean insecure code.* Cut out useless architectural theater, but never compromise on security, data integrity, or authorization.

---

## Anti-Patterns (The Tells)

### 1. Architecture Theater
- **Tell:** For a simple database query or form submission, the agent creates an Interface, a Repository class, a Data Transfer Object (DTO), an Event class, an Event Listener, and a Service Layer class across 6 different directories.
- **Why:** The AI is showing off patterns it learned from enterprise codebases, adding cognitive overhead and boilerplate with zero practical benefit.
- **Fix:** Write the logic directly in the existing controller or domain handler using standard framework idioms. Introduce layers only when concrete business complexity demands it.

### 2. Speculative Future-Proofing
- **Tell:** Writing code with plugin architectures, abstract factories, or strategy patterns for hypothetical requirements that may never exist ("in case we switch database engines later").
- **Why:** YAGNI (You Aren't Gonna Need It). Speculative architecture is technical debt written before the feature is even used.
- **Fix:** Build for the current requirement. Refactor when the second concrete use case arrives, not before.

### 3. Empty Wrapper Abstractions
- **Tell:** Creating helper functions or classes that merely pass arguments straight through to an underlying library method with no added logic:
  ```php
  class StringHelper {
      public static function toLower($str) {
          return strtolower($str); // Pointless wrapper
      }
  }
  ```
- **Why:** It adds an extra layer of indirection to read and maintain for zero added value.
- **Fix:** Call the native or framework method directly.

### 4. Dependency Addiction
- **Tell:** Pulling in a third-party npm package, composer package, or Python module to solve a trivial problem that can be handled in 3 lines of native code (e.g. date formatting or string padding).
- **Why:** Every third-party dependency introduces supply-chain security risks, version conflicts, and maintenance burden.
- **Fix:** Use native language and framework utilities first.

---

## CRITICAL: Security is Non-Negotiable (Lean ≠ Insecure)

Never cut security corners under the false excuse of "keeping it simple". Simplicity applies to architectural layers, never to defense mechanisms.

The following security practices are **mandatory in all generated code**:

### 1. Authorization & Authentication
- **Never bypass access checks.** Always verify that the current user has permission to view, edit, or delete the target resource (e.g. Laravel Policies/Gates, role checks, session validations).
- **Insecure direct object references (IDOR) are strictly forbidden.** Never fetch a record solely by ID from a request without verifying ownership or tenant isolation:
  ```php
  // BAD: Anyone can change user ID in URL to steal data
  $order = Order::find($id);

  // GOOD: Scoped to authenticated user
  $order = auth()->user()->orders()->findOrFail($id);
  ```

### 2. Strict Input Validation
- Validating user input is **not** overengineering; it is mandatory security.
- Always validate types, string lengths, formats, and allowed enum values before processing.
- In Laravel, use Form Request classes or `$request->validate()`. In Node, use Zod or schema validators.

### 3. Mass Assignment Protection
- Never pass raw, unfiltered request payloads directly to database creation or update methods:
  ```php
  // FORBIDDEN: Allows attackers to inject isAdmin=1 or change prices
  User::create($request->all());

  // REQUIRED: Only validated, safe fields
  User::create($request->validated());
  ```

### 4. SQL Injection Prevention
- Always use parameterized queries or ORM query builders.
- Never concatenate raw user input into SQL queries or raw where clauses:
  ```php
  // FORBIDDEN:
  DB::statement("SELECT * FROM users WHERE email = '" . $email . "'");

  // REQUIRED:
  DB::select("SELECT * FROM users WHERE email = ?", [$email]);
  // or ORM:
  User::where('email', $email)->first();
  ```

### 5. XSS & Output Sanitization
- Never bypass output escaping unless explicitly rendering sanitized rich text.
- Avoid raw unescaped directives (`{!! $var !!}` in Blade, `dangerouslySetInnerHTML` in React, `v-html` in Vue) unless the input has been sanitized through a dedicated HTML purifier.

### 6. Secret & Credential Safety
- Never hardcode API keys, passwords, database credentials, or tokens in source code.
- Always load sensitive values from environment variables (`.env`).

---

## Comparison: Bad vs Good

### Task: "Add an endpoint to cancel an order"

❌ **Bad (Overengineered):**
- `CancelOrderCommand.php`
- `CancelOrderCommandHandler.php`
- `OrderRepositoryInterface.php`
- `EloquentOrderRepository.php`
- `OrderCancelledEvent.php`
- `OrderCancellationDTO.php`
- Total: 6 files, 150 lines of boilerplate, yet forgot to check if the order belongs to the logged-in user!

✅ **Good (Lean & Secure):**
- `OrderController.php` (checks `$this->authorize('cancel', $order)`, updates status, dispatches existing notification).
- Total: 1 file, 15 lines of clear, secure, readable code.

---

## Checklist

Before declaring any feature complete:
- [ ] Did I avoid adding unnecessary interfaces, repositories, or DTOs?
- [ ] Did I avoid creating new files when an existing file could house the logic naturally?
- [ ] Is authentication and authorization strictly enforced on every protected action?
- [ ] Is all incoming input validated and guarded against mass assignment?
- [ ] Are all database queries protected against SQL injection?
- [ ] Are secrets kept in `.env` and out of source code?
