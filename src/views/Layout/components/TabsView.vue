<template>
    <div class="tabs-view-pack">
        <el-tabs
            v-model="activatedTab"
            @tab-click="tabsViewClick"
            @tab-remove="delTabsView" type="card" closable>
            <el-tab-pane
                v-for="(item, index) in openedViews"
                :key="item.path"
                :label="item.title"
                :name="item.path">
                <span slot="label"><svg-icon :icon-class="item.meta.icon" /> {{item.title}}</span>
            </el-tab-pane>
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
                openedViews: state => state.openedViews
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
            delTabsView (delViewPath) {
                // 1. 主页不允许删除
                if (delViewPath === '/dashboard/index') {
                    this.$message.error('主页不允许删除');
                    return false;
                }
                // 2. 如果当前tab被删除，需要选中上一个
                if (this.activatedTab === delViewPath) {
                    let index = 0;
                    for (let tab of this.openedViews) {
                        if (tab.path === delViewPath) {
                            break;
                        }
                        index++;
                    }
                    // 如果从头删除就要选中后一个，如果从后删除就要选中上一个
                    let checkedTabView = '';
                    if (index > 0) {
                        checkedTabView = this.openedViews[index - 1].path;
                    } else {
                        checkedTabView = this.openedViews[index + 1].path;
                    }
                    // 删除选中tab，并跳转路由
                    this.$store.dispatch('TabsView/delTabsView', delViewPath).then(() => {
                        this.activatedTab = checkedTabView;
                        this.$router.push({ path: checkedTabView })
                    })
                } else {
                    // 删除当前tab
                    this.$store.dispatch('TabsView/delTabsView', delViewPath)
                }
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
        padding: 0 10px;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);

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
                padding: 0 10px!important;

                svg {
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
