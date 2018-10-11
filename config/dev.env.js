'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // 开发环境通过‘/host’字符串转接代理后端服务器
    API_HOST: '"/host"'
})
