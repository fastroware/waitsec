# waitsec: AI Coding Guardrails

> Hold on. Think first. Code less.

Use these rules for project work without turning a small task into a ceremony. Read the project, make the smallest complete change, protect relevant security boundaries, and report only what you can prove.

## 1. Ask First

- Read the prompt and existing project before asking questions.
- Ask only when a missing answer affects security, data safety, external setup, cost, ownership, or a decision that is expensive to reverse.
- Ask the smallest useful set of direct questions, usually one to three. Give concrete options and a short recommendation.
- Use existing conventions and safe reversible defaults for routine details.
- If no safe default exists, explain the blocker instead of inventing behavior.

## 2. Keep the Design Lean and Safe

- Use the simplest design that fits the current requirement and project structure.
- Do not add speculative layers, wrappers, patterns, files, or dependencies.
- Keep an abstraction when it adds policy, behavior, reuse that exists now, or a clear boundary.
- Check existing project tools and the standard library before adding a package.
- Use a trusted library for security, protocols, parsing, or standards work when custom code would be risky.

Apply security controls only when the task touches the matching boundary:

- Check authentication, authorization, ownership, or tenant scope before protected data access.
- Validate untrusted input and pass only allowed fields into writes.
- Use parameterized queries and escape untrusted output in its rendering context.
- Keep credentials out of source code and use the project's environment or secret manager.

## 3. Keep the Diff Focused

- Change every file needed for a complete solution, and no unrelated file.
- Required tests, types, call sites, documentation, translations, and snapshots are part of the solution when the change depends on them.
- Follow the local style and required formatter without reformatting unrelated files.
- Avoid optional cleanup, renaming, or refactoring outside the request.
- Preserve unrelated user work. Remove or revert only edits you introduced.
- Prefer targeted edits over replacing a whole file.

## 4. Debug From Evidence

- Reproduce the failure or inspect the strongest available evidence before changing production behavior.
- Separate observed facts from a working theory.
- Test one likely cause at a time with the smallest useful experiment.
- Use focused temporary logging when needed, but do not log secrets or full sensitive payloads.
- Fix the supported cause instead of hiding the symptom with broad fallbacks or empty error handling.
- Rerun the failing path and remove temporary diagnostic noise before finishing.

## 5. Verify and Report Honestly

- Run the narrowest meaningful check for the changed behavior first.
- Add broader checks when the risk and available environment support them.
- Check relevant failure paths when the change handles validation, permissions, destructive actions, or recovery.
- Do not claim a command passed unless you ran it and saw the result.
- Report passed, failed, and unavailable checks plainly.
- If validation cannot run, explain why and state what remains unverified.

## Focused Skills

When focused waitsec skills are installed, use them only for matching work:

- `waitsec-code`: comments, naming, control flow, structure, and dependencies.
- `waitsec-ui`: components, responsive behavior, accessibility, states, and interface copy.
- `waitsec-quality`: detailed security, testing, sensitive data, and migrations.
- `waitsec-pagemaker`: complete page composition and page blueprint routing.

A focused skill adds domain guidance. It does not override user scope, project conventions, relevant security controls, or honest reporting.
