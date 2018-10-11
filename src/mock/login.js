import Mock from 'mockjs';

const userMap = {
    admin: {
        roles: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    editor: {
        roles: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

// 拦截接口
// 当跟后台联调真实数据时，直接注释掉对应接口的拦截就可以了
// Mock.mock(/\/auth\/login/, 'post', config => {
//     console.info(config);
//     const { username } = JSON.parse(config.body)
//     return userMap[username]
// });
Mock.mock(/\/login\/logout/, 'post', 'ok');
Mock.mock(/\/user\/info\.*/, 'get', 'asdkbajshbd');

export default Mock;
