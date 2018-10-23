// 根据router.meta.title作为参数，返回对应中英文， 需搭配vue-i18n使用
// 用于侧边栏和路由面包屑
export function generateTitle (title) {
    const hasKey = this.$te('route.' + title)
    const translatedTitle = this.$t('route.' + title)

    if (hasKey) {
        return translatedTitle
    }
    return title
}
