const formatFlagIndex = process.argv.findIndex(env => env === '-f' || env === '--format');
if (formatFlagIndex === -1) {
  throw new Error('Format must be specified as command line flag (no flag).');
}

const format = process.argv[formatFlagIndex + 1];
if (format === undefined) {
  throw new Error('Format must be specified as command line flag (no value).');
}

const formatConfig = require(`./rollup.${format}.config.js`);

module.exports = formatConfig;
