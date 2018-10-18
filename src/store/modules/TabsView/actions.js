
export default {
    // 添加tabs view
    addTabsView ({dispatch, commit, state, rootState}, view) {
        return new Promise((resolve, reject) => {
            commit('ADD_CACHED_VIEW', view);
            commit('ADD_OPENED_VIEW', view);
            resolve()
        });
    },
    // 删除tabs view
    delTabsView ({dispatch, commit, state, rootState}, view) {
        return new Promise((resolve, reject) => {
            commit('DEL_CACHED_VIEW', view);
            commit('DEL_OPENED_VIEW', view);
            resolve()
        });
    }
};
