// eslint-disable-next-line import/no-extraneous-dependencies
import titleCase from 'title-case';
// eslint-disable-next-line import/no-extraneous-dependencies
import camelCase from 'camel-case';

// title case to camel case
const getColumnNameFromTitle = title =>
  title
    .split(/\s+/g)
    .map((v, i) => (i === 0 ? v.toLowerCase() : `${v[0].toUpperCase()}${v.substring(1).toLowerCase()}`))
    .join('');

// NOTE Despite the fact that columns normalization is going to be done \
//      in the BaseTable, we define the function here. This is due to \
//      semantics. But the reason why we do columns normalization in \
//      the BaseTable is to be able to extract map (i.e. column- \
//      data mapping) in the BaseTable (to send BaseTableBody).
export function normalizeColumns(columns, columnsExtractedFromData = false) {
  return columns.map((column) => {
    const columnType = typeof column;
    let normalized;

    if (
      (columnType !== 'object' && columnType !== 'string')
      || Array.isArray(column)
    ) {
      throw new TypeError('Only string or object is accepted as columns item.');
    }

    if (columnType === 'object') {
      if (!column.title && !column.children) {
        throw new Error('Title is required.');
      }

      // object
      normalized = Object.assign({}, column); // to have 'sort' etc. in `normalized`

      // normalized.key = column.title;
      //

      if (column.children) {
        normalized.children = normalizeColumns(column.children, columnsExtractedFromData);
      }
    } else {
      // string
      normalized = {};

      if (columnsExtractedFromData) {
        normalized.title = titleCase(column);
        normalized.key = column;
      } else {
        normalized.title = column;
        normalized.key = camelCase(column);
      }
    }

    return normalized;
  });
}

export function getLevels_old(columns) {
  // returns array of arrays of objects - levels
  // each level arr in the levels arr corresponds tr tag
  // each item in level arr corresponds th tag
  const levels = [];

  let level = 0;

  // children okunurken level+=1

  columns.forEach((column) => {
    const attrs = {};
    if (!levels[level]) {
      levels[level] = [];
    }

    if (column.children) {
      attrs.colspan = column.children.length;
    } else if (level > 0) {
      attrs.rowspan = ((level + 1 /* to 1-based */) + 1);
    }

    levels[level].push({
      // See https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
      attrs,
      data: column,
    });

    // FIXME With the code below we can only render 2-level \
    //       so make this function recursive
    if (column.children) {
      column.children.forEach((columnChild) => {
        if (!levels[level + 1]) {
          levels[level + 1] = [];
        }

        levels[level + 1].push({
          // attrs: {
          //   colspan: undefined,
          //   // rowspan: undefined,
          // },
          data: columnChild,
        });
      });
    }
  });

  return levels;
}

// NOTE Only 2 levels supported as of now
export function getLevels(columns) {
  const levels = [[]];
  let currLevel = 0;
  let currColumn;

  for (let i = 0; i < columns.length; i += 1) {
    currColumn = columns[i];

    if (!currColumn.children) {
      levels[currLevel].push({ data: { title: currColumn.title }, attrs: { rowspan: 2 } });
    } else {
      levels[currLevel].push({ data: { title: currColumn.title }, attrs: { colspan: currColumn.children.length } });

      if (!levels[currLevel + 1]) {
        levels[currLevel + 1] = []; // must not be a sparse array
      }

      for (
        let j = 0, currChild = currColumn.children[j];
        j < currColumn.children.length;
        j += 1, currChild = currColumn.children[j]
      ) {
        levels[currLevel + 1].push({ data: { title: currChild.title } });
      }
    }
  }

  return levels;
}
