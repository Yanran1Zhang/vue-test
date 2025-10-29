import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
Mock.mock('/api/home/getTableData', homeApi.getTableData)
Mock.mock('/api/home/getCountData', homeApi.getCountData)
Mock.mock('/api/home/getChartData', homeApi.getChartData)
Mock.mock('/api/home/getUserData', userApi.getUserList)
