// import {
//   BaseTable,
//   BaseTableHead,
//   BaseTableBody,
// } from './main';
import * as m from './main';

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  // GlobalVue.use(plugin);
  GlobalVue.component('base-table', m.BaseTable);
  GlobalVue.component('base-table-head', m.BaseTableHead);
  GlobalVue.component('base-table-body', m.BaseTableBody);
}

// TODO Maybe no need to export components, only mixins
export default {
  TableMixin: m.BaseTableMixin,
  // TODO Other mixins
  RowMixin: m.BaseTableRowMixin,
};
