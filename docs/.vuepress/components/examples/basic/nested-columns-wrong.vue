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
        { name: 'John', surname: 'Doe', age: 42, placeOfBirth: 'Hamburg' },
        { name: 'Jane', surname: 'Doe', age: 36, placeOfBirth: 'Salvador' },
        { name: 'Johnny', surname: 'Doe', age: 15, placeOfBirth: 'Jinan' },
        { name: 'John', surname: 'Roe', age: 42, placeOfBirth: 'Belgrade' },
        { name: 'Jane', surname: 'Roe', age: 36, placeOfBirth: 'Patna' },
        { name: 'Richard', surname: 'Roe', age: 78, placeOfBirth: 'Nanjing' },
      ],
    };
  },
};
</script>
