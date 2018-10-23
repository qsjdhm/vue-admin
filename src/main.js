// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import lodash from 'lodash';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store';

import i18n from './lang' // Internationalization
import './assets/icons' // icon
import './permission' // permission control
// 开发环境下使用mock，其他环境使用真实数据
if (process.env.NODE_ENV === 'development') { require('./mock') }  // mock


Vue.prototype._ = lodash;
Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})

