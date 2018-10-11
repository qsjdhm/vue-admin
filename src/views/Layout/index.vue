<template>
    <div class="layout-page">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <TabsView></TabsView>
        <AppMain></AppMain>
        <router-view/>
    </div>
</template>

<script>
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
        methods: {
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
    }
</style>
