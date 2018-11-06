# Table Demistified

We are going to construct the exact table from the example Basic - Simple, but this time without using `<base-table>`. This is to show what the Base Table component does. The codes below are for our new table component - `MyTable`;

```html
<template>
  <table>
    <base-table-head :columns="normalizedColumns"/>

    <base-table-body
      :rows="data"
      :map="dataMap"
      :row-component="rowComponent"
    />
  </table>
</template>

<script>
import {
  BaseTableMixin,
  BaseTableHead,
  BaseTableBody,
  BaseTableRow,
} from 'base-table';

export default {
  name: 'MyTable',
  components: {
    BaseTableHead,
    BaseTableBody,
  },
  mixins: [BaseTableMixin],
  computed: {
    rowComponent: () => BaseTableRow,
  },
};
</script>
```

Using our new component, `<my-table>`, we can now render the same table;

```html
<template>
  <my-table :data="tableData"/>
</template>

<script>
import MyTable from './path/to/MyTable.vue';

export default {
  components: {
    MyTable,
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
    };
  },
};
</script>
```

<examples-advanced-table-demistified/>
