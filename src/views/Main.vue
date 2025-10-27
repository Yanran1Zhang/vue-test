<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!--自定义左侧的组件-->
      <common-aside />
      <el-container>
        <el-header class="el-header">
          <common-header />
        </el-header>
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  height: 100%;
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
  height: 100%;
  background-color: #545c64;
}
</style>
