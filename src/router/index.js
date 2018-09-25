import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/common/Main'
import HomeDashboard1 from '@/pages/home/HomeDashboard1'
import HomeDashboard2 from '@/pages/home/HomeDashboard2'
import HomeDashboard3 from '@/pages/home/HomeDashboard3'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Main,
            children: [
                {
                    path: 'homeDashboard1',
                    component: HomeDashboard1
                },
                {
                    path: 'homeDashboard2',
                    component: HomeDashboard2
                },
                {
                    path: 'homeDashboard3',
                    component: HomeDashboard3
                }
            ]
        },
        {
            path: '/',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'homeDashboard1',
                    component: HomeDashboard1
                }
            ],
            redirect: '/homeDashboard1'
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
