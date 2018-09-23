import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/common/Main'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'home',
                    component: Home
                }
            ],
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})
