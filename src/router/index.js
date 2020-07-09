/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
const M002Login = () => import(/* webpackChunkName: "M002Login"*/ '@/views/m002auth/m002Login')
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home"*/ '@/views/Home')
  },
  {
    path: "/login",
    name: "M002Login",
    component: M002Login
    //component: () => import(/* webpackChunkName: "Home"*/ '@/views/m002auth/m002Login')
  },
  {
    path: "/m001admin",
    name: "Admin_Home",
    component: () => import(/* webpackChunkName: "Admin_Home"*/ '@/views/m001admin/Home')
  },
  {
    path: "/m001admin-user",
    name: "M001AdminUser",
    component: () => import(/* webpackChunkName: "M001AdminUser"*/ '@/views/m001admin/m001user/m001AdminUser')
  },

  {
    path: "/m001admin-add-user",
    name: "M001AdminAddUser",
    component: () => import(/* webpackChunkName: "M001AdminAddUser"*/ '@/views/m001admin/m001user/m001AdminAddUser')
  },
  {
    path: "/m001admin-add-department",
    name: "M001AdminAddDepart",
    component: () => import(/* webpackChunkName: "M001AdminAddDepart"*/ '@/views/m001admin/m001Department/m001AdminAddDepart')
  },
  {
    path: "/m001admin-update-department/:id",
    name: "M001AdminUpdateDepart",
    component: () => import(/* webpackChunkName: "M001AdminUpdateDepart"*/ '@/views/m001admin/m001Department/m001AdminUpdateDepart')
  },
  {
    path: "/m001admin-department",
    name: "M001AdminDepartment",
    component: () => import(/* webpackChunkName: "M001AdminDepartment"*/ '@/views/m001admin/m001Department/m001AdminDepartment')
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
