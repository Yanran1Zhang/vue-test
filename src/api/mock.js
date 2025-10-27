import Mock from 'mockjs'
import homeApi from './mockData/home'
Mock.mock('/api/home/getTableData', homeApi.getTableData)
