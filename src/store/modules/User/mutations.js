// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    SET_TOKEN (state, value) {
        state.token = value;
    },
    SET_NAME (state, value) {
        state.name = value;
    },
    SET_AVATAR (state, value) {
        state.avatar = value;
    }
};
