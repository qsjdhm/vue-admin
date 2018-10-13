<template>
    <div class="navbar-pack">
        <div class="left-pack">
            <div class="fold-pack" @click="toggleSideBar">
                <svg-icon icon-class="fold" :class="{ 'inverse': sidebarClosed }"></svg-icon>
            </div>
            <div class="crumbs-pack">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="tools-pack">
            <div class="warning-pack zoom">
                <svg-icon icon-class="warning"></svg-icon>
            </div>
            <div class="question-pack">
                <el-tooltip class="item" effect="dark" content="使用文档" placement="bottom">
                    <svg-icon icon-class="question"></svg-icon>
                </el-tooltip>
            </div>
            <div class="message-pack">
                <svg-icon icon-class="message"></svg-icon>
            </div>
            <div class="full-pack">
                <el-tooltip class="item" effect="dark" content="全屏展示" placement="bottom">
                    <svg-icon icon-class="full"></svg-icon>
                </el-tooltip>
            </div>
            <div class="avatar-pack">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <img :src="require(`../../../assets/images/Layout/avatar.png`)">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>待办任务</el-dropdown-item>
                        <el-dropdown-item>触发报错</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="language-pack">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        中文<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>English</el-dropdown-item>
                        <el-dropdown-item :disabled="true">中文</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Navbar',
        data () {
            return {
            }
        },
        computed: {
            ...mapState({
                sidebarClosed: state => state.sidebarClosed
            })
        },
        methods: {
            toggleSideBar () {
                console.info(this.sidebarClosed);
                this.$store.dispatch('toggleSideBar', !this.sidebarClosed)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar-pack {
        position: absolute;
        left: 0;
        right: 0;
        height: 64px;
        padding: 0 20px 0 0;
        background: #fff;
        border-bottom: 1px solid #f0f2f5;
        /*-webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);*/
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-pack {
            display: -webkit-flex;
            display: flex;
            align-items: center;
            .fold-pack {
                font-size: 20px;
                height: 64px;
                cursor: pointer;
                -webkit-transition: all .3s,padding 0s;
                transition: all .3s,padding 0s;
                padding: 22px 24px;
                &:hover {
                    background-color: #f7f7f7;
                }
            }
            .crumbs-pack {
                .el-breadcrumb {
                    font-size: 16px;
                }
            }
        }

        .tools-pack {
            display: -webkit-flex;
            display: flex;
            align-items: center;
            .warning-pack, .full-pack, .question-pack, .message-pack, .avatar-pack {
                cursor: pointer;
                margin-right: 25px;
                font-size: 24px;
            }
            .avatar-pack {
                font-size: 16px;
                img {
                    width: 48px;
                    height: 48px;
                }
            }
            .language-pack {
                font-size: 18px;
                margin-right: 0;
            }
        }
    }
</style>
