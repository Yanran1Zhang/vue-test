import Mock from 'mockjs'
import homeApi from './mockData/home'
Mock.mock('/api/home/getTableData', homeApi.getTableData)
Mock.mock('/api/home/getCountData', homeApi.getCountData)
Mock.mock('/api/home/getChartData', homeApi.getChartData)
