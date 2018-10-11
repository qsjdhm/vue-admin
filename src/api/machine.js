import request from '@/utils/request'

export default {
    getList () {
        return request({
            url: '/machine/getList',
            method: 'get'
        })
    }
}
