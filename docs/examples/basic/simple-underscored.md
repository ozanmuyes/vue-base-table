# Underscored Simple

In addition to `camelCase` key names underscored (a.k.a `snake_case`) key names are supported. So here is the example code with underscored key names in the table data;

```html
<template>
  <base-table :data="tableData"/>
</template>

<script>
export default {
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
```

Again, this will give you the following;

<examples-basic-simple-underscored class="reset"/>

---

Also you can have mixed casing in the table data;

```html
<template>
  <base-table :data="tableData"/>
</template>

<script>
export default {
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
```

<examples-basic-simple-mixed class="reset"/>


::: warning
Notice that for mixed casing **an item** have camel cased and underscored keys exists. And those, different cased keys are for every object.

This **does not** mean one item have all it's keys in camel case while another have all it's keys in snake case. In short do not do this;

```javascript
// Do NOT do this
data() {
  return {
    tableData: [
      { fullName: 'John Doe', age: 42, placeOfBirth: 'Hamburg' },
      { full_name: 'Jane Doe', age: 36, place_of_birth: 'Salvador' },
    ],
  };
},
```

Keep your object keys in the table data array consistent.
:::
