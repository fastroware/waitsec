#!/usr/bin/env node

import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors';
import { intro, outro, select, multiselect, confirm, isCancel, cancel, log, spinner } from '@clack/prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const SKILLS_SOURCE_DIR = path.join(REPO_ROOT, 'skills');
const RULES_SOURCE_FILE = path.join(REPO_ROOT, 'rules', 'waitsec.md');

const CORE_SKILL = 'waitsec';

const AVAILABLE_SKILLS = [
  {
    value: 'waitsec',
    label: 'waitsec (core)',
    hint: '5 core guardrails: ask-first, anti-overengineering, small-diff, debug-first, verify-first',
  },
  {
    value: 'waitsec-ui',
    label: 'waitsec-ui (preview)',
    hint: 'Anti-slop UI copy & CSS, responsive guardrails',
  },
  {
    value: 'waitsec-pagemaker',
    label: 'waitsec-pagemaker (preview)',
    hint: 'Page architect: landing pages, blog/articles, contact, about me',
  },
  {
    value: 'waitsec-code',
    label: 'waitsec-code (preview)',
    hint: 'Clean code rules, anti-comment noise, dependency control',
  },
  {
    value: 'waitsec-quality',
    label: 'waitsec-quality (preview)',
    hint: 'Security audits, test discipline, data integrity',
  },
];

const AGENTS = [
  { id: 'antigravity', label: 'Antigravity / Universal', skillDir: '.agents/skills', ruleFile: 'AGENTS.md' },
  { id: 'claude',      label: 'Claude Code',            skillDir: '.claude/skills', ruleFile: 'CLAUDE.md' },
  { id: 'cursor',      label: 'Cursor',                 skillDir: '.cursor/skills', ruleFile: '.cursorrules' },
  { id: 'kilo',        label: 'Kilo Code (VS Code)',    skillDir: '.kilo/skills',   ruleFile: '.kilorules' },
  { id: 'cline',       label: 'Cline / Roo Code',       skillDir: '.cline/skills',  ruleFile: '.clinerules' },
  { id: 'codex',       label: 'Codex',                  skillDir: '.codex/skills',  ruleFile: 'AGENTS.md' },
  { id: 'gemini',      label: 'Gemini CLI',             skillDir: '.gemini/skills', ruleFile: 'GEMINI.md' },
];

function stop(message) {
  cancel(message);
  process.exit(0);
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const POINTER_START = '<!-- waitsec:start -->';
const POINTER_END = '<!-- waitsec:end -->';

function getPointerBlock(skills) {
  return [
    POINTER_START,
    '# waitsec: AI Coding Guardrails',
    '> Hold on. Think first. Code less.',
    '',
    'Follow the waitsec engineering discipline for all tasks in this workspace:',
    '- **Core Guardrails Active**: ' + skills.map(s => '`' + s + '`').join(', '),
    '- When requirements are ambiguous: pause and ask 1 to 3 direct questions with concrete options.',
    '- Keep solutions lean: reject enterprise boilerplate; never compromise security or input validation.',
    '- Keep diffs surgical: touch only the files strictly required to solve the prompt.',
    '- Debug from evidence: inspect stack traces and root causes before guessing.',
    '- Verify before declaring done: run builds, tests, and verify edge cases.',
    POINTER_END,
  ].join('\n');
}

function updateRuleFile(filePath, content, isPointer = false) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    return 'created';
  }

  const existing = fs.readFileSync(filePath, 'utf8');
  if (isPointer) {
    if (existing.includes(POINTER_START) && existing.includes(POINTER_END)) {
      const regex = new RegExp(`${POINTER_START}[\\s\\S]*?${POINTER_END}`, 'g');
      const updated = existing.replace(regex, content);
      fs.writeFileSync(filePath, updated, 'utf8');
      return 'updated';
    }
  }

  if (existing.includes('waitsec: AI Coding Guardrails') || existing.includes(POINTER_START)) {
    return 'already-configured';
  }

  fs.appendFileSync(filePath, `\n\n${content}`, 'utf8');
  return 'appended';
}

function detectActiveAgents(baseDir) {
  return AGENTS.filter((agent) => {
    const rootFolder = agent.skillDir.split('/')[0];
    const folderExists = fs.existsSync(path.join(baseDir, rootFolder));
    const ruleExists = agent.ruleFile && fs.existsSync(path.join(baseDir, agent.ruleFile));
    return folderExists || ruleExists;
  }).map((a) => a.id);
}

