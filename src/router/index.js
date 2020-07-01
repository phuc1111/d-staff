/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin_Home from "../views/m001admin/Home.vue";
import M001AdminTimeKeeping from "../views/m001admin/m001AdminTimeKeeping.vue";
import M001AdminUser from "../views/m001admin/m001AdminUser.vue";
import M001AdminAddUser from "../views/m001admin/m001AdminAddUser.vue";
import M001AdminDepartment from "../views/m001admin/m001AdminDepartment.vue";
import M001AdminAddDepart from "../views/m001admin/m001AdminAddDepart.vue";

import M002Login from "../views/m002auth/m002Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "M002Login",
    component: M002Login
  },
  {
    path: "/m001admin",
    name: "Admin_Home",
    component: Admin_Home
  },
  {
    path: "/m001admin-user",
    name: "M001AdminUser",
    component: M001AdminUser
  },

  {
    path: "/m001admin-add-user",
    name: "M001AdminAddUser",
    component: M001AdminAddUser
  },
  {
    path: "/m001admin-add-department",
    name: "M001AdminAddDepart",
    component: M001AdminAddDepart
  },
  {
    path: "/m001admin-department",
    name: "M001AdminDepartment",
    component: M001AdminDepartment
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
