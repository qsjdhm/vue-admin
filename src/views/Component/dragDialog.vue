<template>
    <div>
        可拖拽dragdialog demo
        <el-button type="primary" @click="dialogTableVisible = true">open a Drag Dialog</el-button>
        <el-dialog v-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
            sabdjahsb
        </el-dialog>
    </div>
</template>

<script>
    import dragDialog from '@/directive/dragDialog' // base on element-ui

    export default {
        name: 'Dashboard',
        directives: {
            dragDialog
        },
        data () {
            return {
                dialogTableVisible: false
            }
        },
        methods: {
            handleDrag () {
                console.info('handleDrag');
                // this.$refs.select.blur()
            }
        }
    }
</script>

<style lang="scss">
</style>
