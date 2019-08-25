export default {
  name: 'capital-case-heading',
  description: 'Headings should be capital-cased',
  recommended: true,
  visitors: {
    heading(node, report) {
      // header might be empty
      if (node.children.length > 0) {
        const text = String(node.children[0].value);
        if (text !== text.toUpperCase()) {
          report(this.name, this.description);
        }
      }
    },
  },
};
