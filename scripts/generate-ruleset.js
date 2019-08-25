import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import baseRuleset from '../src/ruleset.json';
import rules from '../src/rules/index.js';

for (const { name, visitors, ...rule } of rules) {
  rule.then = {
    function: 'markdown',
    functionOptions: {
      name,
    }
  };
  rule.given = '$';
  rule.type = 'style';
  rule.tags = ['markdown'];

  baseRuleset.rules[name] = rule;
}

fs.writeFileSync(
  path.join(__dirname, '../dist/index.json'),
  JSON.stringify(baseRuleset),
);
