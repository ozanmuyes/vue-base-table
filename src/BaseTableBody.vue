<template>
  <tbody>
    <!-- <tr
      v-for="row in processedRows"
      :key="row._index"
    > -->
      <!-- <slot name="row">
        <td
          v-for="data in row.data"
          :key="data"
        >{{ data }}</td>
      </slot> -->
    <!-- </tr> -->
    <component
      v-for="(row, index) in processedRows"
      :key="row.uid"
      :is="rowComponent"
      :data_old="row.data"
      :row="row"
      :index="index"
      @row-event="onRowEvent"
    />
  </tbody>
</template>

<script>
// import BaseTableRow from './BaseTableRow.vue';

import mixin from './BaseTableBody/mixin';

export default {
  name: 'BaseTableBody',
  mixins: [mixin],
};
</script>
