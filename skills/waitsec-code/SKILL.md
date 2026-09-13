---
name: waitsec-code
description: "Use when a task is mainly about code readability, comments, naming, control flow, or deciding whether to add a dependency. Do not use it for unrelated cleanup or as a reason to rewrite working code."
---

# waitsec-code: Clear Code Without Extra Weight

This skill adds code readability and dependency checks to [`waitsec`](../waitsec/SKILL.md). Core `waitsec` still owns scope, security, debugging, and verification.

## Operating Mode and Role

Make the code changed for the task easier to read and maintain. Prefer clear names, focused logic, useful comments, and existing tools over extra layers or packages.

## Use This Skill When

Load this skill when:
- The user asks for a readability, cleanup, or maintainability review.
- The task changes comments, docblocks, names, functions, or control flow.
- A changed function mixes separate jobs or has hard-to-follow branches.
- The task may add, replace, or remove a dependency.

## Do Not Use This Skill When

Do not load this skill:
- Only because a task happens to modify source code.
- To clean working code outside the user's request.
- For generated, vendored, or minified files.
- To remove required API docs, type annotations, framework metadata, security notes, or compatibility notes.
- When test behavior, access control, or migrations are the main concern. Use `waitsec-quality` for those tasks.

## Scope Rule

Apply these checks only to code created or directly changed for the task. Do not turn a focused change into a file-wide cleanup. Report an unrelated issue only when it creates an immediate correctness or security risk.

## Part 1: Comments

### 1. Comments That Repeat the Code

* **The Bad Habit:** Add a comment that narrates the next line, such as `// Return the user` above `return user`.
* **The Problem:** The same fact appears twice and adds noise to the file.
* **Why It Fails:** The comment can become stale when the code changes, which makes reviews and debugging harder.
* **Clean Fix:** Remove narration. Use a clear name, or explain the reason when the reason is not obvious.
* **The Waitsec Way:** Let code explain what it does. Use comments to explain why.

**Bad example:**
```js
// Calculate total with tax
const t = price + price * 0.1;
```

**Good example:**
```js
const totalWithTax = price + price * taxRate;
```

### 2. Removing Comments That Carry Useful Context

* **The Bad Habit:** Delete every comment because comments are treated as clutter.
* **The Problem:** The code loses notes about business reasons, security limits, public contracts, or unusual compatibility work.
* **Why It Fails:** A later change may remove a needed safeguard because the reason for it is no longer visible.
* **Clean Fix:** Keep comments that explain a non-obvious reason, constraint, workaround, or public API. Update them when the related behavior changes.
* **The Waitsec Way:** Remove noise, not knowledge.

**Bad example:**
```js
setCookie(sessionId, { sameSite: "lax" });
```

**Good example:**
```js
// Lax allows the payment provider redirect while blocking most cross-site sends.
setCookie(sessionId, { sameSite: "lax" });
```

### 3. Dead Commented-Out Code

* **The Bad Habit:** Leave old code commented out in case it is needed later.
* **The Problem:** The file contains code that no compiler or test checks.
* **Why It Fails:** Readers cannot tell whether the block is a plan, a workaround, or old debris.
* **Clean Fix:** Delete dead code when it is inside the requested change. Use version control if the old implementation is needed later.
* **The Waitsec Way:** The current file should describe the current system.

**Bad example:**
```js
// const result = legacyCalculate(items);
const result = calculate(items);
```

**Good example:**
```js
const result = calculate(items);
```

## Part 2: Structure and Control Flow

### 4. Functions With Mixed Responsibilities

* **The Bad Habit:** Put validation, storage, response mapping, and notifications into one function because keeping everything together feels faster.
* **The Problem:** One function has several reasons to change and several failure paths to test.
* **Why It Fails:** A small change to one job can break another, and tests need too much setup.
* **Clean Fix:** Split only the responsibilities that are meaningfully separate. Extract a helper when its name makes the flow clearer or when it needs focused testing. Do not split code to meet a line count.
* **The Waitsec Way:** Keep behavior together when it belongs together. Separate jobs that change for different reasons.

