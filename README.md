# waitsec

<p align="center">
  <a href="https://skills.sh/fastroware/waitsec"><img src="https://skills.sh/b/fastroware/waitsec" alt="skills.sh"></a>
  <a href="https://www.npmjs.com/package/waitsec"><img src="https://img.shields.io/npm/v/waitsec?color=crimson" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f" alt="License: MIT"></a>
</p>

> **Hold on. Think first. Code less.**

`waitsec` gives your AI coding agent practical guardrails. It prevents AI from writing hundreds of unneeded lines, inventing imaginary requirements, or over-complicating simple tasks.

---

## Why waitsec?

Most AI coding assistants do not fail because they lack knowledge. They fail because they move too fast and assume too much:

1. **They code before asking.** You ask for a photo upload feature, and the AI starts writing database migrations, thumbnail generators, and cloud bucket scripts before even asking where files should be stored.
2. **They over-engineer.** You ask for a simple login check, and the AI creates twelve new files with DTOs, factories, and repository interfaces.
3. **They touch too many files.** You ask to fix button alignment, and the AI reformats your router, updates project dependencies, and rewrites global styles.
4. **They guess when errors happen.** A test fails on one line, and the AI changes five unrelated files hoping something sticks.

`waitsec` acts as a brake: pause, verify, keep the change small, and fix the root problem.

---

## The 5 Core Guardrails

1. **`ask-first`** — If the prompt is missing essential decisions (schemas, storage locations, permissions), the AI must pause and ask 1 to 3 direct questions instead of guessing.
2. **`anti-overengineering`** — Rejects unneeded design patterns, DTOs, and speculative abstractions. Keeps code lean while strictly enforcing authentication, authorization, and input validation.
3. **`small-diff`** — Modifications stay strictly scoped to what solves the prompt. No cleaning up surrounding files, no global formatting passes, and no unnecessary dependency changes.
4. **`debug-first`** — When something breaks, the AI must read the complete error message and stack trace. Never guess fixes or hide errors behind empty try/catch blocks.
5. **`verify-first`** — Never declare a task complete without proof. Run tests, verify builds, test edge cases, and ensure no regressions occurred before reporting done.

---

## Quick Install

### 1. In Any Project (Recommended)
Run this in your project terminal:

```bash
npx waitsec
```

Pick your editor (Kilo Code, Cline, Cursor, or Antigravity), and the installer places the rules file directly in your workspace.

### 2. Kilo Code or Cline (VS Code)
Copy [rules/waitsec.md](rules/waitsec.md) to your project root as `.kilorules` (or `.clinerules`):

```bash
curl -o .kilorules https://raw.githubusercontent.com/fastroware/waitsec/main/rules/waitsec.md
```

You can also paste the contents of `rules/waitsec.md` into the **Custom Instructions** field in your Kilo Code extension settings.

### 3. Google Antigravity
Install the plugin using the Antigravity CLI:

```bash
agy plugin install https://github.com/fastroware/waitsec
```

### 4. Claude Code
Add the marketplace and install:

```text
/plugin marketplace add https://github.com/fastroware/waitsec
/plugin install waitsec@waitsec
```

### 5. Cursor
Copy [rules/waitsec.md](rules/waitsec.md) to `.cursorrules` in your project root, or add this repository as a plugin under `.cursor-plugin/`.

### 6. Laravel / PHP (Composer)
Install into your project development dependencies:

```bash
composer require --dev waitsec/waitsec
```

The post-install script automatically adds `.kilorules` to your root directory.

### 7. Agent Skills Directory (skills.sh)
Install the full core bundle (recommended):

```bash
npx skills add fastroware/waitsec/skills/waitsec-core
```

Or install only the module you need:

```bash
# Individual guardrails
npx skills add fastroware/waitsec/skills/waitsec-core  # All 5 guardrails
npx skills add fastroware/waitsec/skills/waitsec-quality  # Upcoming
npx skills add fastroware/waitsec/skills/waitsec-code     # Upcoming
npx skills add fastroware/waitsec/skills/waitsec-ui       # Upcoming
```

---

## Structure

```text
waitsec/
├── skills/
│   ├── waitsec-core/              # ACTIVE — Core 5-phase guardrails
│   │   ├── SKILL.md               # Hub: pipeline overview + links to detail files
│   │   ├── ask-first.md           # Phase 1: Clarify requirements before coding
│   │   ├── anti-overengineering.md # Phase 2: Lean code + non-negotiable security
│   │   ├── small-diff.md          # Phase 3: Surgical, proportional edits only
│   │   ├── debug-first.md         # Phase 4: Root cause analysis before guessing
│   │   └── verify-first.md        # Phase 5: Proof before declaring done
│   │
│   ├── waitsec-quality/           # UPCOMING — Security auditing, testing discipline
│   │   └── SKILL.md
│   ├── waitsec-code/              # UPCOMING — Clean code, anti-comment pollution
│   │   └── SKILL.md
│   └── waitsec-ui/                # UPCOMING — Anti-slop CSS, responsive guardrails
│       └── SKILL.md
│
├── rules/
│   ├── AGENTS.md                  # Universal rule pointer (Antigravity / Claude Code)
│   └── waitsec.md                 # All-in-one bundled rules (Kilo Code / Cline / Cursor)
├── bin/
│   └── cli.mjs                    # Interactive terminal installer (Clack prompts)
├── plugin.json                    # Antigravity plugin manifest
├── package.json                   # npm / npx manifest
└── composer.json                  # Composer / Laravel manifest
```

---

## Roadmap: Core & Extensions

- **Core (Active)**: The 5 foundational guardrails (`ask-first`, `anti-overengineering`, `small-diff`, `debug-first`, `verify-first`).
- **Quality (Upcoming)**: Specialized deep-dives for `security`, `testing`, `performance`, and `accessibility`.
- **Code (Upcoming)**: Anti-slop comments, naming conventions, and dependency discipline.
- **UI (Upcoming)**: Anti-slop interface rules, responsive standards, and clean typography.

---

## License

MIT
