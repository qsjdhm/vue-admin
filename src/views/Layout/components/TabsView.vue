<template>
    <div class="tabs-view-pack">
        <el-tabs
            v-model="activatedTab"
            @tab-click="tabsViewClick"
            @tab-remove="delTabsView" type="card" closable>
            <el-tab-pane
                v-for="(item, index) in openedView"
                :key="item.path"
                :label="item.title"
                :name="item.path"
            ></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'TabsView',
        data () {
            return {
                activatedTab: ''
            }
        },
        computed: {
            ...mapState('TabsView', {
                openedView: state => state.openedView
            })
        },
        watch: {
            $route () {
                this.addTabsView()
            }
        },
        methods: {
            // 添加一个tabs
            addTabsView () {
                this.$store.dispatch('TabsView/addTabsView', this.$route).then(() => {
                    this.activatedTab = this.$route.path;
                })
            },
            // 点击一个tabs
            tabsViewClick (item) {
                this.$router.push({ path: item.name })
            },
            // 删除一个tabs
            delTabsView (item) {
                console.info(item);
            }
        },
        mounted () {
            this.addTabsView()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .tabs-view-pack {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        height: 40px;
        padding: 0 20px 0 0;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .el-tabs {
            .el-tabs__header {
                margin: 0 10px!important;
            }
            .el-tabs__item {
                height: 30px;
                line-height: 30px;
                background: #fff;
                border: 1px solid #dcdcdc!important;
                margin-right: 10px;

                i {
                    margin-right: 5px;
                }
            }
            .el-tabs__header {
                border-bottom: 0px solid #fff!important;
            }
            .el-tabs__nav {
                border: 0px solid #fff!important;
            }

            .el-tabs__nav-next, .el-tabs__nav-prev {
                line-height: 32px;
            }

            .is-active {
                color: #fff;
                background: #32a8fe ;
                border: 1px solid #fff!important;
                height: 31px;
                line-height: 31px;
            }
        }


    }
</style>
