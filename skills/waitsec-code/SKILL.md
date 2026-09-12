---
name: waitsec-code
description: "Clean code and structural simplicity guardrails. Eliminates comment pollution, enforces single responsibility, and stops unnecessary dependencies."
---

# waitsec-code: Clean Code & Dependency Hygiene

You operate under the **waitsec-code** engineering discipline. This skill ensures source code remains readable, maintainable, and free from AI-generated boilerplate and comment pollution.

---

## Operating Mode & Role
When generating, refactoring, or reviewing source code, maintain minimal cognitive load. Write self-documenting logic, respect idiomatic language conventions, and resist adding third-party packages for routine tasks.

## Activation Triggers
Activate this skill whenever:
- Creating new functions, methods, classes, or modules
- Adding or refactoring comments, docblocks, and annotations
- Installing or updating packages via `npm`, `composer`, `pip`, `cargo`, or similar tools
- Refactoring complex conditional branches or nested logic

---

## Part 1: Comments and Noise

### 1. Narration Comments

* **The Bad Habit:** Adding comments that narrate the next line of code (`// Loop through users`, `// Return response`).
* **The Problem:** The code says the same thing twice: once in the comment, once in the line below.
* **Why It Fails:** Comments rot. When the logic changes, the narration stays stale and misleads the next reader, and it pads every diff with noise.
* **Clean Fix:** Delete the narration. If a block genuinely needs explaining, extract it into a well-named function or variable:
  ```js
  // Bad: the comment repeats the code
  // Calculate total with tax
  const t = price + price * 0.1;

  // Good: the name explains it
  const totalWithTax = price + price * taxRate;
  ```
* **The Waitsec Way:** Code should read like plain English. Explain why when it is not obvious, never what the line already says.

### 2. Dead Commented-Out Code

* **The Bad Habit:** Leaving old code commented out "just in case", or commenting a block out instead of deleting it.
* **The Problem:** The file carries ghost code that no compiler or test touches.
* **Why It Fails:** Readers cannot tell whether the block is a plan, a workaround, or garbage. It hides the real change and grows the diff.
* **Clean Fix:** Delete it. Version control keeps the history, and the file stays honest.
* **The Waitsec Way:** The current file should describe the current system only. The past belongs to git.

---

## Part 2: Structure and Size

### 3. Functions That Do Too Much

* **The Bad Habit:** Writing one long function that validates input, queries the database, maps a response, and sends an email.
* **The Problem:** The function grows past 30 to 40 lines and now has several reasons to change.
* **Why It Fails:** Tests need to set up all of those jobs at once, and a fix for one job risks breaking the others.
* **Clean Fix:** Split by responsibility: validate in one place, query in another, respond in another. Keep each function focused on one thing.
* **The Waitsec Way:** One function, one job. Small pieces are easier to test, reuse, and trust.

### 4. Deeply Nested Conditionals

* **The Bad Habit:** Nesting `if/else` blocks five levels deep until the happy path sits in the middle.
* **The Problem:** The reader must hold every condition in their head at the same time.
* **Why It Fails:** Deep nesting hides edge cases and makes the exit conditions hard to see. Bugs love that.
* **Clean Fix:** Use guard clauses and early returns to handle invalid cases first, then leave the main path flat:
  ```js
  // Bad: nested
  if (user) {
    if (user.active) {
      if (user.role === 'admin') {
        return doWork(user);
      }
    }
  }
  return null;

  // Good: flat
  if (!user) return null;
  if (!user.active) return null;
  if (user.role !== 'admin') return null;
  return doWork(user);
  ```
* **The Waitsec Way:** Handle what is wrong up front. Keep the main path at the top level.

---

## Part 3: Naming

### 5. Vague Names

* **The Bad Habit:** Naming things `data`, `info`, `temp`, `handleStuff`, or `process2`.
* **The Problem:** The name tells the reader nothing about what the value holds or does.
* **Why It Fails:** Every reader has to trace the value back to its source to understand it, which slows the whole team.
* **Clean Fix:** Use domain names that reveal intent (`activeOrders`, `invoiceTotal`, `retryCount`). Rename when the purpose becomes clear.
* **The Waitsec Way:** Names are documentation. A precise name removes the need for a comment.

---

## Part 4: Dependencies

### 6. A Dependency for a Three-Line Problem

* **The Bad Habit:** Installing a package to format a date, pad a string, or check an email.
* **The Problem:** The manifest grows for work the standard library already does.
* **Why It Fails:** Each dependency adds supply-chain risk, version conflicts, and updates you must track for the life of the project.
* **Clean Fix:** Use built-in utilities first. Add a package only when it solves something genuinely complex:
  ```js
  // Instead of a date library
  const formatted = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date());
  ```
* **The Waitsec Way:** Native first. A dependency is a long-term commitment, not a shortcut.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Have all redundant narration comments been stripped?
- [ ] Are functions short, readable, and flattened with guard clauses?
- [ ] Can the solution work with standard library utilities without adding third-party dependencies?
