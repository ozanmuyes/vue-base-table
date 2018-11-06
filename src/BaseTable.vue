<template>
  <table>
    <base-table-head :columns="normalizedColumns"/>

    <base-table-body
      :rows="data"
      :map="dataMap"
      :row-component="rowComponent"
    />
  </table>
</template>

<script>
import BaseTableHead from './BaseTableHead.vue';
import BaseTableBody from './BaseTableBody.vue';
import BaseTableRow from './BaseTableRow.vue';

import mixin from './BaseTable/mixin';

export default {
  name: 'BaseTable',
  components: {
    BaseTableHead,
    BaseTableBody,
  },
  mixins: [mixin],
  computed: {
    rowComponent: () => BaseTableRow,
  },
  // TODO onClick -> sort
};
</script>
