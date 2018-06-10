<!-- 个人报告 -->
<template>
  <div class="container">
    <div class="report-option" v-for="(item,index) in reportList" :key="index">
      <p class="report-text">
       <span>报告人:{{item.name}}</span>
       <span>查看报告</span>
      </p>
      <p class="report-time">{{item.created_at}}</p>
    </div>
    <p v-if="reportList.length == 0">暂无报告数据</p>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiReportList,apiReportDetail } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      reportList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getReportList()
  },
  created(){

  },
  methods: {
    getReportList(){
      apiReportList()
      .then((res)=>{
        this.reportList = res.data.list
      })
    },
    getReportDetail(id){
      apiReportDetail({
        id: id
      })
      .then((res)=>{

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 30rpx;
  text-align: center;
  color:#999999;
}
.report-option{
  width:100%;
  box-sizing: border-box;
  margin-bottom: 30rpx;
  background: #ffffff;
  padding: 30rpx;
  color:#999999;
  text-align: left;
  .report-text{
    display: flex;
    justify-content: space-between;
    font-size: 28rpx;
  }
  .report-time{
    font-size: 23rpx;
    margin-top: 10rpx;
  }
}
</style>
