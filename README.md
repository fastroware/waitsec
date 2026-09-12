# waitsec

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

## The 4 Core Guardrails

### 1. `ask-first`
If the prompt is missing essential decisions (schemas, storage locations, permissions), the AI must pause and ask 1 to 3 direct questions instead of guessing.

### 2. `anti-overengineering`
The AI must use existing patterns in your codebase and pick the simplest working solution. No speculative abstractions for hypothetical future needs.

### 3. `small-diff`
Modifications stay strictly scoped to what solves the prompt. No cleaning up surrounding files, no global formatting passes, and no unnecessary dependency changes.

### 4. `debug-first`
When something breaks, the AI must read the complete error message and stack trace. Never guess fixes or hide errors behind empty try/catch blocks.

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
Install via the universal skills CLI:

```bash
npx skills add fastroware/waitsec
```

---

## Structure

```text
waitsec/
├── skills/
│   ├── ask-first/             # Clarify ambiguous requirements first
│   │   └── SKILL.md
│   ├── anti-overengineering/  # Stop bloat and unnecessary abstractions
│   │   └── SKILL.md
│   ├── small-diff/            # Keep changes surgical and small
│   │   └── SKILL.md
│   └── debug-first/           # Trace real root causes before editing
│       └── SKILL.md
├── rules/
│   ├── AGENTS.md              # Universal rule pointer
│   └── waitsec.md             # All-in-one bundled rules
├── bin/
│   └── cli.js                 # Interactive terminal installer
├── plugin.json                # Antigravity plugin manifest
├── package.json               # npm / npx manifest
└── composer.json              # Composer / Laravel manifest
```

---

## License

MIT
