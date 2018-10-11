<template>
    <div class="login-page">
        aaa
        <svg-icon icon-class="lt"></svg-icon>
        <i class="el-icon-edit"></i>
        <img :src="require(`../../assets/images/logo.png`)">

        <el-button type="primary" @click.native.prevent="handleLogin">login</el-button>
        <el-button type="primary" @click.native.prevent="handleMachine">Machine</el-button>

    </div>
</template>

<script>
    export default {
        name: 'Login',
        methods: {
            handleLogin () {
                this.$store.dispatch('Login/loginByUsername', {username: 'root', password: '123456'}).then((data) => {
                    console.info(data);
                    this.$router.push({ path: '/dashboard' })
                })
            },
            handleMachine () {
                this.$store.dispatch('Machine/getList').then((data) => {
                    console.info(data);
                })
            }
        }
    }
</script>

<style lang="scss">
</style>
