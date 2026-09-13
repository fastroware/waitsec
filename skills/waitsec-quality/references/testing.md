# Testing Guide: Prove the Right Behavior

Use this guide when creating or reviewing automated tests. Choose the smallest test level that proves the behavior, and use broader tests when the behavior depends on real integration.

## 1. Using the Wrong Test Level

* **The Bad Habit:** Use a slow end-to-end test for a pure function, or use an isolated unit test for behavior that depends on routing, a database constraint, or framework wiring.
* **The Problem:** The test is either slower and more fragile than needed or too isolated to catch the real failure.
* **Why It Fails:** Different test levels answer different questions. A test cannot prove integration behavior when the integration is absent.
* **Clean Fix:** Use unit tests for isolated logic, integration or component tests for connected modules and storage, contract tests for service boundaries, and end-to-end tests for a small set of important user flows.
* **The Waitsec Way:** Use the fastest test that still exercises the behavior you need to trust.

**Bad example:** Test a database unique constraint by mocking the repository to throw a made-up duplicate error.

**Good example:** Use an integration test against the project's test database and attempt the duplicate write.

## 2. Mocking Away the Behavior Under Test

* **The Bad Habit:** Mock the function, query, or class that the test claims to verify.
* **The Problem:** The test confirms the configured mock result instead of the real behavior.
* **Why It Fails:** A bug can stay inside the mocked code while the suite remains green.
* **Clean Fix:** Keep the subject under test real. Replace a collaborator only when the chosen test level treats it as a boundary, such as a payment provider, clock, random source, email service, or remote API.
* **The Waitsec Way:** Mock the edge, not the promise made by the test name.

**Bad example:**
```js
vi.spyOn(invoice, "calculateTotal").mockReturnValue(120);
expect(invoice.calculateTotal(items)).toBe(120);
```

**Good example:**
```js
const total = invoice.calculateTotal([
  { price: 50, quantity: 2 },
  { price: 20, quantity: 1 },
]);
expect(total).toBe(120);
```

## 3. Assertions That Do Not Prove an Outcome

* **The Bad Habit:** Assert `true`, check only that a value is not null, or call an endpoint without checking its result.
* **The Problem:** The test can pass even when the feature returns the wrong value or changes no state.
* **Why It Fails:** A green result gives confidence without evidence about the behavior users depend on.
* **Clean Fix:** Assert the visible result and important state change. Check values, status codes, rows, events, or side effects that define success and failure.
* **The Waitsec Way:** A test should fail when the promised behavior breaks.

**Bad example:**
```js
expect(response).not.toBeNull();
```

**Good example:**
```js
expect(response.status).toBe(403);
expect(await orders.find(orderId)).toMatchObject({ status: "pending" });
```

## 4. Fixing a Bug Without Repeatable Evidence

* **The Bad Habit:** Change code for a reported bug without first capturing the failure or keeping a check that can catch it again.
* **The Problem:** It is hard to prove the fix matches the report, and the same bug can return later.
* **Why It Fails:** Without repeatable evidence, a passing suite may never exercise the failing condition.
* **Clean Fix:** Add a failing regression test first when practical. If the issue is urgent, intermittent, environment-specific, or lacks a test harness, capture the best available reproduction evidence, verify the closest repeatable behavior, and explain the remaining limit.
* **The Waitsec Way:** Keep proof with the fix when you can. Be honest about proof you cannot automate.

**Bad example:** Change date parsing after a timezone report, then run only a formatter.

**Good example:** Add a test using the reported timezone and timestamp, see it fail, apply the fix, and see the same test pass. If the failure cannot be reproduced locally, record the production evidence and test the nearest known boundary.

## Testing Pre-Flight Checklist

Before finalizing test work:
- [ ] Does the chosen test level include the behavior the test claims to prove?
- [ ] Is the subject under test real, with mocks used only at suitable boundaries?
- [ ] Do assertions check concrete outcomes and useful failure cases?
- [ ] For a bug fix, did I keep repeatable regression evidence when practical and explain any limit?
