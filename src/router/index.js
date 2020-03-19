import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue"
import Dashboard from '../components/Dashboard.vue'
import Users from '../components/user/Users.vue'
import UserList from '../components/user/UserList.vue'
import CommentList from '../components/comment/List.vue'
import CommentSta from '../components/comment/Sta.vue'
import Role from '../components/system/Role.vue'
import Rights from '../components/power/Rights.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path:'/home',
    component:Home,
    redirect: '/dashboard',
    children: [
        { path: '/dashboard', component: Dashboard },
        { path: '/user/sta' , component :Users},
        { path: '/user/lists' , component :UserList},
        { path: '/comment/list' , component :CommentList},
        { path: '/comment/sta' , component :CommentSta},
        { path: '/system/role' , component : Role},
        { path: '/system/permission', component : Rights}
    ]
  }
  
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next()
  const tokenStr = window.localStorage.getItem("Authorization")
  if(!tokenStr) return next("/login")
  next()
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
//   router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


export default router;
