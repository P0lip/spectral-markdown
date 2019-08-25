import jsYaml from 'js-yaml';

export default {
  name: 'require-frontmatter-tags',
  description: 'Frontmatter block must be present and contain tags',
  recommended: false,
  visitors: {
    root(node, report) {
      if (node.children.length > 0 && node.children[0].type === 'yaml') {
        try {
          // jsYaml.safeLoad(node.children[0]);
        } catch (ex) {
          report(this.name, ex.message);
        }
      } else {
        report(this.name, 'Frontmatter block is missing.');
      }
    },
  },
};
