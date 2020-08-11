import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import VueTyperPlugin from 'vue-typer';
import ScrollAnimation from './scrollAnimation';
import ReadMore from 'vue-read-more';

Vue.directive('scrollanimation',ScrollAnimation);
Vue.use(VueTyperPlugin);
Vue.use(Vuetify);
Vue.use(ReadMore);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  
  vuetify : new Vuetify(),
}).$mount('#app')
