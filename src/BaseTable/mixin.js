// eslint-disable-next-line import/no-extraneous-dependencies
// import titleCase from 'title-case';

import * as utils from './utils';
import { normalizeColumns } from '../BaseTableHead/utils';

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      default: null,
    },
    map: {
      type: Array,
      default: null,
    },
  },
  computed: {
    normalizedColumns() {
      if (this.columns) {
        return normalizeColumns(this.columns);
      }

      return normalizeColumns(Object.keys(this.data[0]), true);
    },
    dataMap() {
      if (this.map) {
        return this.map;
      }

      let retVal = [];
      this.normalizedColumns.forEach((obj) => {
        retVal = [...retVal, ...utils.reduceNestedNames(obj, 'key')];
      });

      return retVal;
    },
  },
  methods: {
    onRowEvent(eventName, ...args) {
      this.$emit(eventName, ...args);
    },
  },
};
