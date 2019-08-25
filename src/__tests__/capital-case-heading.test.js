import { Spectral } from '@stoplight/spectral';
import { expect } from 'chai';
import parse from '../parser.js';

describe('capital-case-heading rule', () => {
  let s;

  // beforeEach(async () => {
  //   s = new Spectral();
  //   s.setRules({ 'capital-case-heading':  })
  // });

  it('does not report anything when no heading is given', async () => {

  });

  it('detects invalid usage', async () => {
    const markdown = `aa
# foo
~n~
## a
#### A
`;

    expect(await s.run(parse(markdown))).to.equal([
      {
        code: 'capital-case-heading',
        message: 'Headings should be capital-cased',
        path: ['children', '1'],
        range: {
          end: {
            character: 5,
            line: 1,
          },
          start: {
            character: 0,
            line: 1,
          },
        },
        severity: 1,
        source: void 0,
      },
    ]);
  });
});
