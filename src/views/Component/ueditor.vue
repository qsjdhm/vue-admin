<template>
    <div>
        UEditor
        <div id="editor"></div>
    </div>
</template>

<script>

    import '../../../static/ueditor/ueditor.config.js'
    import '../../../static/ueditor/ueditor.all.min.js'
    import '../../../static/ueditor/ueditor.parse.min.js'

    export default {
        name: 'UEditor',
        data () {
            return {
                editor: null
            }
        },
        methods: {
        },
        mounted () {
            // 实例化editor编辑器
            this.editor = UE.getEditor('editor', {
                token: 'asjdvahsgvdhasgvdhagsvd---------------',
                lang: 'en',
                serverUrl: 'http://10.100.172.150:7778/api/markingTemplate/uploadMarkingTemplateFile'
            });
            // console.log(this.editor.setContent("1223"))
        }
    }
</script>

<style lang="scss">
</style>
