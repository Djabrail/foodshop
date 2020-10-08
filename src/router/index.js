import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/foods",
    name: "Foods",
    component: () => import("@/views/Foods")
  },
  {
    path: "/foods/:id",
    name: "FoodDetail",
    component: () => import("@/views/FoodDetail")
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("@/views/Basket")
  },
  {
    path: "/order",
    name: "OrderCompleted",
    component: () => import("@/views/OrderCompleted")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
