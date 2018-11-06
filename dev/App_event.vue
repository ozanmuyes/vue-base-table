<template>
  <div class="app">
    <slot-head-table
      :columns="columns"
      :data="data"
      @zaa="onZaa"
    />
  </div>
</template>

<script>
import SlotHeadTable from './components/SlotHeadTable.vue';

export default {
  components: {
    SlotHeadTable,
  },
  data() {
    return {
      columns: [
        { title: 'First Name', sortable: true },
        'Last Name',
        'Instrument',
      ],
      data: [
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
  methods: {
    onZaa(...args) {
      console.log('zaa', args);
    },
  },
};
</script>
