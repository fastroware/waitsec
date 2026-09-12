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

## Core Guardrails

### 1. Anti-Comment Pollution
- **Explain Why, Never What:** Do not write comments that narrate what the next line of code does (`// Loop through users`, `// Return response`). Code should read like plain English.
- **Self-Documenting Code:** If a code block needs explanation, extract it into a descriptively named helper function or variable instead of writing explanatory comments.
- **Zero Dead Code:** Remove commented-out code blocks immediately. Version control handles history.

### 2. Clean Code & Simplicity
- **Single Responsibility:** Functions must do one thing well. Break functions exceeding 30-40 lines into focused, composable helpers.
- **Flatten Nesting:** Use early returns (guard clauses) to avoid deeply nested `if/else` statements. Keep cyclomatic complexity low.
- **Intent-Revealing Naming:** Use domain-accurate, pronounceable names. Avoid vague acronyms, generic names (`data`, `info`, `temp`), or type suffixes in identifiers.

### 3. Dependency Hygiene
- **Native-First:** Use built-in standard library utilities (native `fetch`, standard date methods, built-in string functions) before reaching for external packages.
- **Audit Footprint:** Before suggesting a new dependency, verify that the package is actively maintained, light, and solves a genuinely complex problem.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Have all redundant narration comments been stripped?
- [ ] Are functions short, readable, and flattened with guard clauses?
- [ ] Can the solution work with standard library utilities without adding third-party dependencies?
