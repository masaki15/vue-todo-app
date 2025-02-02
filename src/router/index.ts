import {createRouter, createWebHistory} from 'vue-router';

const TodoItemListView = () => import('../views/TodoItemListView.vue');
const LoginView = () => import('../views/LoginView.vue');

const routes = [
    {
        path: '/list',
        name: 'todoItemList',
        component: TodoItemListView
    },
    {
        path: '/',
        name: 'home',
        component: TodoItemListView
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