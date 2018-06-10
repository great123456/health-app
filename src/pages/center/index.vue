<!-- 个人中心 -->
<template>
  <div class="container">
    <div class="center-header">
       <div class="center-header-img">
         <image :src="userInfo.avatarUrl"></image>
         <p class="header-name">{{userInfo.nickName}}</p>
       </div>
    </div>
    <div class="center-container">
       <div class="center-content">
         <div class="center-option" @click="orderPage">
           <image src="/static/image/center/order.png" mode="widthFix" class="center-option-img"></image>
           <span>我的订单</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <div class="center-option" @click="reportPage">
           <image src="/static/image/center/report.png" mode="widthFix" class="center-option-img"></image>
           <span>我的报告</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <div class="center-option" @click="messagePage">
           <image src="/static/image/center/center.png" mode="widthFix" class="center-option-img"></image>
           <span>完善个人信息</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <p style="height:1px;background:#333333;margin-top:10rpx"></p>
         <div class="center-bottom">
            <image src="/static/image/center/number.png" mode="widthFix" class="center-option-img"></image>
            <span>020-31146013</span>
         </div>
         <div class="center-bottom" style="padding-bottom:100rpx;">
            <image src="/static/image/center/site.png" mode="widthFix" class="center-option-img"></image>
            <span>广州市番禺区汉溪大道东保利大都汇</span>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
export default {
  mixins: [wxShare],
  data () {
    return {
      userInfo: {}
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.userInfo = wx.getStorageSync('userInfo')
  },
  created(){

  },
  methods: {
    orderPage(){
     wx.navigateTo({
        url: '/pages/order/order'
      })
    },
    reportPage(){
      wx.navigateTo({
         url: '/pages/report/report'
       })
    },
    messagePage(){
      wx.navigateTo({
         url: '/pages/message/message'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{

}
.center-header{
  width:100%;
  background: #5ABFFF;
  height:320rpx;
  position:relative;
}
.center-container{
  padding: 0rpx 30rpx;
  box-sizing: border-box;
}
.center-content{
  width:100%;
  background: #ffffff;
  padding-top: 200rpx;
  padding-left: 50rpx;
  padding-right: 50rpx;
  box-sizing: border-box;
  .center-option{
    height:90rpx;
    line-height: 90rpx;
    color: #333333;
    .center-option-img{
      width:40rpx;
      margin-right: 20rpx;
      position: relative;
      top:-2rpx;
    }
    .center-option-icon{
      width:36rpx;
      float:right;
      margin-top: 20rpx;
    }
  }
}
.center-header-img{
  position: absolute;
  left:50%;
  bottom: -150rpx;
  transform: translateX(-50%);
  text-align: center;
  font-size:36rpx;
  image{
    width:130rpx;
    height:130rpx;
    border-radius: 100%;
    border:3px solid #ffffff;
  }
  p{
    margin-top:20rpx;
    font-size: 39rpx;
    color: #333333;
  }
}
.center-bottom{
  margin-top: 25rpx;
  color:#999999;
  line-height:70rpx;
  image{
    width:40rpx;
    margin-right: 20rpx;
    position: relative;
    top:-2rpx;
  }
}
</style>
