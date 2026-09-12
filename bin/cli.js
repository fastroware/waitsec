#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sourceRulePath = path.join(__dirname, '..', 'rules', 'waitsec.md');

console.log(`
=========================================
  waitsec: AI Coding Guardrails Installer
  "Hold on. Think first. Code less."
=========================================
`);

console.log('Select your editor / coding agent:\n');
console.log('  1) Kilo Code (.kilorules)');
console.log('  2) Cline / Roo Code (.clinerules)');
console.log('  3) Cursor (.cursorrules)');
console.log('  4) Antigravity / Universal (AGENTS.md)');
console.log('  5) All of the above\n');

rl.question('Enter number [1-5] (default: 1): ', (answer) => {
  const choice = (answer || '1').trim();
  const cwd = process.cwd();

  if (!fs.existsSync(sourceRulePath)) {
    console.error(`Error: Rule template not found at ${sourceRulePath}`);
    rl.close();
    process.exit(1);
  }

  const ruleContent = fs.readFileSync(sourceRulePath, 'utf8');

  const targets = [];
  if (choice === '1') targets.push('.kilorules');
  else if (choice === '2') targets.push('.clinerules');
  else if (choice === '3') targets.push('.cursorrules');
  else if (choice === '4') targets.push('AGENTS.md');
  else if (choice === '5') targets.push('.kilorules', '.clinerules', '.cursorrules', 'AGENTS.md');
  else {
    console.log('Unknown choice, defaulting to .kilorules');
    targets.push('.kilorules');
  }

  targets.forEach((filename) => {
    const destPath = path.join(cwd, filename);
    if (fs.existsSync(destPath)) {
      console.log(`[!] ${filename} already exists. Appending waitsec rules...`);
      fs.appendFileSync(destPath, `\n\n${ruleContent}`);
    } else {
      fs.writeFileSync(destPath, ruleContent, 'utf8');
      console.log(`[+] Created ${filename}`);
    }
  });

  console.log('\nSuccess! waitsec rules are now active in this project.');
  console.log('Your AI assistant will now pause, check requirements, and avoid bloated code.\n');

  rl.close();
});
