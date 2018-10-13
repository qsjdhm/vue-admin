/**
 * 过滤白名单等权限
 */
import router from './router'
import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    // 初始化菜单路由
    store.dispatch('Permission/initRouters').then(() => {
        // 动态添加可访问路由表
        router.addRoutes(store.state.Permission.routers)
        next()
    }).catch((error) => {
        console.error(error)
        next()
    });
})

