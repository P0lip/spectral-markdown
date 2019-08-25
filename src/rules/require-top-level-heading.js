export default {
  name: 'require-top-level-heading',
  description: 'Document should contain non-empty top-level h1',
  recommended: true,
  visitors: {
    root(node, report) {
      if (
        node.children.length === 0 ||
        !node.children.some(
          child => child.type === 'heading' && child.depth === 1,
        )
      ) {
        report(this.name, this.description);
      }
    },
  },
};
