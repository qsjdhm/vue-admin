import * as types from './types';
import {Message, MessageBox} from 'element-ui';

import API from '@/api/login'


// actions
export default {
    // 登录系统
    loginByUsername ({dispatch, commit, state, rootState}, queryParam) {
        return new Promise((resolve, reject) => {
            API.loginByUsername(queryParam).then(response => {
                resolve(response)
            })
        });
    }
};
