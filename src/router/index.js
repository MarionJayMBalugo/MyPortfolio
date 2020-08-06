import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/HelloWorld';
import Home from '@/components/HomeComponent'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/dashboard', name:'dashboard',component:Dashboard},
        {path:'/home', name:'home', component: Home}
    ]
})