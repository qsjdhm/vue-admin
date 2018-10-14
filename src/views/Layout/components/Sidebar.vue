<template>
    <div class="sidebar-pack" :style="{'width': sidebarClosed ? '64px' : '256px'}">
        <div class="logo-pack">
            <img :src="require(`../../../assets/images/Layout/logo.png`)">
            <h1 :style="{'display': sidebarClosed ? 'none' : ''}">万腾设备管理系统</h1>
        </div>
        <div class="menu-pack">
            <el-menu
                :collapse="sidebarClosed"
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#001529"
                text-color="#bcbcbc"
                active-text-color="#fff">

                <sidebar-item
                    v-for="route in routers"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path">
                </sidebar-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    import SidebarItem from './SidebarItem'

    export default {
        components: {
            SidebarItem
        },
        name: 'Sidebar',
        data () {
            return {
            }
        },
        computed: {
            ...mapState({
                sidebarClosed: state => state.sidebarClosed,
                routers: state => state.Permission.routers
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
            }
        }
    }
</style>
