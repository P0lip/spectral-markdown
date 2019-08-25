import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    externalHelpers: true,
  }),
  resolve({
    node: true,
    jsnext: true,
  }),
  commonjs({}),
  terser(),
];

export default [
  {
    input: './src/index.js',
    output: {
      file: './dist/markdown.js',
      format: 'cjs',
      name: pkg.name,
    },
    plugins,
    acorn: {
      allowReserved: true,
      ecmaVersion: 9,
    },
  },
  {
    input: './src/parser.js',
    output: {
      file: './parser.js',
      format: 'cjs',
      name: pkg.name,
    },
    external: ['@stoplight/markdown'],
    plugins,
  },
];
