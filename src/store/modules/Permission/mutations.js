import { constantRouterMap } from '@/router'

// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    SET_ROUTERS: (state, addRouters) => {
        // 把标志设置为true，permission.js中会根据这个值进行判断是否需要初始化菜单
        state.initFlag = true
        state.routers = constantRouterMap.concat(addRouters)
    }
};
