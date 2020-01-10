<template>
    <div class="right_cont">
        <el-container>
            <!-- 右侧头部 -->
            <el-header>
                <el-button type="info" @click="loginOut">退出</el-button>
            </el-header>
            <!-- 右侧主题 -->
            <el-main>
                <!-- 路由站位 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        components: {

        },
        methods: {
            loginOut(){
                window.sessionStorage.clear('token');
                this.$router.push('/login');
            },
           
        }
    }
</script>

<style lang="stylus" scoped>
    .right_cont
        flex 1
    .el-container
        height 100%
    .el-header
        background #333744
        display flex
        justify-content space-between
        align-items center
        color #fff
    .el-main
        background #eaedf1
  
</style>
