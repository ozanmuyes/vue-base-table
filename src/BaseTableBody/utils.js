const getNestedDataFromObjectViaPath = (obj, path, separator = '.') => {
  // FIXME separate dots in the path
  if (!path.indexOf(separator)) {
    return obj[path];
  }

  const properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev && prev[curr], obj);
};

// From https://stackoverflow.com/a/47900945/250453
const createUniqueKeys = (count) => {
  const uniqueKeys = [];

  const batchSize = 6;
  const batchCount = Math.ceil(count / batchSize);

  let s;
  for (let i = 0; i < batchCount; i += 1) {
    s = Math.random().toString();

    for (let j = 0; j < batchSize; j += 1) {
      uniqueKeys.push(s.substring(2 + j, 12 + j)); // extract 10 digits
    }
  }

  return uniqueKeys;
};

// eslint-disable-next-line import/prefer-default-export
export function processRows(rows, map) {
  const retVal = [];

  const uniqueKeys = createUniqueKeys(rows.length);

  for (let i = 0; i < rows.length; i += 1) {
    const rowData = map.map(location => getNestedDataFromObjectViaPath(rows[i], location));

    retVal.push({
      uid: uniqueKeys[i], // random unique id
      data: rowData,
    });
  }

  return retVal;
}
