<template>
  <div id="app" class="bg-gray-50 text-slate-700 dark:text-slate-500 dark:bg-slate-800">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
    <!-- 全局弹窗 -->
    <GlobalDialog ref="globalDialog" />
  </div>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useAppStore } from '@/pinia'

import { ref } from 'vue'
import GlobalDialog from './components/GlobalDialog.vue'

const globalDialog = ref(null)

// 暴露全局弹窗方法
const openGlobalDialog = (config) => {
  globalDialog.value.openDialog(config)
}

useAppStore()
defineOptions({
  name: 'App'
})
</script>
<style lang="scss">
// 引入初始化样式
#app {
  height: 100vh;
  overflow: hidden;
  font-weight: 400 !important;
}

.el-button {
  font-weight: 400 !important;
}

.gva-body-h {
  min-height: calc(100% - 3rem);
}

.gva-container {
  height: calc(100% - 2.5rem);
}

.gva-container2 {
  height: calc(100% - 4.5rem);
}
</style>
