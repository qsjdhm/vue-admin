<template>
    <div class="navbar-pack">
        <div class="left-pack">
            <div class="fold-pack" @click="toggleSideBar">
                <svg-icon icon-class="fold" :class="{ 'inverse': sidebarClosed }"></svg-icon>
            </div>
            <div class="crumbs-pack">
                <breadcrumb class="breadcrumb-container"/>
            </div>
        </div>
        <div class="tools-pack">
            <!--<div class="warning-pack zoom">-->
            <div class="warning-pack">
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
            <div @click="fullClick" class="full-pack">
                <el-tooltip class="item" effect="dark" content="全屏展示" placement="bottom">
                    <svg-icon icon-class="full"></svg-icon>
                </el-tooltip>
            </div>
            <div class="language-pack">
                <el-dropdown @command="languageCommand">
                    <span class="el-dropdown-link">
                        {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="en" :disabled="enDisabled">English</el-dropdown-item>
                        <el-dropdown-item command="zh" :disabled="znDisabled">中文</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="avatar-pack">
                <el-dropdown @command="dropdownCommand">
                    <span class="el-dropdown-link">
                        <img :src="require(`../../../assets/images/Layout/avatar.png`)">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="center">个人中心</el-dropdown-item>
                        <el-dropdown-item command="backlog">待办任务</el-dropdown-item>
                        <el-dropdown-item command="error">触发报错</el-dropdown-item>
                        <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import screenfull from 'screenfull'
    import Cookies from 'js-cookie'
    // 引入路由面包屑组件
    import Breadcrumb from '@/components/Breadcrumb'

    export default {
        name: 'Navbar',
        components: {
            Breadcrumb
        },
        data () {
            return {
                language: '',
                enDisabled: false,
                znDisabled: false
            }
        },
        computed: {
            ...mapState({
                sidebarClosed: state => state.sidebarClosed
            })
        },
        methods: {
            toggleSideBar () {
                this.$store.dispatch('toggleSideBar', !this.sidebarClosed)
            },
            fullClick () {
                if (!screenfull.enabled) {
                    this.$message({
                        message: '你的浏览器不能使用此功能，请升级为最新版本',
                        type: 'warning'
                    })
                    return false
                }
                screenfull.toggle()
                this.toggleSideBar()
            },
            // 多语言切换事件
            languageCommand (command) {
                if (command === 'en') {
                    Cookies.set('Admin-Language', 'en')
                    this.$i18n.locale = 'en'
                    this.language = 'English'
                    this.enDisabled = true;
                    this.znDisabled = false;
                } else {
                    Cookies.set('Admin-Language', 'zh')
                    this.$i18n.locale = 'zh'
                    this.language = '中文'
                    this.enDisabled = false;
                    this.znDisabled = true;
                }
            },
            // 个人配置事件
            dropdownCommand (command) {
                if (command === 'password') {
                    // 修改密码
                    this.passwordDialogVisible = true;
                } else if (command === 'logout') {
                    // 退出
                    this.logoutClick();
                }
            },
            // 退出
            logoutClick () {
                Cookies.remove('Admin-Token')
                Cookies.remove('Admin-Language')
                // 为了避免bug,重新实例化vue-router对象
                location.reload()
            }
        },
        mounted () {
            if (Cookies.get('Admin-Language') === 'en') {
                this.language = 'English'
                this.enDisabled = true;
                this.znDisabled = false;
            } else {
                this.language = '中文'
                this.enDisabled = false;
                this.znDisabled = true;
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
                padding-top: 10px;
                .el-breadcrumb {
                    font-size: 16px;
                }
            }
        }

        .tools-pack {
            display: -webkit-flex;
            display: flex;
            align-items: center;
            .warning-pack, .full-pack, .question-pack, .message-pack, .language-pack, .avatar-pack {
                cursor: pointer;
                margin-right: 25px;
                font-size: 24px;
            }
            .language-pack {
                font-size: 18px;
                margin-right: 0;
                margin-right: 15px;
            }
            .avatar-pack {
                margin-right: 0;
                font-size: 16px;
                img {
                    width: 38px;
                    height: 38px;
                }
            }
        }
    }
</style>
