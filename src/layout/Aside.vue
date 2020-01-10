<template>
  <div>
    <el-aside :width="isSollapse ? '64px' : '200px' ">
       <div class="boggle_button" @click="toggleCollapse">|||</div>
      <!-- 侧边栏菜单区域  -->
      <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        :collapse = "isSollapse"
        :collapse-transition="false"
        router 
        
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users" @click="saveNavState()">用户列表</el-menu-item>
          </el-menu-item-group>
          <!-- <el-submenu index="1-4">
            <template slot="title">三级</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">评价</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
    name:'Aside',
    data() {
        return {
            isSollapse:false,
        };
    },
    components: {},
    methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          toggleCollapse(){
              this.isSollapse = !this.isSollapse
          }
    }
};
</script>

<style lang="stylus" scoped>
      .el-aside
          height 100%
          background #373d41
          .el-menu
              border-right none 
       .boggle_button
          height 60px
          background #4a5064
          font-size 18px
          line-height 60px
          color #ffffff
          letter-spacing 0.4px
          cursor pointer
</style>
