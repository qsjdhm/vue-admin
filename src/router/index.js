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

// 业务级菜单 -- 根据不同业务需要显示在菜单
// 仪表盘
import Dashboard from '@/views/Dashboard'
// 设备维修（直接显示一个菜单）
import MaintainList from '@/views/Maintain/list'
import MaintainDetail from '@/views/Maintain/detail'
// 刀具管理（菜单显示new、list，detail在list中点击出现）
import CutterNew from '@/views/Cutter/new'
import CutterList from '@/views/Cutter/list'
import CutterDetail from '@/views/Cutter/detail'
// 设备分析
import AnalyzeUse from '@/views/Analyze/use'
import AnalyzeData from '@/views/Analyze/data'
import AnalyzeDataDetail from '@/views/Analyze/dataDetail'


Vue.use(Router)

// 框架级路由
export const constantRouterMap = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        hidden: true
    },
    nestedRouter,
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                component: Dashboard,
                name: 'Dashboard',
                meta: {title: 'Dashboard', icon: 'dashboard'}
            }
        ]
    },
    {
        path: '/maintain',
        component: Layout,
        redirect: '/maintain/list',
        children: [
            {
                path: 'list',
                component: MaintainList,
                name: 'MaintainList',
                meta: {title: 'MaintainList', icon: 'dashboard'}
            },
            {
                path: 'detail/:id(\\d+)',
                component: MaintainDetail,
                name: 'MaintainDetail',
                meta: { title: 'MaintainDetail', icon: 'dashboard' },
                hidden: true  // 详情页不在菜单显示
            }
        ]
    }
]

// 业务级路由（后期可能在界面中动态配置）
export const asyncRouterMap = [
    // {
    //     path: '/maintain',
    //     component: Layout,
    //     redirect: '/maintain/list',
    //     children: [
    //         {
    //             path: 'list',
    //             component: MaintainList,
    //             name: 'MaintainList',
    //             meta: {title: 'MaintainList', icon: 'dashboard'}
    //         },
    //         {
    //             path: 'detail/:id(\\d+)',
    //             component: MaintainDetail,
    //             name: 'MaintainDetail',
    //             meta: { title: 'MaintainDetail', icon: 'dashboard' },
    //             hidden: true  // 详情页不在菜单显示
    //         }
    //     ]
    // }
]

export default new Router({
    // mode: 'history', // require service support
    routes: constantRouterMap
})
