/**
 * Created by zhangyan on 17/11/1.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middlewares';
import createLogger from 'vuex/dist/logger';

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


/**
 * 引入业务页面模块
 */
import User from './modules/User';
import Permission from './modules/Permission';
import Machine from './modules/Machine';

/**
 * 使用vuex
 */
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        User,
        Permission,
        Machine
    },
    strict: debug,
    middlewares: middlewares,
    plugins: [createLogger()]
});

