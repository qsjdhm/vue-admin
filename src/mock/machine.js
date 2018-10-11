
import Mock from 'mockjs';


// 拦截设备相关
Mock.mock(/\/machine\/getList/, 'get', config => {
    console.info(config);
    return 'machine数据----------------------'
});

export default Mock;
