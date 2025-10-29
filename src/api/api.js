//api的统一管理
import request from './request'
//请求左侧数据
export default {
  getTableData() {
    return request({
      url: 'home/getTableData',
      method: 'get',
    })
  },
  getCountData() {
    return request({
      url: 'home/getCountData',
      method: 'get',
    })
  },
  getChartData() {
    return request({
      url: 'home/getChartData',
      method: 'get',
    })
  },
  getUserData(data) {
    return request({
      url: 'home/getUserData',
      method: 'get',
      data,
    })
  },
}
