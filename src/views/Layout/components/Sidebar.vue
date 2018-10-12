<template>
    <div class="sidebar-pack" :style="{'width': sidebarClosed ? '64px' : '256px'}">
        <div class="logo-pack">
            <img :src="require(`../../../assets/images/layout/logo.png`)">
            <h1 :style="{'display': sidebarClosed ? 'none' : ''}">软件园监控</h1>
        </div>
        <div class="menu-pack">
            <el-menu
                :collapse="sidebarClosed"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#001529"
                text-color="#bcbcbc"
                active-text-color="#fff">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Sidebar',
        computed: {
            ...mapState({
                sidebarClosed: state => state.sidebarClosed
            })
        },
        methods: {
            handleOpen (key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose (key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/styles/mixin.scss";
    .sidebar-pack {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 10;
        background-color: #001529;
        -webkit-box-sizing: 2px 0 6px rgba(0,21,41,.35);
        -moz-box-sizing: 2px 0 6px rgba(0,21,41,.35);
        -ms-box-sizing: 2px 0 6px rgba(0,21,41,.35);
        -o-box-sizing: 2px 0 6px rgba(0,21,41,.35);
        box-shadow: 2px 0 6px rgba(0,21,41,.35);

        .logo-pack {
            @include rdc-box-sizing;
            position: relative;
            width: 100%;
            height: 64px;
            line-height: 64px;
            padding-left: 17px;
            background: #002140;
            img {
                display: inline-block;
                vertical-align: middle;
                height: 32px;
            }
            h1 {
                color: #fff;
                display: inline-block;
                vertical-align: middle;
                font-size: 20px;
                margin: 0 0 0 12px;
                font-family: Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;
                font-weight: 600;
            }
        }

        .menu-pack {
            position: absolute;
            top: 64px;
            bottom: 0;
            width: 100%;
            overflow-x: hidden;
            .el-menu {
                border-right: 0px solid #333440;

                .el-menu-item {
                    height: 50px;
                    line-height: 50px;
                    i:first-child {
                        width: 25px;
                    }
                    i:before {
                        color: #bcbcbc !important;
                    }
                    &:hover {
                        background-color: #001529 !important;
                        color: #fff !important;
                    }
                }
                .el-menu-item [class^=el-icon-] {
                    margin-right: 10px;
                }
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
                            background-color: #000c17 !important;
                            color: #fff !important;
                        }
                        i {
                            margin-right: 10px!important;
                        }
                        i:first-child {
                            width: 25px;
                        }
                        i:before {
                            color: #94949b !important;
                        }
                        .el-submenu__icon-arrow {
                            font-size: 14px;
                            font-weight: bold;
                        }
                    }
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
                        i:before {
                            color: #bcbcbc;
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
                    i:before {
                        color: #fff !important;
                    }
                }
            }
        }
    }
</style>
