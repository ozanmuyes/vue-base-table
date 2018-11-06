<template>
  <table>
    <base-table-head/>

    <base-table-body/>
  </table>
</template>

<script>
import BaseTableMixin from '../../../../../src/BaseTable/mixin';

import BaseTableHead from '../../../../../src/BaseTableHead.vue';
import BaseTableBody from '../../../../../src/BaseTableBody.vue';

export default {
  components: {
    BaseTableHead,
    BaseTableBody,
  },
  mixins: [BaseTableMixin],
  data() {
    return {
      tableData: [
        { fullName: 'John Doe', age: 42, placeOfBirth: 'Hamburg' },
        { fullName: 'Jane Doe', age: 36, placeOfBirth: 'Salvador' },
        { fullName: 'Johnny Doe', age: 15, placeOfBirth: 'Jinan' },
        { fullName: 'John Roe', age: 42, placeOfBirth: 'Belgrade' },
        { fullName: 'Jane Roe', age: 36, placeOfBirth: 'Patna' },
        { fullName: 'Richard Roe', age: 78, placeOfBirth: 'Nanjing' },
      ],
    };
  },
};
</script>
