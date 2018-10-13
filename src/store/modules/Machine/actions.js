
import API from '@/api/machine'


// actions
export default {
    // 获取列表
    getList ({dispatch, commit, state, rootState}, queryParam) {
        return new Promise((resolve, reject) => {
            API.getList().then(response => {
                const data = response.data
                console.info(data);
                resolve()
            }).catch(error => {
                reject(error)
            })
        });
    }
};
