// src/api/logs.js
import request from '@/utils/request'

export const fetchLogs = (params) => {
  return request({
    url: '/api/logs',
    method: 'get',
    params
  })
}

export const deleteLog = (id) => {
  return request({
    url: `/api/logs/${id}`,
    method: 'delete'
  })
}

export const editLog = (data) => {
  return request({
    url: `/api/logs/${data.id}`,
    method: 'put',
    data
  })
}
