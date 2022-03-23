/*
 * @Author: your name
 * @Date: 2022-03-22 16:21:20
 * @LastEditTime: 2022-03-23 19:14:35
 * @LastEditors: 执手天涯
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \music\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
// 导入reset.css
import '@/styles/reset.css'
// 导入手机端的自适应js
import '@/mobile/flexible.js'
// 导入路由对象
import router from '@/route/index'
Vue.config.productionTip = false
// 按需导入vant组件
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Col,
  Row,
  Image as VanImage,
  Cell,
  CellGroup,
  Icon,
  Search,
  List,
} from 'vant';
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(List);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')