
// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    SET_ROUTERS: (state, value) => {
        state.routers = _.cloneDeep(value);
        console.info(state.routers);
    }
};
