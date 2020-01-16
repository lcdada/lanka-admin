<template>
       <el-container class="home_container">
           <!-- 左侧布局 -->
            <left-aside :list=menuLIst></left-aside>
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
                menuLIst:[]
            }
        },
        components: {
            LeftAside,
            RightContainer
            
        },
        created () {
            this.getMenus()  
        },
        methods: {
            loginOut(){
                window.sessionStorage.clear('token');
                this.$router.push('/login');
            },
        //    getMenus(){
        //         this.$api.user.getMenus({})
        //         .then((res)=>{
        //             if(res.data.status == 1){
        //                  console.log(res)
        //                  const list = res.data.data
        //             }
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         })
        //     }
            async getMenus(){
                const {data:res} = await   this.$api.user.getMenus({})
                // console.log(res)
                if (res.status != 1) return
                this.menuLIst  =  res.data
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
