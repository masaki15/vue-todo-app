import {createRouter, createWebHistory} from 'vue-router';

const ToDoItemListView = () => import('../views/ToDoItemListView.vue');
const LoginView = () => import('../views/LoginView.vue');

const routes = [
    {
        path: '/list',
        name: 'todoItemList',
        component: ToDoItemListView
    },
    {
        path: '/',
        name: 'home',
        component: ToDoItemListView
    }, {
        path: '/login',
        name: 'login',
        component: LoginView
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;