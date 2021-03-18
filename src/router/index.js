import Vue from 'vue'
import VueRouter from 'vue-router'


// 实现路由懒加载
const Home = () => import('../components/content/Home');
const about = () => import('../components/common/about');
const upViews = () => import('../components/content/upcontent/upViews');
const upCompreEval = () => import('../components/content/upcontent/upCompreEval');



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
    name: 'user',
    path: '/user/:uid',
    component: upViews,
    children: [
      {
        path : "upCompreEval",
        component : upCompreEval
      },
    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
