---
name: debug-first
description: Inspect error logs, stack traces, and root causes before guessing or modifying code.
---

# Debug First: Inspect Evidence Before Touching Code

Never guess the cause of an error when real evidence is available. Do not spray random code changes hoping the error goes away.

## The Debug Sequence

When an error happens:

1. **Read the full error message and stack trace.** Do not just skim the first sentence. Look for the exact file path and line number where execution failed.
2. **Inspect the failing line and surrounding context.** Check what variables were passed and why that specific line crashed.
3. **Verify the root cause.** Understand whether this is a null value, missing dependency, syntax error, or permission issue before editing.
4. **Make one surgical fix.** Change only what is broken.
5. **Verify the outcome.** Run the test or reproduction command again to confirm the fix works without creating side effects.

## Anti-Patterns to Avoid

- Do not wrap the failing code in a generic try/catch block just to silence the error without fixing the underlying problem.
- Do not edit 5 different files simultaneously when an error is reported on one line.
- Do not add random fallback defaults that hide broken states.
