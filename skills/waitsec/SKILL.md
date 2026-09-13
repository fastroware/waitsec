---
name: waitsec
description: "Core workflow guardrails for AI coding tasks. Use it to resolve important ambiguity, choose a simple safe design, keep changes focused, debug from evidence, and report verified results."
---

# waitsec: Core Coding Guardrails

Use `waitsec` to work with care without turning a small task into a ceremony. Read the project, make the smallest complete change, protect relevant security boundaries, and report only what you can prove.

## Use When

Use this skill when you are:

- Planning, writing, changing, reviewing, or debugging code in a project.
- Choosing files, dependencies, data flows, or implementation structure.
- Fixing a reported failure or checking whether a change works.
- Working with a more focused `waitsec` skill.

## Do Not Use When

Do not force the full workflow onto:

- A general explanation that does not involve project work.
- A task with no ambiguity, architecture choice, failure, or executable result.
- A focused domain task already covered by another skill without first checking whether a core guardrail is relevant.

Do not load every reference by default. Open only the reference that matches the current decision.

## Guardrail Routing

| Situation | Core rule | Read when needed |
| :--- | :--- | :--- |
| A missing choice could change permissions, data safety, external services, or a hard-to-reverse decision | Ask the smallest useful set of direct questions, usually one to three. Use project conventions for low-impact details. | [`references/ask-first.md`](./references/ask-first.md) |
| You are choosing layers, files, wrappers, patterns, or dependencies | Use the simplest design that fits the current requirement and existing project. | [`references/anti-overengineering.md`](./references/anti-overengineering.md) |
| You are editing an existing project | Change every file needed for a complete solution, and no unrelated file. | [`references/small-diff.md`](./references/small-diff.md) |
| A test, command, crash, or behavior is failing | Inspect evidence, form one likely cause, and make one focused fix. | [`references/debug-first.md`](./references/debug-first.md) |
| You are about to report completion | Run the narrowest meaningful check, then broader checks when the risk supports them. | [`references/verify-first.md`](./references/verify-first.md) |

## Security Baseline

Apply these controls when the task touches a matching trust boundary:

- Check authentication, authorization, ownership, or tenant scope before protected data access.
- Validate untrusted input and pass only allowed fields into writes.
- Use parameterized queries and escape untrusted output in its rendering context.
- Keep credentials out of source code and use the project's environment or secret manager.

These controls are contextual. Do not add auth, validation layers, or security packages to code that has no matching boundary. For a detailed security, testing, or migration audit, use `waitsec-quality`.

## Relationship With Other Skills

Core `waitsec` controls how the agent works. Focused skills add rules for a specific kind of work.

| Skill | Owns |
| :--- | :--- |
| `waitsec-code` | Code readability, comments, function structure, naming, and dependency hygiene. |
| `waitsec-ui` | UI components, visual restraint, responsive behavior, accessibility, and user-facing copy. |
| `waitsec-quality` | Detailed security review, test quality, sensitive data, and migration safety. |
| `waitsec-pagemaker` | Complete new page generation and page blueprint routing. It should not expand a small component or metadata edit into a full page rebuild. |

Focused skills follow the project's existing conventions and do not override relevant security controls, user scope, or honest reporting.

## Proportional Checklist

Before finishing, check only what applies:

- [ ] Did I resolve high-impact ambiguity without asking about routine details?
- [ ] Did I choose a simple design that follows the existing project and keeps relevant security controls?
- [ ] Did I change all required files while leaving unrelated user work untouched?
- [ ] If this was a bug, did the evidence support the fix?
- [ ] Did I run the most useful available checks and report any limits plainly?
