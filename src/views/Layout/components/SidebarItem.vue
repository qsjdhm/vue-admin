<template>
    <div v-if="!item.hidden" class="sidebar-item-pack">
        <!-- 显示一层菜单 -->
        <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
            <router-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <svg-icon :icon-class="onlyOneChild.meta.icon !== undefined ? onlyOneChild.meta.icon : 'list'" />
                    <span slot="title">{{onlyOneChild.meta.title}}</span>
                </el-menu-item>
            </router-link>
        </template>

        <!-- 显示多级菜单 -->
        <el-submenu v-else ref="submenu" :index="resolvePath(item.path)">
            <template slot="title">
                <svg-icon v-if="item.meta.icon !== undefined" :icon-class="item.meta.icon !== undefined ? item.meta.icon : 'list'" />
                <span slot="title">{{item.meta.title}}</span>
            </template>

            <!-- 一个递归，如果children还有多级子 -->
            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item
                    v-if="child.children && child.children.length > 0"
                    :is-nest="true"
                    :item="child"
                    :key="child.path"
                    :basePath="resolvePath(child.path)"
                    class="nest-menu" />

                    <router-link :to="resolvePath(child.path)" :key="child.name">
                        <el-menu-item :index="resolvePath(child.path)">
                            <!--<svg-icon :icon-class="child.meta.icon" />-->
                            <span slot="title">{{child.meta.title}}</span>
                        </el-menu-item>
                    </router-link>
            </template>
        </el-submenu>
    </div>
</template>

<script>
    import path from 'path'
    import { validateURL } from '@/utils/validate'

    export default {
        name: 'SidebarItem',
        props: {
            item: {
                type: Object,
                required: true
            },
            basePath: {
                type: String,
                required: ''
            }
        },
        data () {
            return {
                onlyOneChild: null
            }
        },
        methods: {
            // 如果只有一个子菜单（不包含hidden的），就把子菜单作为主菜单显示
            hasOneShowingChild (children, parent) {
                if (!children) { return false }
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        this.onlyOneChild = item
                        return true
                    }
                })
                // 当只有一个子路由器时，默认情况下会显示子路由器
                if (showingChildren.length === 1) {
                    return true
                }
                // 如果没有要显示的子路由器，则显示父路由器
                if (showingChildren.length === 0) {
                    this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
                    return true
                }
                return false
            },
            resolvePath (routePath) {
                if (this.isExternalLink(routePath)) {
                    return routePath
                }
                let p = path.resolve(this.basePath, routePath);
                return p
            },
            isExternalLink (routePath) {
                return validateURL(routePath)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "@/styles/mixin.scss";
    /* 因为把item独立为一个组件，所以需要在原来的样式上多加一层选择器‘>.sidebar-item-pack’ */
    .el-menu--collapse>.sidebar-item-pack>.el-menu-item span, .el-menu--collapse>.sidebar-item-pack>.el-submenu>.el-submenu__title span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
    }
    .el-menu--collapse>.sidebar-item-pack>.el-menu-item .el-submenu__icon-arrow, .el-menu--collapse>.sidebar-item-pack>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
        display: none;
    }
    .sidebar-item-pack {
        /* 一级菜单 */
        .el-menu-item {
            height: 50px;
            line-height: 50px;
            svg {
                width: 25px;
                margin-right: 10px !important;
            }
            svg:before {
                color: #bcbcbc !important;
            }
            &:hover {
                background-color: #001529 !important;
                color: #fff !important;
            }
            [class^=el-icon-] {
                margin-right: 10px;
            }
        }
        /* 有子级的菜单 */
        .el-submenu {
            >div {
                height: 50px !important;
                line-height: 50px !important;
            }
            .el-menu-item [class^=el-icon-] {
                margin-right: 10px;
            }
            .el-submenu__title {
                height: 40px;
                line-height: 40px;
                &:hover {
                    background-color: #001529 !important;
                    color: #fff !important;
                }
                svg {
                    margin-right: 10px!important;
                }
                svg:first-child {
                    width: 25px;
                }
                svg:before {
                    color: #94949b !important;
                }
                .el-submenu__icon-arrow {
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            /* 子级的子菜单 */
            .el-menu {
                background-color: #000c17 !important;
                li {
                    background-color: #000c17 !important;
                    font-size: 12px !important;
                    div {
                        /*padding-left: 60px!important;*/
                    }
                }
            }
            .el-menu-item {
                height: 40px;
                line-height: 40px;
                /*padding-left: 60px !important;*/
                svg:before {
                    color: #bcbcbc;
                }
                span {
                    margin-left: 20px;
                }
            }
            /* 子级的子级菜单 */
            .el-submenu {
                >div {
                    height: 40px !important;
                    line-height: 40px !important;
                }
                svg:before {
                    color: #bcbcbc;
                }
                span {
                    margin-left: 20px;
                }
                .el-submenu__title {
                    height: 40px;
                    line-height: 40px;
                    background-color: #000c17 !important;
                    &:hover {
                        background-color: #000c17 !important;
                        color: #fff !important;
                    }
                }
            }
        }
        .is-active {
            color: #fff !important;
            background-image: linear-gradient(-225deg, #108ee9 0%, #32a8fe 100%);
            &:hover {
                color: #fff !important;
                background-image: linear-gradient(-225deg, #108ee9 0%, #32a8fe 100%);
            }
            svg:before {
                color: #fff !important;
            }
        }
    }
</style>
