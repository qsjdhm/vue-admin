<template>
    <section class="app-main-pack">
        <keep-alive :include="cachedView">
            <router-view :key="key"/>
        </keep-alive>
    </section>
</template>

<script>

    import { mapState } from 'vuex'
    export default {
        name: 'AppMain',
        data () {
            return {
            }
        },
        computed: {
            ...mapState('TabsView', {
                cachedView: state => state.cachedView
            }),
            key () {
                return this.$route.path
            }
        },
        methods: {
        }
    }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/styles/mixin.scss";

    .app-main-pack {
        @include rdc-box-sizing;
        position: absolute;
        top: 105px;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 15px;
        overflow-x: hidden;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
</style>

