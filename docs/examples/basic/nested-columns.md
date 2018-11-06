# Nested Columns

So far we used 'Full Name' for the first column. Let's break it into name and surname. After that for example we can sort by surname.

```html
<template>
  <base-table :data="tableData"/>
</template>

<script>
export default {
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
```

<examples-basic-nested-columns-wrong class="reset"/>

OK now we have individual columns for name and surname. But that's not what we want. This is what we want;

<examples-basic-nested-columns class="reset"/>

In order to have this we should have something like this;

```html {21-27}
<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
  />
</template>

<script>
export default {
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
          children: [
            'Name',
            'Surname',
          ],
        },
        'Age',
        'Place of Birth',
      ],
    };
  },
};
</script>
```

Since 'Full Name' has it's children set and those children (as strings) has corresponding keys in the table data (as camel cased), we didn't have to explicitly state `key` property for the individual `children` array objects.

If your data is also nested, assign columns to this;

```html {13-18,23}
<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
  />
</template>

<script>
export default {
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
```

<examples-basic-nested-columns-2 class="reset"/>

This time 'Full Name' title must have it's `key` property set due to the it's corresponding _object_ (`name`) is an _object_. But, again, in the nested object (`name: { first: '...', last: '...' }`) there are corresponding keys for the 'Full Name' children (as camel cased). Therefore we didn't have to explicitly state children `key`s.

This also might not what we want due to 'First' and 'Last' columns. Also 'Full Name' can be renamed too. To do these change we should set the children's `key` on individual objects;

```html {25,26}
<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
  />
</template>

<script>
export default {
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
            { title: 'Name', key: 'first' },
            { title: 'Surname', key: 'last' },
          ],
        },
        'Age',
        'Place of Birth',
      ],
    };
  },
};
</script>
```

<examples-basic-nested-columns-3 class="reset"/>

This example shows us column title and key on the table data can differ. As a reminder, by default column key is the camel cased version of column title.
