export default {
  props: {
    // index: {
    //   type: Number,
    //   required: true,
    // },
    // data: {
    //   type: Array,
    //   required: true,
    // },
    row: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emit(eventName, ...args) {
      this.$emit('row-event', eventName, this.row.uid, ...args);
    },
  },
};
