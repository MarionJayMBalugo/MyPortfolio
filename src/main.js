import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import VueTyperPlugin from 'vue-typer';
import ScrollAnimation from './scrollAnimation';

Vue.directive('scrollanimation',ScrollAnimation);
Vue.use(VueTyperPlugin);
Vue.use(Vuetify);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  
  vuetify : new Vuetify(),
}).$mount('#app')
