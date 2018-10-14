<template>
    <div class="login-page">
        aaa
        <svg-icon icon-class="lt"></svg-icon>
        <i class="el-icon-edit"></i>
        <img :src="require(`../../assets/images/logo.png`)">

        <el-button type="primary" @click.native.prevent="handleLogin">login</el-button>
        <el-button type="primary" @click.native.prevent="handleMachine">Machine</el-button>
        <el-button type="primary" @click.native.prevent="deleteToken">Token</el-button>

    </div>
</template>

<script>
    import { removeToken } from '@/utils/auth' // getToken from cookie


    export default {
        name: 'Login',
        methods: {
            handleLogin () {
                this.$store.dispatch('User/loginByUsername', {username: 'root', password: '123456'}).then((data) => {
                    this.$router.push({ path: '/dashboard' })
                })
            },
            handleMachine () {
                this.$store.dispatch('Machine/getList').then((data) => {
                    console.info(data);
                })
            },
            deleteToken () {
                removeToken()
            }
        }
    }
</script>

<style lang="scss">
</style>
