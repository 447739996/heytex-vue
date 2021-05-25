import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'vant/lib/button/style';
import Button from 'vant/lib/button';
import router from './router/index'
import axios from 'axios'




import {Grid} from 'vant';
import {GridItem} from 'vant';
import {Swipe,SwipeItem} from 'vant';
import {Row,Col} from 'vant';
import {Cell,CellGroup} from 'vant';
import {Card} from 'vant';
import {Collapse,CollapseItem } from 'vant';
import { Divider } from 'vant';
import {Popup} from 'vant';
import {Icon} from 'vant';
import {Tab,Tabs} from 'vant';
import {Field} from 'vant';
import {Toast} from 'vant';
import { List } from 'vant';


Vue.use(List);
Vue.use(Toast)
Vue.use(Field)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Divider);
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Card)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Button)



Vue.prototype.$axios = axios 
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')