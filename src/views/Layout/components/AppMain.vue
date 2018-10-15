<template>
    <section class="app-main-pack">
        <router-view :key="key"/>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        data () {
            return {
            }
        },
        computed: {
            key () {
                return this.$route.fullPath
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

