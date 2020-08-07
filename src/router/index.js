import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HomeComponent';
import Skills from '@/components/SkillComponent';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '*',
            name: 'home',
            component: Home
        },

    ]
})