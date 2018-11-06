<template>
  <tr>
    <td @click="firstClicked">sta</td>
    <td>{{ row.uid }}</td>
    <td
      v-for="info in row.data"
      :key="info">{{ info }}</td>
    <td>fin</td>
  </tr>
</template>

<script>
import { BaseTableRowMixin } from '../../src/main';

export default {
  mixins: [BaseTableRowMixin],
  methods: {
    firstClicked() {
      // console.log('zaa from MyRow');
      this.emit('zaa');
    },
  },
};
</script>
