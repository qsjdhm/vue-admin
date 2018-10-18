import { setToken } from '@/utils/auth' // getToken from cookie

import API from '@/api/login'


// actions
export default {
    // 登录系统
    loginByUsername ({dispatch, commit, state, rootState}, queryParam) {
        return new Promise((resolve, reject) => {
            API.loginByUsername(queryParam).then(response => {
                commit('SET_TOKEN', '不拽注定被甩~')
                setToken('不拽注定被甩~')
                resolve(response)
            }).catch((e) => {
                reject(e)
            })
        });
    }
};
