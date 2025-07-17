<template>
    <div class="logs-page">
      <el-row class="gva-search-box">
        <el-col :span="20">
          <el-input v-model="searchText" placeholder="搜索日志"></el-input>
          <el-button type="primary" @click="fetchLogsData">查询</el-button>
        </el-col>
      </el-row>
      <el-table :data="logs" style="width: 100%">
        <el-table-column label="日志ID" min-width="180" prop="id" />
        <el-table-column label="日志内容" min-width="180" prop="content" />
        <el-table-column label="创建时间" prop="createdAt" />
        <el-table-column label="操作" width="460">
          <template #default="{ row }">
            <el-button @click="editLog(row)">编辑</el-button>
            <!-- 修改为调用 deleteLogData 方法 -->
            <el-button @click="deleteLogData(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :total="total"
        :page-size="pageSize"
        @current-change="handlePageChange"
        @size-change="handlePageSizeChange"
        :current-page="currentPage"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { fetchLogs, deleteLog } from '@/api/logs'


  defineOptions({
    name: 'LogPage'
  })
  
  const logs = ref([])
  const searchText = ref('')
  const total = ref(0)
  const pageSize = ref(10)
  const currentPage = ref(1)
  const dempLogData = ref([{
        "id": 1,
        "content": "用户A执行了登录操作",
        "createdAt": "2025-05-01 08:30:00"
      },
      {
        "id": 2,
        "content": "用户B上传了文件",
        "createdAt": "2025-05-02 10:15:00"
      },
      {
        "id": 3,
        "content": "用户C更新了个人信息",
        "createdAt": "2025-05-03 12:45:00"
      },
      {
        "id": 4,
        "content": "用户D删除了文件",
        "createdAt": "2025-05-04 14:20:00"
      },
      {
        "id": 5,
        "content": "用户E执行了登出操作",
        "createdAt": "2025-05-05 16:10:00"
      },
      {
        "id": 6,
        "content": "用户F修改了密码",
        "createdAt": "2025-05-06 18:25:00"
      },
      {
        "id": 7,
        "content": "用户G查看了系统设置",
        "createdAt": "2025-05-07 20:30:00"
      },
      {
        "id": 8,
        "content": "用户H执行了数据备份",
        "createdAt": "2025-05-08 22:15:00"
      },
      {
        "id": 9,
        "content": "用户I恢复了数据",
        "createdAt": "2025-05-09 23:45:00"
      },
      {
        "id": 10,
        "content": "用户J查看了日志记录",
        "createdAt": "2025-05-10 01:30:00"
      },
      {
        "id": 11,
        "content": "用户K执行了系统更新",
        "createdAt": "2025-05-11 03:15:00"
      },
      {
        "id": 12,
        "content": "用户L查看了用户列表",
        "createdAt": "2025-05-12 05:00:00"
      },
      {
        "id": 13,
        "content": "用户M修改了权限设置",
        "createdAt": "2025-05-13 07:45:00"
      },
      {
        "id": 14,
        "content": "用户N执行了数据导入",
        "createdAt": "2025-05-14 09:30:00"
      },
      {
        "id": 15,
        "content": "用户O执行了数据导出",
        "createdAt": "2025-05-15 11:15:00"
      }])
  
  const fetchLogsData = async () => {
    const response = await fetchLogs({
      search: searchText.value,
      page: currentPage.value,
      pageSize: pageSize.value
    })
    if (response.code === 0) {
      logs.value = response.data.list
      total.value = response.data.total
    }else {
      logs.value = dempLogData.value // 如果请求失败，使用假数据
      total.value = dempLogData.value.length // 假数据的总数
    }
  }
  
  // 删除日志的方法
  const deleteLogData = async (log) => {
    await deleteLog(log.id)  // 调用 deleteLog 删除日志
    fetchLogsData() // 删除后刷新数据
  }
  
  const handlePageChange = (page) => {
    currentPage.value = page
    fetchLogsData()
  }
  
  const handlePageSizeChange = (size) => {
    pageSize.value = size
    fetchLogsData()
  }
  
  onMounted(() => {
    fetchLogsData()
  })
  </script>
  