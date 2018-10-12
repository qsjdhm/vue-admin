/**
 * Created by qsjdhm@163.com on 18/10/12.
 */

export default {
    // 修改菜单是否展开和隐藏
    toggleSideBar ({dispatch, commit, state, rootState}, value) {
        commit('TOGGLE_SIDEBAR', value);
    }
};
