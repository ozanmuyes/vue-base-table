<!--
NOTE This file is for development purposes only.
     Anything meaningful should have it's own
     file in the examples directory.
     Run 'npm run dev'.
-->

<template>
  <div class="app">
    <base-table
      :data="tableData"
      :columns="tableColumns"
    />
  </div>
</template>

<script>
import { BaseTable } from '../src/main';

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
      tableColumns: [
        {
          title: 'Full Name',
          // key: '', // this is optional
          children: ['Name', 'Surname'],
          // children: [
          //   { title: 'Name', key: 'name' },
          //   { title: 'Surname', key: 'surname' },
          // ],
        },
        'Age',
        'Place of Birth',
      ],
    };
  },
};
</script>
