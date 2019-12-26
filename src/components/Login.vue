<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" label-width="0px" :rules="loginFromRules" class="login_form " :model="loginForm">
                <!--  用户名 -->
                <el-form-item prop="username">
                    <el-input  
                    prefix-icon="iconfont iconzhanghu"
                    v-model="loginForm.username"
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input  
                    prefix-icon="iconfont iconmima"
                    v-model="loginForm.password"
                    type="password"
                    ></el-input>
                </el-form-item>
                <!-- 按钮 -->
                   <el-form-item class="btn_box">
                     <el-button type="primary">登录</el-button>
                     <el-button type="info" @click="resetLoginForm">重置</el-button>   
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // 登录表单的数据绑定对象
                loginForm:{
                    username:'admin',
                    password:'123456',
                },
                loginFromRules: {
                    username: [
                        { required: true, message: '请输入登录名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ]
                   
                }
            }
        },  
        components: {

        },
        methods: {
            // dianji
            resetLoginForm(){
                // console.log(this)
                this.$refs.loginFormRef.resetFields();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .login_container
        height 100%
        background #2b4b6b
        position relative
    .login_box
        position absolute
        width 450px;
        height 300px;
        background #ffffff
        border-radius 3px
        top 50%;
        left 50%
        margin-top -150px
        margin-left -225px
        .avatar_box
            height 130px
            width 130px
            border 1px solid #eee
            border-radius 50%
            padding 10px
            box-shadow 0 0 10px #dddddd
            position absolute
            left 50%
            margin-left -65px
            margin-top -65px
            background #fff
            img 
                width 100%
                height 100%
                border-radius 50%
                background #eee
    .login_form
        position absolute
        bottom 0
        width 100%
        padding 0 10px
        box-sizing border-box
    .btn_box
        display flex 
        justify-content flex-end
</style>
