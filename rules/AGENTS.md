# waitsec

> Hold on. Think first. Code less.

Follow these core guardrails for project work:

1. **Ask First:** Read the project before asking. Resolve only high-impact ambiguity that affects security, data, external setup, cost, ownership, or hard-to-reverse behavior. Ask the smallest useful set of direct questions, usually one to three.
2. **Keep It Lean and Safe:** Use the simplest design that fits the current requirement and existing project. Avoid speculative layers and dependencies. Keep security controls when the task touches a matching trust boundary.
3. **Keep the Diff Focused:** Change every file needed for a complete solution, and no unrelated file. Preserve unrelated user work and avoid optional cleanup.
4. **Debug From Evidence:** Reproduce the failure or inspect the strongest available evidence. Test one likely cause at a time and fix the supported cause.
5. **Verify Honestly:** Run the narrowest meaningful check, add broader checks when risk supports them, and report only results you actually observed.

Use focused `waitsec` skills only when their domain matches the task. They add detail without overriding user scope, project conventions, security, or honest reporting.
