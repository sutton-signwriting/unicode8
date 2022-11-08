import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { version } from './package.json';

const file = (name, ext) => `${name}.${ext}`
const fileMin = (name, ext) => `${name}.min.${ext}`
const banner = (name) => '/**' +
  '\n* Sutton SignWriting Unicode 8 Module v' + version + ' (https://github.com/sutton-signwriting/unicode8)' +
  '\n* Author: Steve Slevinski  (https://SteveSlevinski.me)' +
  '\n* Sponsor: https://patreon.com/signwriting' +
  '\n* Donate: https://donate.sutton-signwriting.io' +
  '\n*' +
  '\n* ' + name + ' is released under the MIT License.' +
  '\n*/\n';
  const footer = '\n/* the end */';
  const bannerMin = () => '/* Sutton SignWriting Unicode 8 Module v' + version + ' (https://github.com/sutton-signwriting/unicode8)' +
  ', author: Steve Slevinski (https://SteveSlevinski.me)' +
  ', sponsor: https://patreon.com/signwriting' +
  ', donate: https://donate.sutton-signwriting.io' +
  ', license: MIT */';
const footerMin = '/* the end */';

const defOut = (name, format, dirname, filename, ext) => {
  return {
    name: name,
    format: format,
    file: dirname + file(filename, ext),
    banner: banner(file(filename, ext)),
    footer: footer
  }
};
const defOutMin = (name, format, dirname, filename, ext) => {
  return {
    name: name,
    format: format,
    file: dirname + fileMin(filename, ext),
    banner: bannerMin(fileMin(filename, ext)),
    footer: footerMin
  }
};

const defOutAll = (name, dirname, filename) => [
  defOut(name, 'cjs', dirname, filename, 'cjs'),
  defOut(name, 'umd', dirname, filename, 'js'),
  defOut(name, 'esm', dirname, filename, 'mjs')
];
const defOutMinAll = (name, dirname, filename) => [
  defOutMin(name, 'cjs', dirname, filename, 'cjs'),
  defOutMin(name, 'umd', dirname, filename, 'js'),
  defOutMin(name, 'esm', dirname, filename, 'mjs')
];

const main = (input, name, dirname, filename) => {
  return {
    input: input,
    output: defOutAll(name, dirname, filename),
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      })
    ]
  }
}

const min = (input, name, dirname, filename) => {
  return {
    input: input,
    output: defOutMinAll(name, dirname, filename),
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      terser({
        output: {
          comments: `/Sutton/`
        }
      })
    ]
  }
}

const sections = (input, name, dirname, filename) => [
  main(input, name, dirname, filename),
  min(input, name, dirname, filename),
]

export default [
  ...sections('src/index.js', 'ssw.unicode8', './', 'unicode8'),
  ...sections('src/font/index.js', 'ssw.unicode8.font', './font/', 'font'),
  ...sections('src/symbol/index.js', 'ssw.unicode8.symbol', './symbol/', 'symbol'),
  ...sections('src/string/index.js', 'ssw.unicode8.string', './string/', 'string'),
  ...sections('src/convert/index.js', 'ssw.unicode8.convert', './convert/', 'convert'),
];
