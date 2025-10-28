<template>
  <div class="header">
    <div class="l-content">
      <el-button size="small" @click="handleCollpase">
        <component class="icons" :is="Menu"></component>
        <el-breadcrumb separator="/" class="bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-button>
    </div>
    <div class="r-content">
      <el-dropdown>
        <img :src="getImageUrl(`user`)" class="user" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue' // 导入图标
import { useAllDataStore } from '../stores/allData.js'

const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href
} //模版字符串用反引号
const store = useAllDataStore()
const handleCollpase = () => {
  store.state.isCollapse = !store.state.isCollapse
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.icons {
  width: 20px;
  height: 20px;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
:deep(.bread span) {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
