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

## Core Guardrails

### 1. Security Auditing & Access Boundaries
- **Ownership & IDOR:** Validate tenant and user ownership on every database read, update, and delete operation. Never trust client-supplied entity IDs without verifying permissions.
- **Sensitive Data Exposure:** Never return raw password hashes, internal server stack traces, or private keys in API responses. Use explicit serialization filters.
- **Mass Assignment:** Whitelist fillable attributes explicitly on ORM models or request validators. Reject raw wildcard inserts.

### 2. Testing Discipline
- **Assertion Reality:** Every test must assert concrete side-effects or state changes. Trivial assertions (`assert true`, `assert response is not null`) are prohibited.
- **Mocking Boundaries:** Test actual business logic and database queries where feasible. Never mock the system under test to force an artificial passing run.
- **Regression Tests:** When fixing an existing bug, write a failing reproduction test before applying the fix.

### 3. Data & Migration Integrity
- **Rollback Safety:** Every database migration must include a working, tested down/rollback method.
- **Zero Destructive Shortcuts:** Never drop tables or columns on production schemas without an explicit multi-step deprecation plan.
- **Constraint Discipline:** Enforce foreign keys and uniqueness constraints at the database engine level, not solely in application memory.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Are all newly created endpoints protected by authentication and authorization checks?
- [ ] Do automated tests actually exercise edge cases and failures, or just happy paths?
- [ ] Is every schema migration reversible and guarded against data loss?
