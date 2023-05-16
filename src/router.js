import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Galery from "@/views/Galery.vue";
import Contacts from "@/views/Contacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[ {
        path: '/',
        name: 'Home',
        component: Home
    },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/Galery',
            name: 'Galery',
            component: Galery
        },
        {
            path: '/Contacts',
            name: 'Contacts',
            component: Contacts
        }
        ]
})

export default router
