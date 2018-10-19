<template>
    <div class="layout-page">
        <Sidebar></Sidebar>
        <div class="right-pack"  :style="{'left': sidebarClosed ? '64px' : '256px'}">
            <Navbar :normal="true"></Navbar>
            <TabsView></TabsView>
            <AppMain></AppMain>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import Sidebar from './components/Sidebar'
    import Navbar from './components/Navbar'
    import TabsView from './components/TabsView'
    import AppMain from './components/AppMain'

    export default {
        name: 'Layout',
        components: {
            Sidebar,
            Navbar,
            TabsView,
            AppMain
        },
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
        },
        mounted () {
            console.info('------------------------');
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/styles/mixin.scss";

    .layout-page {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #f0f2f5;

        .right-pack {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            transition: left 0.4s;
            -moz-transition: left 0.4s;
            -webkit-transition: left 0.4s;
            -o-transition: left 0.4s;
        }
    }
</style>
