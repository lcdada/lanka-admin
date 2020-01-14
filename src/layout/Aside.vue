<template>
  <div>
    <el-aside :width="isSollapse ? '64px' : '200px' ">
      <div class="boggle_button" @click="toggleCollapse">|||</div>
      <!-- 侧边栏菜单区域  -->
      <el-menu
        :default-active="activePAth"
        @open="handleOpen"
        @close="handleClose"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        :collapse="isSollapse"
        :collapse-transition="false"
        router
      >
        <!-- 一级菜单 -->
        <el-submenu v-for="item in list" :key="item.is" :index="item.id + ''">
          <!-- 一级菜单模板 -->
          <template slot="title">
            <!-- 图标 -->
            <i class="el-icon-user-solid"></i>
            <!-- 文本 -->
            <span>{{item.name}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item v-for="subItem in item.child" :key="subItem.id" :index="'/' + subItem.uri"
          @click="saveNavState('/' + subItem.uri)">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-user-solid"></i>
              <!-- 文本 -->
              <span>{{subItem.name}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
    // 折叠
      isSollapse: false,
    //   被激活的链接地址  
      activePAth:""
    };
  },
  props: {
    list: Array
  },
  created () {
    this.activePAth = window.sessionStorage.getItem("activePath")  
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse() {
      this.isSollapse = !this.isSollapse;
    },
    // 保存链接的激活状态
    saveNavState(activePAth){
        window.sessionStorage.setItem("activePath",activePAth)
        this.activePAth =  window.sessionStorage.getItem("activePath") 
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-aside {
  height: 100%;
  background: #373d41;

  .el-menu {
    border-right: none;
  }
}

.boggle_button {
  height: 60px;
  background: #4a5064;
  font-size: 18px;
  line-height: 60px;
  color: #ffffff;
  letter-spacing: 0.4px;
  cursor: pointer;
}
</style>
