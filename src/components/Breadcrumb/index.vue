<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if='item.meta.title'>
                <span v-if='index==levelList.length-1' class="no-redirect">{{generateTitle(item.meta.title)}}</span>
                <router-link v-else :to="{ path: item.path }">{{generateTitle(item.meta.title)}}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import { generateTitle } from '@/utils/i18n'


export default {
    data () {
        return {
            levelList: null
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb () {
            const { params } = this.$route
            let matched = this.$route.matched.filter(item => {
                if (item.name) {
                    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
                    var toPath = pathToRegexp.compile(item.path)
                    item.path = toPath(params)
                    return true
                }
            })
            const first = matched[0]
            if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
                matched = [{
                    path: '/dashboard',
                    meta: { title: 'dashboard' }
                }].concat(matched);
            }
            this.levelList = matched
        },
        generateTitle
    },
    created () {
        this.getBreadcrumb()
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 0;
        .no-redirect {
            color: #606266;
            cursor: text;
        }
    }
    //globl transition css

    /*fade*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.28s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    /*fade*/
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .5s;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }

    .breadcrumb-move {
        transition: all .5s;
    }

    .breadcrumb-leave-active {
        position: absolute;
    }

    /*.router-link-active {
        color: #eee;
    }*/


</style>
