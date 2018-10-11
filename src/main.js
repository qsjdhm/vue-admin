// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store';

import './assets/icons' // icon
// 开发环境下使用mock，其他环境使用真实数据
if (process.env.NODE_ENV === 'development') { require('./mock') }  // mock


Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
