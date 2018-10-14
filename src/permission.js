/**
 * 初始化路由权限
 */
import { getToken } from '@/utils/auth' // getToken from cookie

import router from './router'
import store from './store'

// 免登陆白名单
const whiteList = ['/']

router.beforeEach((to, from, next) => {
    // token没有用户信息，代表没有登录过
    if (!getToken()) {
        // 在免登录白名单，直接进入
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            // 否则全部重定向到登录页
            next(`/?redirect=${to.path}`)
        }
    } else {
        // 如果store中没有路由数据，就初始化路由
        if (store.state.Permission.routers.length === 0) {
            // 初始化菜单路由
            store.dispatch('Permission/initRouters').then(() => {
                // 动态添加可访问路由表
                router.addRoutes(_.cloneDeep(store.state.Permission.routers))
                // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true })
            }).catch((error) => {
                console.error(error)
                next()
            });
        } else {
            // 如果有，直接next
            next()
        }
    }
})

