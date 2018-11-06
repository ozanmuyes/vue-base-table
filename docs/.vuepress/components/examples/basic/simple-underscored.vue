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
        { full_name: 'John Doe', age: 42, place_of_birth: 'Hamburg' },
        { full_name: 'Jane Doe', age: 36, place_of_birth: 'Salvador' },
        { full_name: 'Johnny Doe', age: 15, place_of_birth: 'Jinan' },
        { full_name: 'John Roe', age: 42, place_of_birth: 'Belgrade' },
        { full_name: 'Jane Roe', age: 36, place_of_birth: 'Patna' },
        { full_name: 'Richard Roe', age: 78, place_of_birth: 'Nanjing' },
      ],
    };
  },
};
</script>
