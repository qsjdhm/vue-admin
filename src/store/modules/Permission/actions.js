import { constantRouterMap, asyncRouterMap } from '@/router'

export default {
    // 初始化菜单路由
    initRouters ({dispatch, commit, state, rootState}) {
        return new Promise(resolve => {
            console.info(2222222222222222222222222);
            console.info(constantRouterMap);
            console.info(asyncRouterMap);
            // 把业务路由和框架路由合并
            commit('SET_ROUTERS', constantRouterMap.concat(asyncRouterMap));
            resolve()
        })
    }
};
