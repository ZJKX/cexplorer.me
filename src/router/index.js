import Vue from 'vue'
import VueRouter from 'vue-router'


// 实现路由懒加载
const Home = () => import('../components/content/Home');
const about = () => import('../components/content/about');
const upViews = () => import('../components/content/upViews');




Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    component: Home,
  },

  {
    path: '/about',
    component: about,
  },
  {
    path: '/user/:uid',
    component: upViews,
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
