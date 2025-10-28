<script setup>
import * as echarts from 'echarts'
import { buttonGroupContextKey } from 'element-plus'
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const tableData = ref([])
const countData = ref([])
const chartData = ref([])

const tableLabel = ref({
  name: '课程',
  todayBuy: '今日购买',
  monthBuy: '本月购买',
  totalBuy: '总购买',
})

// axios({
//   url: '/api/home/getTableData',
//   method: 'get',
// }).then((res) => {
//   if (res.data.code === 200) {
//     console.log(res.data.data.tableData)
//     tableData.value = res.data.data.tableData
//   }
// })

//这个是折线图和柱状图 两个图表共用的公共配置
const xOptions = reactive({
  // 图例文字颜色
  textStyle: {
    color: '#333',
  },
  legend: {},
  grid: {
    left: '20%',
  },
  // 提示框
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category', // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: '#17b3a3',
      },
    },
    axisLabel: {
      interval: 0,
      color: '#333',
    },
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#17b3a3',
        },
      },
    },
  ],
  color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3'],
  series: [],
})

const pieOptions = reactive({
  tooltip: {
    trigger: 'item',
  },
  legend: {},
  color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
  series: [],
})
const getTableData = async () => {
  const data = await proxy.$api.getTableData()
  tableData.value = data.tableData
}

const getCountData = async () => {
  const data = await proxy.$api.getCountData()
  countData.value = data
}
const getChartData = async () => {
  const { orderData } = await proxy.$api.getChartData()
  console.log(orderData)
  //对第一个图表的xAxis和series赋值
  xOptions.xAxis.data = orderData.date
  xOptions.series = Object.keys(orderData.data[0]).map((val) => ({
    name: val,
    data: orderData.data.map((item) => item[val]),
    type: 'line',
  }))
  //one               echarts.init方法初始化ECharts实例，需要传入dom对象
  const OneEcharts = echarts.init(proxy.$refs['echart'])
  //setOption方法应用配置对象
  OneEcharts.setOption(xOptions)
}
onMounted(() => {
  getCountData()
  getTableData()
  getChartData()
})
</script>

<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="getImageUrl('user')" class="user" />
            <div class="user-info">
              <p>admin</p>
              <p>管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间: <span>2025-10-24</span></p>
            <p>上次登录地点: <span>广州</span></p>
          </div>
        </el-card>

        <el-card shadow="hover" class="table">
          <el-table :data="tableData">
            <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="margin-top: 20px">
        <div class="num">
          <el-card
            :body-style="{ display: 'flex', padding: 0 }"
            v-for="item in countData"
            :key="item.name"
          >
            <component :is="item.icon" class="icons" :style="{ background: item.color }">
            </component>
            <div class="detail">
              <p class="num">¥{{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <div class="graph">
          <el-card style="width: 100%;">
            <div ref="echart" style="height: 400px;"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  overflow: hidden;
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info {
      p {
        line-height: 40px;
      }
      .user-info-p {
        color: #999;
      }
      .user-info-admin {
        font-size: 35px;
      }
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .user-table {
    margin-top: 20px;
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 15px;
        text-align: center;
        color: #999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    width: 100%;
    .el-card {
      width: 100%;
    }
  }
}
</style>
