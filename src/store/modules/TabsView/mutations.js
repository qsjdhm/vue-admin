// mutations
// action会发送请求到此，在此对state的值做设置处理
export default {
    ADD_CACHED_VIEW: (state, view) => {
        if (state.cachedViews.indexOf(view.name) > -1) { return false }
        if (!view.meta.noCache) {
            state.cachedViews.push(view.name)
        }
    },
    DEL_CACHED_VIEW: (state, view) => {
        for (const i of state.cachedViews) {
            if (i === view.name) {
                const index = state.cachedViews.indexOf(i)
                state.cachedViews.splice(index, 1)
                break
            }
        }
    },
    ADD_OPENED_VIEW: (state, view) => {
        if (state.openedViews.some(v => v.path === view.path)) { return false }
        // 合并一下数据
        let viewBackup = Object.assign({}, {
            fullPath: _.cloneDeep(view.fullPath),
            hash: _.cloneDeep(view.hash),
            meta: _.cloneDeep(view.meta),
            name: _.cloneDeep(view.name),
            params: _.cloneDeep(view.params),
            path: _.cloneDeep(view.path),
            query: _.cloneDeep(view.query)
        }, {
            title: view.meta.title || '暂无标题'
        })
        state.openedViews.push(viewBackup)
    },
    DEL_OPENED_VIEW: (state, delViewPath) => {
        for (const [i, v] of state.openedViews.entries()) {
            // 删除已打开的view需要根据path判断，因为后期打开详情页时可能会把一些信息写到title上
            // 例如：设备详情-840D机床、设备详情-卧式机床001
            if (v.path === delViewPath) {
                state.openedViews.splice(i, 1)
                break
            }
        }
    }
};
