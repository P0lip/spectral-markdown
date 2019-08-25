export default {
  name: 'non-empty-heading',
  description: 'Heading should not be empty',
  recommended: true,
  visitors: {
    heading(node, report) {
      // header might be empty
      if (
        node.children.length > 0 ||
        String(node.children[0].value).length === 0
      ) {
        report(this.name, this.description);
      }
    },
  },
};
