// 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
// hidden: true // (默认 false)

// 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
// 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
// 若你想不管路由下面的 children 声明的个数都显示你的根路由
// 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
// alwaysShow: true

import Vue from 'vue'
import Router from 'vue-router'

// 系统级菜单 -- 不会显示在菜单
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Error401 from '@/views/ErrorPage/401'
import Error404 from '@/views/ErrorPage/404'

/* Router Modules */
// 嵌套路由
import nestedRouter from './modules/nested'



Vue.use(Router)

// 框架级路由
export const constantRouterMap = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login'),
        hidden: true
    },
    {
        path: '/dashboard',
        component: () => import('@/views/Layout'),
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/Dashboard'),
                name: 'Dashboard',
                meta: {title: 'Dashboard', icon: 'lock'}
            }
        ]
    },
    {
        path: '/component',
        component: () => import('@/views/Layout'),
        redirect: '/component/dragDialog',
        meta: {title: 'Component', icon: 'star'},
        alwaysShow: true,  // 一直显示根菜单
        children: [
            {
                path: 'dragDialog',
                component: () => import('@/views/Component/dragDialog'),
                name: 'DragDialog',
                meta: {title: 'DragDialog', icon: 'star'}
            },
            {
                path: 'ueditor',
                component: () => import('@/views/Component/ueditor'),
                name: 'UEditor',
                meta: {title: 'UEditor', icon: 'star'}
            }
        ]
    }
]

// 业务级路由（后期可能在界面中动态配置）
export const asyncRouterMap = [
    {
        path: '/maintain',
        component: () => import('@/views/Layout'),
        redirect: '/maintain/list',
        meta: {title: 'Maintain', icon: 'user'},
        children: [
            {
                path: 'list',
                component: () => import('@/views/Maintain/list'),
                name: 'MaintainList',
                meta: {title: 'MaintainList', icon: 'user'}
            },
            {
                path: 'detail/:id(\\d+)',
                component: () => import('@/views/Maintain/detail'),
                name: 'MaintainDetail',
                meta: { title: 'MaintainDetail', icon: 'user', noCache: true },
                hidden: true  // 详情页不在菜单显示
            }
        ]
    },
    {
        path: '/cutter',
        component: () => import('@/views/Layout'),
        redirect: '/cutter/list',
        meta: {title: 'Cutter', icon: 'star'},
        children: [
            {
                path: 'new',
                component: () => import('@/views/Cutter/new'),
                name: 'CutterNew',
                meta: {title: 'CutterNew', icon: 'star'}
            },
            {
                path: 'list',
                component: () => import('@/views/Cutter/list'),
                name: 'CutterList',
                meta: {title: 'CutterList', icon: 'star'}
            },
            {
                path: 'detail/:id(\\d+)',
                component: () => import('@/views/Cutter/detail'),
                name: 'CutterDetail',
                meta: { title: 'CutterDetail', icon: 'star', noCache: true },
                hidden: true  // 详情页不在菜单显示
            }
        ]
    },
    nestedRouter
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
