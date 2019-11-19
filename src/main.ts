import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
