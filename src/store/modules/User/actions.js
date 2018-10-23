import Cookies from 'js-cookie'
import API from '@/api/login'

// actions
export default {
    // 登录系统
    loginByUsername ({dispatch, commit, state, rootState}, queryParam) {
        return new Promise((resolve, reject) => {
            API.loginByUsername(queryParam).then(response => {
                commit('SET_TOKEN', response.token)
                Cookies.set('Admin-Token', response.token)
                resolve(response)
            }).catch((e) => {
                reject(e)
            })
        });
    }
};
