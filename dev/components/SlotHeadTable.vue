<template>
  <table>
    <base-table-head :columns="normalizedColumns">
      <template slot="left">
        <th>START</th>
        <th>#</th>
      </template>

      <template slot="right">
        <th>FIN</th>
      </template>
    </base-table-head>

    <!-- `@row-event="onRowEvent"` MUST be added to custom table components, as is -->
    <base-table-body
      :rows="data"
      :map="dataMap"
      :row-component="rowComponent"
      @row-event="onRowEvent"
    />
  </table>
</template>

<script>
import { BaseTableMixin } from '../../src/main';

import MyRow from './MyRow.vue';

export default {
  name: 'SlotHeadTable',
  mixins: [BaseTableMixin],
  computed: {
    rowComponent: () => MyRow,
  },
};
</script>
