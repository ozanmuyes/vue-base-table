<template>
  <tr>
    <td
      v-for="info in row.data"
      :key="info">{{ info }}</td>
  </tr>
</template>

<script>
import mixin from './BaseTableRow/mixin';

export default {
  name: 'BaseTableRow',
  mixins: [mixin],
};
</script>
