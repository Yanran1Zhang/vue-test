<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
</script>

<template>
  <el-container class="lay-container">
    <!--自定义左侧的组件-->
    <common-aside />
    <el-container>
      <el-header class="el-header" style="padding: 0; height: 60px;">
        <common-header />
      </el-header>
      <el-main class="right-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.lay-container {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
.el-aside {
  height: 100vh;
  background-color: #545c64;
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100vh;
  margin: 0;
  padding: 0;
}
.el-header {
  margin: 0;
  padding: 0;
}
.right-main {
  height: calc(100vh - 60px);
  overflow-y: auto;
  margin: 0;
  padding: 0;
}
</style>
