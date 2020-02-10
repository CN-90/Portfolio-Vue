import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from '../src/pages/home/Home';
import Projects from '../src/pages/projects/Projects';
import Project from '../src/components/project/Project';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', name: 'projects', component: Project, props: true }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
