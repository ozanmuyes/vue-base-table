<script>
import { getLevels } from './BaseTableHead/utils';

export default {
  name: 'BaseTableHead',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    //
  },
  render(createElement) {
    // FIXME Only first-level columns can be sorted (e.g. Name, Instrument)

    const self = this;

    const levels = getLevels(this.columns);

    const trs = [];
    levels.forEach((level) => {
      const ths = [];
      if (this.$slots.left) {
        ths.push(this.$slots.left);
      }
      level.forEach((item) => {
        const dataObj = {
          // See https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
          attrs: item.attrs,
          // class: {
          //   'is-sortable': item.data.sortable,
          //   //
          // },
        };

        if (item.data.sortable) {
          if (!dataObj.on) {
            dataObj.on = {};
          }

          dataObj.on.click = (event /* MouseEvent */) => {
            self.$emit('click', event, item.data);
          };
        }

        //

        ths.push(createElement('th', dataObj, item.data.title));
      });
      if (this.$slots.right) {
        ths.push(this.$slots.right);
      }

      trs.push(createElement('tr', {}, ths));
    });

    return createElement('thead', {}, trs);
  },
};
</script>
