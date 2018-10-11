/**
 * Created by zhangyan on 17/11/1.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middlewares';
import createLogger from 'vuex/dist/logger';

import * as state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

/**
 * 引入业务页面模块
 */
import Login from './modules/Login';
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
    actions,
    mutations,
    modules: {
        Login,
        Machine
    },
    strict: debug,
    middlewares: middlewares
    // ,
    // plugins: [createLogger()]
});

