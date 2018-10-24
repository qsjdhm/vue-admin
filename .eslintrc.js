// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'no-console': 0,//禁止使用console
        'no-const-assign': 2,//禁止修改const声明的变量
        'no-multi-spaces': 0,//不能用多余的空格
        'semi': [0, 'always'],//语句强制分号结尾
        'no-undef': 0,//不能有未定义的变量
        'no-multiple-empty-lines': [0, {'max': 2}],//空行最多不能超过2行
        'spaced-comment': 0,//注释风格要不要有空格什么的
        'no-unused-vars': 0,//不能有声明后未被使用的变量或参数

        // allow async-await
        'generator-star-spacing': 0,
        'indent': ['error', 4],
        'no-trailing-spaces': 2,//一行结束后面不要有空格
        'arrow-spacing': 2,//=>的前/后括号
        'no-useless-escape': 0,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
