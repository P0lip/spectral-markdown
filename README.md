# Spectral Markdown ruleset

## Usage

```js
const { Spectral } = require('@stoplight/spectral');
const parse = require('spectral-markdown/parser');

const s = new Spectral();
await s.loadRuleset('spectral-markdown');

const markdown = 'foo';
const results = await s.run(parse(markdown));
```

## License

[MIT](https://github.com/P0lip/spectral-markdown/blob/master/LICENSE)
