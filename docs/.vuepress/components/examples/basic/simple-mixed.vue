<template>
  <base-table :data="tableData"/>
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
        { fullName: 'John Doe', age: 42, place_of_birth: 'Hamburg' },
        { fullName: 'Jane Doe', age: 36, place_of_birth: 'Salvador' },
        { fullName: 'Johnny Doe', age: 15, place_of_birth: 'Jinan' },
        { fullName: 'John Roe', age: 42, place_of_birth: 'Belgrade' },
        { fullName: 'Jane Roe', age: 36, place_of_birth: 'Patna' },
        { fullName: 'Richard Roe', age: 78, place_of_birth: 'Nanjing' },
      ],
    };
  },
};
</script>
