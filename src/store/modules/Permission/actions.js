import { constantRouterMap, asyncRouterMap } from '@/router'

export default {
    // 初始化菜单路由
    initRouters ({dispatch, commit, state, rootState}) {
        return new Promise(resolve => {
            // 把业务路由和框架路由合并
            commit('SET_ROUTERS', _.cloneDeep(constantRouterMap.concat(asyncRouterMap)));
            resolve()
        })
    }
};
