// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

import { BaseTableHead, BaseTableBody } from '../src/main';

import App from './App.vue';

Vue.component('base-table-head', BaseTableHead);
Vue.component('base-table-body', BaseTableBody);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