async function main() {
  if (process.argv.includes('--version') || process.argv.includes('-v')) {
    const pkg = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'));
    console.log(`waitsec v${pkg.version}`);
    return;
  }

  console.log(`
  ${pc.bold(pc.cyan('██╗    ██╗ █████╗ ██╗████████╗███████╗███████╗ ██████╗'))}
  ${pc.bold(pc.cyan('██║    ██║██╔══██╗██║╚══██╔══╝██╔════╝██╔════╝██╔════╝'))}
  ${pc.bold(pc.cyan('██║ █╗ ██║███████║██║   ██║   ███████╗█████╗  ██║     '))}
  ${pc.bold(pc.cyan('██║███╗██║██╔══██║██║   ██║   ╚════██║██╔══╝  ██║     '))}
  ${pc.bold(pc.cyan('╚███╔███╔╝██║  ██║██║   ██║   ███████║███████╗╚██████╗'))}
  ${pc.bold(pc.cyan(' ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝ ╚═════╝'))}
  ${pc.dim('        "Hold on. Think first. Code less."')}
`);

  intro(pc.bold('Install waitsec guardrails into your AI coding setup'));

  log.step(pc.bold('1. Select Skills to Install'));
  const selectedSkills = await multiselect({
    message: 'Select the skills you want (Press Space to select, Enter to confirm):',
    options: AVAILABLE_SKILLS,
    initialValues: ['waitsec'],
    required: 'You must select at least one skill.',
  });
  if (isCancel(selectedSkills)) stop('Installation cancelled.');

  log.step(pc.bold('2. Choose Installation Scope'));
  const scope = await select({
    message: 'Where do you want waitsec to be installed?',
    options: [
      {
        value: 'project',
        label: 'This project only',
        hint: 'Creates rules and skill folders in current workspace',
      },
      {
        value: 'global',
        label: 'Everywhere (Global)',
        hint: 'Installs directly to your machine home directory across all projects',
      },
    ],
  });
  if (isCancel(scope)) stop('Installation cancelled.');

  const baseDir = scope === 'global' ? os.homedir() : process.cwd();
  const detectedAgentIds = detectActiveAgents(baseDir);

  log.step(pc.bold('3. Choose Your AI Agents / Editors'));
  const chosenAgentIds = await multiselect({
    message: 'Which coding assistants or editors do you use? (Press Space to select):',
    options: AGENTS.map((a) => ({
      value: a.id,
      label: a.label,
      hint: detectedAgentIds.includes(a.id)
        ? pc.green('found in environment')
        : pc.dim(a.ruleFile ? `configures ${a.ruleFile}` : 'creates skill folder'),
    })),
    initialValues: detectedAgentIds.length > 0 ? detectedAgentIds : ['antigravity', 'cursor', 'claude', 'kilo'],
    required: 'Please pick at least one assistant or editor.',
  });
  if (isCancel(chosenAgentIds)) stop('Installation cancelled.');

  const chosenAgents = AGENTS.filter((a) => chosenAgentIds.includes(a.id));

  let overwrite = false;
  const existingDestinations = [];
  for (const agent of chosenAgents) {
    for (const skill of selectedSkills) {
      const checkPath = path.join(baseDir, agent.skillDir, skill);
      if (fs.existsSync(checkPath)) {
        existingDestinations.push(checkPath);
      }
    }
  }

  if (existingDestinations.length > 0) {
    const conflictAction = await select({
      message: `${existingDestinations.length} skill folder(s) already exist. What would you like to do?`,
      options: [
        { value: 'overwrite', label: 'Overwrite with latest version', hint: 'recommended' },
        { value: 'skip',      label: 'Keep existing folders',        hint: 'skip copying over existing skills' },
      ],
    });
    if (isCancel(conflictAction)) stop('Installation cancelled.');
    overwrite = conflictAction === 'overwrite';
  }

  const s = spinner();
  s.start('Installing waitsec guardrails...');

  let copiedSkillsCount = 0;
  for (const agent of chosenAgents) {
    for (const skill of selectedSkills) {
      const srcDir = path.join(SKILLS_SOURCE_DIR, skill);
      const destDir = path.join(baseDir, agent.skillDir, skill);

      if (!fs.existsSync(srcDir)) continue;
      if (fs.existsSync(destDir) && !overwrite) continue;

      if (fs.existsSync(destDir) && overwrite) {
        fs.rmSync(destDir, { recursive: true, force: true });
      }

      copyDirSync(srcDir, destDir);
      copiedSkillsCount++;
    }
  }

  const configuredRules = [];
  const rulesContent = fs.existsSync(RULES_SOURCE_FILE)
    ? fs.readFileSync(RULES_SOURCE_FILE, 'utf8')
    : getPointerBlock(selectedSkills);

  for (const agent of chosenAgents) {
    if (!agent.ruleFile) continue;
    const rulePath = path.join(baseDir, agent.ruleFile);
    const isSpecialRule = agent.id === 'kilo' || agent.id === 'cline' || agent.id === 'cursor';
    const contentToWrite = isSpecialRule ? rulesContent : getPointerBlock(selectedSkills);
    const action = updateRuleFile(rulePath, contentToWrite, !isSpecialRule);
    configuredRules.push({ file: agent.ruleFile, action });
  }

  s.stop(pc.green('Installation complete!'));

  console.log('');
  log.message(
    pc.bold('Installed Skills & Configuration Details:') + '\n' +
    chosenAgents.map(a => `  ${pc.cyan('●')} ${pc.bold(a.label)}: ${pc.dim(path.join(baseDir, a.skillDir))}`).join('\n') +
    '\n' +
    configuredRules.map(r => `  ${pc.green('✔')} Configured rule: ${pc.bold(r.file)} (${r.action})`).join('\n')
  );

  outro(
    pc.bold(pc.green('waitsec is active.')) + ' ' +
    pc.dim('Your AI will now think first, keep diffs small, and prevent overengineering.')
  );
}

main().catch((err) => {
  console.error(pc.red('Unexpected error:'), err);
  process.exit(1);
});