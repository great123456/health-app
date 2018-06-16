<!-- 医生主页 -->
<template>
  <div class="container">
     <div class="introduce-header">
       <image :src="detail.atar"></image>
       <p class="introduce-name">{{detail.name}}</p>
       <p class="introduce-rank">{{detail.position}}</p>
       <p class="introduce-site">{{detail.hospital}}</p>
       <p class="introduce-advantage">
         擅长
         <span>{{detail.good_at}}</span>
       </p>
       <p class="introduce-text">{{detail.introduction}}</p>
       <p class="introduce-btn" @click="editMessagePage">去问诊</p>
     </div>
     <!-- <div class="introduce-container">
        <div class="introduce-content">
          <p class="introduce-content-title">医生介绍</p>
          <p class="introduce-content-text">{{detail.content}}</p>
        </div>
     </div> -->
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiDoctorDetail } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      detailId: '',
      detail: {}
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    console.log('query',this.$mp.query);
    this.detailId = this.$mp.query.id
    this.getDoctorDetail()
  },
  created(){

  },
  methods: {
    getDoctorDetail(){
      apiDoctorDetail({
        id: this.detailId
      })
      .then((res)=>{
        this.detail = res.data
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
  box-sizing: border-box;
}
.introduce-header{
  width:100%;
  background: #5ABFFF;
  padding: 60rpx 30rpx;
  padding-left:100rpx;
  box-sizing: border-box !important;
  color:#ffffff !important;
  position: relative;
  image{
    width:120rpx;
    height:120rpx;
    border-radius: 100%;
    position: absolute;
    top:60rpx;
    left:30rpx;
  }
  .introduce-name{
    font-size: 36rpx;
    text-indent: 60rpx;
  }
  .introduce-rank{
    font-size: 25rpx;
    margin-top: 5rpx;
    text-indent: 60rpx;
  }
  .introduce-site{
    display: inline-block;
    padding:5rpx 10rpx;
    border-radius: 160rpx;
    font-size: 24rpx;
    background: #ffffff;
    color:#5ABFFF;
    margin-top: 20rpx;
    margin-left: 60rpx;
  }
  .introduce-advantage{
    margin-top:35rpx;
    font-size: 26rpx;
    span{
      display: inline-block;
      font-size: 24rpx;
      border: 1px solid #ffffff;
      padding:5rpx 10rpx;
      margin-left: 20rpx;
      border-radius: 100rpx;
      min-width: 90rpx;
      text-align: center;
    }
  }
  .introduce-text{
    font-size: 24rpx;
    margin-top: 20rpx;
    text-align: left;
  }
  .introduce-btn{
    background: #ffffff;
    color: #5ABFFF;
    font-size: 25rpx;
    text-align: center;
    padding: 10rpx 30rpx;
    position: absolute;
    right:30rpx;
    top:60rpx;
    border-radius: 20rpx;
  }
}
.introduce-container{
  padding:0rpx 30rpx;
}
.introduce-content{
  width:100%;
  background: #ffffff;
  color: #CCCCCC;
  font-size: 24rpx;
  line-height: 30rpx;
  padding:30rpx;
  border-radius: 20rpx;
  box-sizing: border-box;
  transform: translateY(-30rpx);
  min-height: 760rpx;
  .introduce-content-title{
    font-size: 32rpx;
    margin-bottom: 30rpx;
    color: #666666;
  }
  .introduce-content-text{
    line-height:50rpx;
  }
}
</style>
