<template>
    <div class="login-page">
        <div class="left-pack">
            <img src="../../assets/images/Login/cover.png" />
        </div>
        <div class="right-pack">
            <div class="login-pack">
                <div class="logo-pack">
                    <img src="../../assets/images/Login/logo.png"/>
                    <span>{{ $t('login.title') }}</span>
                </div>
                <div class="content-pack">
                    <div class="email-pack">
                        <el-input v-model="username" @keyup.enter.native="loginClick" placeholder="请输入用户名"></el-input>
                    </div>
                    <div class="password-pack">
                        <el-input v-model="password" @keyup.enter.native="loginClick" type="password" placeholder="请输入密码"></el-input>
                    </div>
                    <div class="language-pack">
                        <el-radio-group @change="languageChange" v-model="language">
                            <el-radio-button label="zh">中文</el-radio-button>
                            <el-radio-button label="en">English</el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="button-pack">
                    <el-button v-if="loading" disabled :loading="true" type="success">登录中</el-button>
                    <el-button v-else type="success" @click="loginClick">登录</el-button>
                    <div class="retrieve-password-pack">
                        <span @click="retrievePasswordClick" class="retrieve-password">忘记密码？</span>
                    </div>
                </div>
            </div>
            <div class="copyright-pack">
                <div class="copyright">© XCMG  江苏徐工信息技术股份有限公司版权所有   苏ICP备15005495号-5</div>
                <div class="version">Version : 3.0.0</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'

    export default {
        name: 'Login',
        data () {
            return {
                username: 'root',
                password: '123456',
                language: true,
                loading: false,
                redirect: null
            }
        },
        watch: {
            $route: {
                handler (route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }
        },
        methods: {
            loginClick () {
                this.loading = true;
                this.$store.dispatch('User/loginByUsername', {username: this.username, password: this.password}).then((data) => {
                    setTimeout(() => {
                        this.loading = false;
                        this.$router.push({ path: this.redirect || '/dashboard' })
                    }, 1000)
                }).catch(() => {
                    this.loading = false;
                })
            },
            // 多语言切换事件
            languageChange (val) {
                this.$i18n.locale = val
                this.language = val
                Cookies.set('Admin-Language', val)
            },
            retrievePasswordClick () {}
        },
        mounted () {
            // 方案一：根据浏览器的语言环境
            // var JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
            // if (JsSrc.indexOf('zh') !== -1) {
            //     this.languageChange('zh')
            // } else if (JsSrc.indexOf('en') !== -1) {
            //     this.languageChange('en')
            // }
            // 方案二：根据用户自己选择的语言环境
            if (!Cookies.get('Admin-Language') || Cookies.get('Admin-Language') === 'zh') {
                this.languageChange('zh')
            } else {
                this.languageChange('en')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .login-page {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 700px;
        min-width: 1024px;
        display: -webkit-flex;
        display: flex;
        align-items: center;

        .left-pack {
            width: 60%;
            height: 100%;
            overflow: hidden;

            img {
                height: 100%;
            }
        }

        .right-pack {
            background-color: #fff;
            width: 40%;
            height: 100%;
            display: -webkit-flex;
            display: flex;
            justify-content: center;

            .login-pack {
                margin-top: 30%;
                width: 400px;
                text-align: center;

                .logo-pack {
                    width: 380px;
                    height: 44px;
                    margin-bottom: 42px;
                    font-size: 23px;
                    color: #005695;
                    display: -webkit-flex;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        margin-right: 10px;
                        width: 70px;
                    }
                }

                .title-pack {
                    font-size: 24px;
                    color: #4d4d4d;
                    margin-bottom: 27px;

                    span {
                        padding-bottom: 4px;
                        border-bottom: 2px solid #ee2351;
                    }
                }

                .info-pack {
                    padding: 24px 40px;
                    background-image: linear-gradient(-141deg, #def1ff 0%, #e0ebff 100%);
                    border-radius: 4px;
                    width: 400px;
                    height: 100px;
                    margin: 0 0 50px 0;

                    div {
                        text-align: left;

                        span {
                            font-size: 18px;
                            color: #4d4d4d;

                            white-space: nowrap;
                            width: 100%;                  /* IE6 需要定义宽度 */
                            overflow: hidden;
                            -o-text-overflow: ellipsis;    /* Opera */
                            text-overflow:    ellipsis;    /* IE, Safari (WebKit) */
                            display: inline-block;
                        }
                    }
                }

                .content-pack {

                    .email-pack {
                        width: 400px;
                        margin-bottom: 24px;
                    }

                    .password-pack {
                        width: 400px;
                        margin-bottom: 40px;
                    }

                    .el-input {

                        .el-input__inner {
                            height: 36px;
                            width: 400px;
                            background: #ffffff;
                            border-radius: 2px;
                        }
                    }

                    input:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0px 1000px white inset;
                        border: 1px solid #CCC!important;
                    }
                }

                .button-pack {

                    .el-button {
                        margin-bottom: 24px;
                        color: #fff;
                        height: 36px;
                        width: 400px;
                        border-radius: 2px;
                        border: 0px solid #fff;
                        background-image: linear-gradient(-225deg, #108ee9 0%, #32a8fe 100%);;
                        box-shadow: 0 2px 8px 0 rgba(40,160,248,0.40);

                        &:hover {
                            color: #fff;
                            background-image: linear-gradient(-225deg, #32a8fe 0%, #4FC5FE 100%);;
                        }

                        &:active {
                            color: #fff;
                            background-image: linear-gradient(-225deg, #077AE9 0%, #108ee9 100%);;
                        }

                        span {
                            font-size: 16px;
                        }
                    }

                    .retrieve-password-pack {
                        text-align: right;

                        .retrieve-password {
                            font-size: 16px;
                            color: #4887ff;
                            letter-spacing: 0;

                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .copyright-pack {
                position: absolute;
                bottom: 18px;
                left: 60%;
                right: 0;
                text-align: center;

                .service {
                    font-size: 12px;
                    color: #4d4d4d;
                    margin-bottom: 8px;
                }

                .copyright {
                    font-size: 12px;
                    color: #bfbfbf;
                    margin-bottom: 8px;
                }

                .version {
                    font-size: 12px;
                    color: #bfbfbf;
                }


                .link {
                    font-family: PingFangSC-Medium;
                    font-size: 16px;
                    color: #ffffff;
                    letter-spacing: 0;

                    &:hover {
                        border-bottom: 1px solid #fff;
                        cursor: pointer;
                    }
                }
            }
        }

        .marginTop100 {
            margin-top: 100px;
        }
    }

</style>
