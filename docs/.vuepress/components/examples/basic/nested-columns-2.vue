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
        { name: { first: 'John', last: 'Doe' }, age: 42, placeOfBirth: 'Hamburg' },
        { name: { first: 'Jane', last: 'Doe' }, age: 36, placeOfBirth: 'Salvador' },
        { name: { first: 'Johnny', last: 'Doe' }, age: 15, placeOfBirth: 'Jinan' },
        { name: { first: 'John', last: 'Roe' }, age: 42, placeOfBirth: 'Belgrade' },
        { name: { first: 'Jane', last: 'Roe' }, age: 36, placeOfBirth: 'Patna' },
        { name: { first: 'Richard', last: 'Roe' }, age: 78, placeOfBirth: 'Nanjing' },
      ],
      tableColumns: [
        {
          title: 'Full Name',
          key: 'name',
          children: [
            'First',
            'Last',
          ],
        },
        'Age',
        'Place of Birth',
      ],
    };
  },
};
</script>
