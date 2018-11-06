# Simple

To display the data as is just use this;

```html
<template>
  <base-table :data="tableData"/>
</template>

<script>
export default {
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

This will give you the following;

<examples-basic-simple class="reset"/>

The output seems exactly like a regular GitHub-flavored Markdown table;

<pre>
|Full Name|Age|Place Of Birth|
|----|---|--------------|
|John Doe|42|Hamburg|
|Jane Doe|36|Salvador|
|Johnny Doe|15|Jinan|
|John Roe|42|Belgrade|
|Jane Roe|36|Patna|
|Richard Roe|78|Nanjing|
</pre>

and it will render as;

|Full Name|Age|Place Of Birth|
|----|---|--------------|
|John Doe|42|Hamburg|
|Jane Doe|36|Salvador|
|Johnny Doe|15|Jinan|
|John Roe|42|Belgrade|
|Jane Roe|36|Patna|
|Richard Roe|78|Nanjing|

::: tip
You can see the difference between the two tables above if you have Vue Developer Tools installed.
:::
