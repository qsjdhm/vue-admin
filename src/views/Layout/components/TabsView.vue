<template>
    <div class="tabs-view-pack">
        <el-tabs v-model="editableTabsValue2" type="card" closable>
            <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            ></el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    export default {
        name: 'TabsView',
        data () {
            return {
                editableTabsValue2: '2',
                editableTabs2: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 1',
                    name: '2',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '3',
                    content: 'Tab 2 content'
                }, {
                    title: 'Tab 2',
                    name: '4',
                    content: 'Tab 2 content'
                }],
                tabIndex: 3
            }
        },
        methods: {
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .tabs-view-pack {
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        height: 54px;
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
                height: 42px;
                line-height: 42px;
            }
        }


    }
</style>
