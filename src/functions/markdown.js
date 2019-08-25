import markdownRules from '../rules/index.js';
import createReporter from '../reporter.js';

const cache = new WeakMap();

function collectVisitors(rules) {
  const visitors = {};

  for (const rule of rules) {
    for (const type in rule.visitors) {
      if (!Object.hasOwnProperty.call(rule.visitors, type)) continue;
      if (type in visitors) {
        visitors[type].push(rule.visitors[type].bind(rule));
      } else {
        visitors[type] = [rule.visitors[type].bind(rule)];
      }
    }
  }

  return visitors;
}

function visit(node, visitors, log, path) {
  if (node.type in visitors) {
    for (const visitor of visitors[node.type]) {
      visitor(node, log);
    }
  }

  if ('children' in node) {
    const length = path.push('children', 0);
    let i = 0;
    for (const child of node.children) {
      path.length = length;
      path[length - 1] = i++;
      visit(child, visitors, log, path);
    }
  }
}

export default (root, opts) => {
  let results = cache.get(root);

  if (results === void 0) {
    const enabledRules = markdownRules;
    // todo: once Spectral exposes rules, we can uncomment this code
    // markdownRules.filter(
    //   ({ name }) => name in rules && rules[name].severity !== -1
    // );

    if (enabledRules.length === 0) {
      results = null;
      cache.set(root, null);
    } else {
      results = {};
      cache.set(root, results);
      const path = [];
      visit(
        root,
        collectVisitors(enabledRules),
        createReporter(results, path),
        path,
      );
    }
  }

  if (results !== null && opts.name in results) {
    return results[opts.name];
  }

  return void 0;
};
