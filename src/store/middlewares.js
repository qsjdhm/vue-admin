/**
 * Created by zhangyan on 17/2/21.
 */
import createLogger from 'vuex/dist/logger';

export default process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : [];
