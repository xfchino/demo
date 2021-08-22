import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const AddCategory = () => import("../views/category/AddCategory.vue");
//管理路由
const Management=()=>import('../views/management/Management.vue');
const Setting=()=>import('../views/management/childComp/Setting.vue')
const HomePage=()=>import('../views/HomePage.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/home'
      },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/home",
                name: "HomePage",
                component: HomePage,
            },
            {
                path: "/addcategory",
                name: "AddCategory",
                component: AddCategory,
            },
            {
                path:'/management/list',
                component: Management,
            },
            {
                path:'/management/setting',
                component: Setting,
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
