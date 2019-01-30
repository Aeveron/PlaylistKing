import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NotFound from '@/components/error-pages/NotFound';

Vue.use(BootstrapVue);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
