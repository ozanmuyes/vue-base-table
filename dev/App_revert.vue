<!--
NOTE This file is for development purposes only.
     Anything meaningful should have it's own
     file in the examples directory.
     Run 'npm run dev'.
-->

<template>
  <div class="app">
    <base-table :data="tableData"/>
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
        {
          firstName: 'John',
          lastName: 'Lennon',
          instrument: 'Rhythm Guitar',
        },
        {
          firstName: 'Paul',
          lastName: 'McCartney',
          instrument: 'Bass',
        },
        {
          firstName: 'George',
          lastName: 'Harrison',
          instrument: 'Lead Guitar',
        },
        {
          firstName: 'Ringo',
          lastName: 'Starr',
          instrument: 'Drums',
        },
      ],
    };
  },
};
</script>
