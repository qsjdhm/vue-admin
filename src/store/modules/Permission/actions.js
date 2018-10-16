import { asyncRouterMap } from '@/router'

export default {
    // 初始化菜单路由
    initRouters ({dispatch, commit, state, rootState}) {
        return new Promise(resolve => {
            /**
             * 如果有通过页面添加菜单的功能，可以在这里请求保存在后台数据库的菜单数据
             * 然后再进行添加
             */
            // 把业务路由和框架路由合并
            commit('SET_ROUTERS', asyncRouterMap);
            resolve()
        })
    }
};
