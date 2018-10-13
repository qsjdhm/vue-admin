// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    SET_IS_IN_SAVE (state, value) {
        state.isInSave = value;
    }
};
