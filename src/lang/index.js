import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en/index'
import zhLocale from './zh/index'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
}

const i18n = new VueI18n({
    // set locale
    // options: en or zh
    locale: Cookies.get('Admin-Language') || 'zh',
    // set locale messages
    messages
})

export default i18n
