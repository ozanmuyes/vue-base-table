import * as utils from './utils';

export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
    map: {
      type: Array,
      required: true,
      // NOTE map.length MUST be equal to columns count
    },
    rowComponent: {
      type: Object,
      required: true,
    },
  },
  computed: {
    processedRows() {
      return utils.processRows(this.rows, this.map);
    },
  },
  methods: {
    onRowEvent(...args) {
      this.$emit('row-event', ...args);
    },
  },
};
