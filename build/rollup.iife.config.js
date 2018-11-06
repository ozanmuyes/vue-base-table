// IIFE Format: For browsers ("browser" field on package.json).

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;
const resolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue').default;

const pkg = require('../package.json');

let outputFile;
if (pkg.browser) {
  outputFile = pkg.browser;
// } else if (pkg.main) {
//   outputFile = pkg.main;
} else {
  outputFile = `dist/${pkg.name}.min.js`;
}

module.exports = {
  input: 'src/wrapper.js',
  output: {
    file: outputFile,
    format: 'iife',
    name: 'VueBaseTable',
  },
  plugins: [
    resolve(),
    commonjs({
      sourceMap: false,
    }),
    vue({
      template: {
        isProduction: true,
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      sourcemap: false,
    }),
  ],
};
