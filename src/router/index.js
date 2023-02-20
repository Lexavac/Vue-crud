import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Dashboard/DataTable.vue";
import CreateView from "../views/Dashboard/CreateData.vue";
import FormEdit from "../views/Dashboard/FormEdit.vue";
import showData from "../views/Dashboard/ShowVue.vue";
import NotFound from "../views/404Nfound.vue";

const routes = [
    {
        path:'/',
        name: 'router',
        component: HomeView
    },
    {
        path:'/create',
        name: 'CreateData',
        component: CreateView
    },
    {
        path:'/edit/:id',
        name: 'editData',
        component: FormEdit
    },
    {
        path:'/show/:id',
        name: 'showData',
        component: showData
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 

  