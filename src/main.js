import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { Message } from 'element-ui';

// 引入echarts4.9版本
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.prototype.$message = Message;
import 'assets/css/base.css';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



