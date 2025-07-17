<template>
    <el-dialog :visible.sync="visible" :title="title" :width="width" @close="handleClose">
      <slot></slot>
      <template #footer>
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="confirmDialog">确定</el-button>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const visible = ref(false)  // 控制弹窗的显示和隐藏
  const title = ref('弹窗标题')  // 弹窗标题
  const width = ref('50%')  // 弹窗宽度
  
  // 关闭弹窗
  const closeDialog = () => {
    visible.value = false
  }
  
  // 确定按钮的回调
  const confirmDialog = () => {
    // 这里可以执行确认时的逻辑
    visible.value = false
  }
  
  // 暴露方法来控制弹窗的显示
  const openDialog = (config = {}) => {
    title.value = config.title || '弹窗标题'
    width.value = config.width || '50%'
    visible.value = true
  }
  
  // 将 openDialog 作为全局方法暴露出去
  defineExpose({
    openDialog
  })
  </script>
  
  <style scoped>
  /* 你可以根据需要自定义弹窗样式 */
  </style>
  