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
import BaseTableMixin from '../../../../../src/BaseTable/mixin';

import BaseTableHead from '../../../../../src/BaseTableHead.vue';
import BaseTableBody from '../../../../../src/BaseTableBody.vue';
import BaseTableRow from '../../../../../src/BaseTableRow.vue';

export default {
  components: {
    BaseTableHead,
    BaseTableBody,
  },
  mixins: [BaseTableMixin],
  computed: {
    rowComponent: () => BaseTableRow,
  },
};
</script>