**Bad example:**
```js
async function placeOrder(input) {
  validateOrder(input);
  const order = await db.orders.insert(input);
  await mailer.sendReceipt(order);
  return toOrderResponse(order);
}
```

**Good example:**
```js
async function placeOrder(input) {
  validateOrder(input);
  const order = await saveOrder(input);
  await sendOrderReceipt(order);
  return toOrderResponse(order);
}
```

Use the good form only when `saveOrder` and `sendOrderReceipt` are real boundaries. Keep direct calls when helpers would only rename one library call.

### 5. Control Flow Chosen by Habit

* **The Bad Habit:** Keep deeply nested branches, or replace every branch with an early return without checking which form is clearer.
* **The Problem:** The main path becomes hard to follow, or related cleanup and state changes become scattered across many exits.
* **Why It Fails:** Readers miss edge cases when control flow hides the order of decisions.
* **Clean Fix:** Use guard clauses for simple invalid states when they flatten the main path. Keep structured branches when they better express a transaction, cleanup step, or set of related outcomes.
* **The Waitsec Way:** Choose the shape that makes the behavior easiest to follow. Guard clauses are a tool, not a rule.

**Bad example:**
```js
if (user) {
  if (user.active) {
    if (user.role === "admin") return runAdminTask(user);
  }
}
return null;
```

**Good example:**
```js
if (!user || !user.active || user.role !== "admin") return null;
return runAdminTask(user);
```

## Part 3: Naming

### 6. Names That Hide Intent

* **The Bad Habit:** Use names such as `data`, `info`, `temp`, `handleStuff`, or `process2`.
* **The Problem:** The name does not say what the value contains or what the function changes.
* **Why It Fails:** Every reader must trace the value through the file before understanding it.
* **Clean Fix:** Use a domain name that describes the current purpose. Rename only symbols inside the requested change unless a wider rename is required for correctness.
* **The Waitsec Way:** A useful name removes guesswork without adding a comment.

**Bad example:**
```js
const data = orders.filter(order => order.status === "pending");
```

**Good example:**
```js
const pendingOrders = orders.filter(order => order.status === "pending");
```

## Part 4: Dependencies

### 7. Choosing Native Code or a Package by Reflex

* **The Bad Habit:** Add a package for a small standard-library task, or remove a trusted security or protocol library just to avoid dependencies.
* **The Problem:** The project either gains needless maintenance work or receives a fragile custom implementation of a hard problem.
* **Why It Fails:** Extra packages add supply-chain and update costs, while custom cryptography, sanitization, authentication, parsing, or protocol code can create serious defects.
* **Clean Fix:** Check the project and standard library first for routine work. Keep or choose a well-maintained library when the task involves security, complex standards, or protocol correctness. Review compatibility, maintenance, and transitive cost before adding it.
* **The Waitsec Way:** Avoid needless weight, but never trade proven safety for a homemade shortcut.

**Bad example:**
```js
import pad from "string-pad-helper";
const day = pad(String(date.getDate()), 2, "0");
```

**Good example:**
```js
const day = String(date.getDate()).padStart(2, "0");
```

**Bad security example:**
```js
const safeHtml = input.replace(/<script.*?>.*?<\/script>/gi, "");
```

**Good security example:**
```js
const safeHtml = trustedSanitizer.sanitize(input, htmlPolicy);
```

## Pre-Flight Checklist

Before finalizing work:
- [ ] Did I stay inside the code created or directly changed for this task?
- [ ] Do comments preserve useful reasons and remove only repeated narration or dead code?
- [ ] Are responsibilities, names, and control flow clear without tiny wrappers or line-count rules?
- [ ] If I considered a package, did I check existing and built-in options without writing a risky security or protocol replacement?
- [ ] Did I apply only the checks relevant to this task?
