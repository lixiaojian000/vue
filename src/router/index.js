import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/login",
  },
  {
    path: "/login",
    name: "login",
    meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Login
  },
  {
    path: "/home",
    name: "home",
    meta:{index:1},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];
const router = new VueRouter({
  routes,
  //去除浏览器上的#
  mode: "history"
});
router.beforeEach((to, from, next) => {
  //to 要去的路由配置
  //from 当前的路由配置
  //next 一定要调用，让to的路由配置继续生效，比如如果去登陆直接next(),否则判断token是否存在，如果存在就next()
  if (to.path === '/') return next() ;//使用return，不需要写else
  //判断其他页面是否有token
  const token = localStorage.getItem("token");
  //存在继续往后走
  if (token!=="") return next();
  alert("没有token");
})
export default router;
