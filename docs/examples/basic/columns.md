# Columns

In the previous examples you might notice the wrong capitalization of the word 'of' - the column should read 'Place of Birth' instead of 'Place Of Birth'. Let's correct that;

```javascript {14}
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
```

We have just added another data to the parent component. Next we need to pass it to the Base Table instance;

```html {4}
<template>
  <base-table
    :data="tableData"
    :columns="tableColumns"
  />
</template>
```

<examples-basic-columns class="reset"/>

When `columns` prop set the default behaviour is to look for the camel cased version of each item in the array (of strings). So for the example code above camel cased versions of items are 'fullName', 'age' and 'placeOfBirth' respectively. If your data has underscored key names you should state the key explicitly;

```javascript {14}
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
    tableColumns: [
      'Full Name',
      'Age',
      { title: 'Place of Birth', key: 'place_of_birth' },
    ],
  };
},
```

<examples-basic-columns-underscored class="reset"/>

As you can see strings in the columns array treated as the value of the `title` key. When we want to explicitly state the `key` we must have an object for the item instead of string. In that case we must have the string keyed as `title`. In short `['Age']` equals to `[{ title: 'Age' }]` in columns array perspective.
