<template>
       <el-container class="home_container">
           <!-- 左侧布局 -->
            <left-aside></left-aside>
            <!-- 右侧布局 -->
            <right-container></right-container>
        </el-container>
</template>

<script>
    import LeftAside from '../layout/Aside'
    import RightContainer from '../layout/RightContainer'
    export default {
        data () {
            return {

            }
        },
        components: {
            LeftAside,
            RightContainer
            
        },
        methods: {
            loginOut(){
                window.sessionStorage.clear('token');
                this.$router.push('/login');
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .home_container
        height 100%
        display flex
        justify-content space-between
  
   
</style>
