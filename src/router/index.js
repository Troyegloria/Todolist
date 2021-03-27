/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import register from '@/views/register.vue'
import Login from '@/views/Login'
import menu from '@/views/menu'
import cal from '@/views/cal'

Vue.use(Router)
const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: register
    },{
        path: '/Login',
        component: Login
    },{
        path: '/menu',
        component: menu
    },{
        path: '/cal',
        component: cal
    }
]
export default new Router({
    routes
})