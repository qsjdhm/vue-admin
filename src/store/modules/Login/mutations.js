import * as types from './types';

// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    [types.SET_IS_IN_SAVE] (state, value) {
        state.isInSave = value;
    }
};
