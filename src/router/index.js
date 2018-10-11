import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Layout from '@/views/Layout'

import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '',
            name: 'Layout',
            component: Layout,
            redirect: 'dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: Dashboard,
                    name: 'Dashboard',
                    meta: {title: 'dashboard', icon: 'dashboard'}
                }
            ]
        }
    ]
})
