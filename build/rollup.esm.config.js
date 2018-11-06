// ES Module Format: For webpack/Rollup ("module" field on package.json).

const cleanup = require('rollup-plugin-cleanup');

const pkg = require('../package.json');

let outputFile;
if (pkg.module) {
  outputFile = pkg.module;
// } else if (pkg.main) {
//   outputFile = pkg.main;
} else {
  outputFile = `dist/${pkg.name}.esm.js`;
}

module.exports = {
  input: 'src/main.js',
  output: {
    file: outputFile,
  },
  plugins: [
    cleanup(),
  ],
};
