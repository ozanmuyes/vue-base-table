<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
  />
</template>

<script>
import BaseTable from '../../../../../src/BaseTable.vue';

export default {
  components: {
    BaseTable,
  },
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
      tableColumns: [
        'Full Name',
        'Age',
        'Place of Birth',
      ],
    };
  },
};
</script>
