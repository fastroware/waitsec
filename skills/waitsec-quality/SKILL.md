---
name: waitsec-quality
description: "Use for access-control and sensitive-data changes, automated test design, or database schema and migration work. Load only the guide that matches the task, and keep the core waitsec rules in force."
---

# waitsec-quality: Security, Tests, and Data Safety

This skill adds focused quality checks to [`waitsec`](../waitsec/SKILL.md). Core `waitsec` still owns scope, ask-first decisions, debugging, small diffs, and verification.

## Operating Mode and Role

Protect the access boundary, make tests prove real behavior, and plan stored-data changes around real deployment risks. Apply only the part that matches the task.

## Use This Skill When

Load this skill when the task involves:
- Authentication, authorization, tenant boundaries, roles, or protected resources.
- Sensitive data in requests, responses, logs, exports, or third-party calls.
- Unit, integration, component, contract, or end-to-end tests.
- A bug fix that needs repeatable regression evidence.
- Database migrations, persisted model changes, schema definitions, or data constraints.

## Do Not Use This Skill When

Do not load this skill:
- For ordinary comments, naming, control flow, or dependency cleanup. Use `waitsec-code` when those are the main concern.
- For a public endpoint only because it has an ID in the URL.
- Do not load the security or migration guides for a test-only change. Use only the testing guide when security and stored data are not involved.
- For an ORM refactor that does not change persistence, constraints, or data behavior, except for the relevant code checks.
- To turn a focused task into a broad security, testing, or migration audit that the user did not request.

## Load Only the Relevant Guide

Read only the guide needed for the current task:

| Task | Guide |
| :--- | :--- |
| Authorization, tenant scope, sensitive data, or writable fields | [`references/security.md`](./references/security.md) |
| Test level, assertions, mocks, or regression evidence | [`references/testing.md`](./references/testing.md) |
| Schema rollout, recovery, destructive changes, or constraints | [`references/migrations.md`](./references/migrations.md) |

Load more than one guide only when the task truly crosses those boundaries. For example, an authorization migration with integration tests may need all three. A unit test for a formatter needs only the testing guide.

## Boundary Rules

- Use the authorization context that fits the resource. Public, owner, tenant, and role-based access are different cases.
- Do not claim a test proves behavior that it does not exercise.
- Follow the project's database and deployment policy when it exists.
- Ask before an irreversible data or security choice when the required policy or business rule is missing.
- Keep changes inside the user's request unless a directly related safety fix is required.

## Pre-Flight Checklist

Before finalizing work:
- [ ] Did I load only the guide or guides relevant to this task?
- [ ] Did I keep the change inside the requested security, testing, or data boundary?
- [ ] Did I clarify any irreversible choice that could not be inferred safely?
- [ ] Did I run and report the checks that match the changed behavior?
