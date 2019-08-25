import { parseWithPointers, getLocationForJsonPath } from '@stoplight/markdown';

export default md => ({
  parsed: parseWithPointers(md),
  getLocationForJsonPath,
  format: 'markdown',
});
