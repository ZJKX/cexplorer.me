import Vue from 'vue'
import VueRouter from 'vue-router'


// 实现路由懒加载
const Home = () => import('../components/content/Home');
const about = () => import('../components/common/about');
const upViews = () => import('../components/content/upcontent/upViews');
const upCompreEval = () => import('../components/content/upcontent/upCompreEval');
const nodata = () => import('../components/common/nodata');


Vue.use(VueRouter);

//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err)
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err)
};



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
    name:'nodata',
    path: '/nodata',
    component: nodata,
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
    ],

  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
