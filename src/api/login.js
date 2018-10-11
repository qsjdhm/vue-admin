import request from '@/utils/request'

export default {
    loginByUsername (param) {
        const data = {
            username: param.username,
            password: param.password
        }
        return request({
            url: `${process.env.API_HOST}/auth/login`,
            method: 'post',
            data
        })
    },
    logout () {
        return request({
            url: '/login/logout',
            method: 'post'
        })
    },
    getUserInfo (token) {
        return request({
            url: '/user/info',
            method: 'get',
            params: { token }
        })
    }
}
