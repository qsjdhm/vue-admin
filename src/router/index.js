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
        component: Login,
        hidden: true
    },
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/Dashboard'),
                name: 'Dashboard',
                meta: {title: 'Dashboard', icon: 'dashboard'}
            }
        ]
    }
]

// 业务级路由（后期可能在界面中动态配置）
export const asyncRouterMap = [
    {
        path: '/maintain',
        component: Layout,
        redirect: '/maintain/list',
        meta: {title: 'Maintain', icon: 'dashboard'},
        // alwaysShow: true,  // 是否要一直显示根菜单
        children: [
            {
                path: 'list',
                component: () => import('@/views/Maintain/list'),
                name: 'MaintainList',
                meta: {title: 'MaintainList', icon: 'dashboard'}
            },
            {
                path: 'detail/:id(\\d+)',
                component: () => import('@/views/Maintain/detail'),
                name: 'MaintainDetail',
                meta: { title: 'MaintainDetail', icon: 'dashboard' },
                hidden: true  // 详情页不在菜单显示
            }
        ]
    },
    {
        path: '/cutter',
        component: Layout,
        redirect: '/cutter/list',
        meta: {title: 'Cutter', icon: 'dashboard'},
        children: [
            {
                path: 'new',
                component: () => import('@/views/Cutter/new'),
                name: 'CutterNew',
                meta: {title: 'CutterNew', icon: 'dashboard'}
            },
            {
                path: 'list',
                component: () => import('@/views/Cutter/list'),
                name: 'CutterList',
                meta: {title: 'CutterList', icon: 'dashboard'}
            },
            {
                path: 'detail/:id(\\d+)',
                component: () => import('@/views/Cutter/detail'),
                name: 'CutterDetail',
                meta: { title: 'CutterDetail', icon: 'dashboard' },
                hidden: true  // 详情页不在菜单显示
            }
        ]
    },
    {
        path: '/analyze',
        component: Layout,
        redirect: '/analyze/use',
        meta: {title: 'Analyze', icon: 'dashboard'},
        children: [
            {
                path: 'use',
                component: () => import('@/views/Analyze/use'),
                name: 'AnalyzeUse',
                meta: {title: 'AnalyzeUse', icon: 'dashboard'}
            },
            {
                path: 'data',
                component: () => import('@/views/Analyze/dataList'),
                name: 'AnalyzeData',
                meta: {title: 'AnalyzeData', icon: 'dashboard'}
            },
            {
                path: 'dataDetail/:id(\\d+)',
                component: () => import('@/views/Analyze/dataDetail'),
                name: 'AnalyzeDataDetail',
                meta: {title: 'AnalyzeDataDetail', icon: 'dashboard'},
                hidden: true
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
