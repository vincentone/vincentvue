/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-04 17:03:24
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-11 11:38:05
 * @FilePath: /vincentvue/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import router from './router'
import http from "@/api/http-api";
Vue.prototype.$http = http;//请求接口api

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
