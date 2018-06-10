<!-- 病种介绍 -->
<template>
  <div class="container">
    <div class="detail-container">
      <p class="detail-title">{{detail.name}}</p>
      <p class="detail-type">
        <span>推荐科室</span>
        <span class="detail-work">{{detail.department}}</span>
      </p>
      <p class="detail-text">{{detail.content}}</p>
      <p class="detail-btn" @click="editMessagePage">去问诊</p>
    </div>

    <div class="recommend">
       <p class="recommend-title">专家推荐</p>
       <div class="recommend-option" @click="introducePage(item.id)" v-for="(item,index) in doctorList" :key="index">
         <div class="recommend-option-img">
           <image src="/static/image/index/doctor.png" mode="widthFix"></image>
         </div>
         <div class="recommend-content">
           <p>
             <span class="recommend-name">{{item.name}}</span>
             <span class="recommend-rank">{{item.position}}</span>
           </p>
           <p class="recommend-site">{{item.hospital}}</p>
           <p class="recommend-text">{{item.introduction}}</p>
         </div>
       </div>
       </div>
    </div>

  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiTypeDetail,apiDoctorList } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      typeId: '',
      detail: {},
      doctorList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    console.log('query',this.$mp.query);
    this.typeId = this.$mp.query.id
    this.getTypeDetail()
    this.getDoctorList()
  },
  created(){

  },
  methods: {
    getTypeDetail(){
      apiTypeDetail({
        id: this.typeId
      })
      .then((res)=>{
        if(res.code == 200){
          console.log('type',res);
          this.detail = res.data
        }
      })
    },
    getDoctorList(){
      this.doctorList = []
      apiDoctorList()
      .then((res)=>{
        if(res.data.list.length<=3){
          this.doctorList = res.data.list
        }else{
          this.doctorList.push(res.data.list[0])
          this.doctorList.push(res.data.list[1])
          this.doctorList.push(res.data.list[2])
        }
      })
    },
    introducePage(id){
      wx.navigateTo({
         url: '/pages/introduce/introduce?id='+id
       })
    },
    editMessagePage(){
      wx.navigateTo({
         url: '/pages/edit-message/edit-message'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 30rpx;
  padding-bottom: 100rpx;
}
.detail-container{
  width:100%;
  background: #ffffff;
  padding: 30rpx 20rpx;
  position: relative;
  box-sizing: border-box;
  .detail-title{
    color: #333333;
    font-size: 32rpx;
  }
  .detail-type{
    margin-top: 10rpx;
    font-size: 24rpx;
    color:#cccccc;
  }
  .detail-work{
    display: inline-block;
    margin-left: 20rpx;
    color:#5ABFFF;
  }
  .detail-text{
    margin-top: 30rpx;
    font-size: 24rpx;
    color:#cccccc;
  }
  .detail-btn{
    background: #5ABFFF;
    color: #ffffff;
    font-size: 25rpx;
    text-align: center;
    padding: 10rpx 30rpx;
    position: absolute;
    right:30rpx;
    top:60rpx;
    border-radius: 20rpx;
  }
}
.recommend{
  background: #ffffff;
  border-radius: 12rpx;
  padding: 30rpx 20rpx;
  margin-top: 30rpx;
}
.recommend-title{
  color:#666666;
}
.recommend-option{
  margin-top: 50rpx;
  position: relative;
  .recommend-option-img{
    display: inline-block;
    position: absolute;
    top:0px;
    left:0px;
    image{
      width:70rpx;
    }
  }
  .recommend-content{
    display: inline-block;
    margin-left: 100rpx;
    .recommend-name{
      color: #666666;
      font-weight: 600;
    }
    .recommend-rank{
      display:inline-block;
      width:120rpx;
      height:40rpx;
      text-align: center;
      line-height: 40rpx;
      border-radius: 80rpx;
      border: 1px solid #5ABFFF;
      color:#5ABFFF;
      margin-left: 20rpx;
      font-size: 26rpx;
    }
    .recommend-site{
      font-size: 24rpx;
      color: #CCCCCC;
      margin-top: 10rpx;
    }
    .recommend-text{
      margin-top:15rpx;
      color:#b5b6b7;
    }
  }
}
</style>
