<!-- 首页 -->
<template>
  <div class="container">
     <div class="banner">
       <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
       :indicator-active-color="color">
          <block v-for="(item,index) in imgUrls" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" mode="widthFix"></image>
            </swiper-item>
          </block>
       </swiper>
     </div>

     <div class="list" style="margin-top:30rpx">
       <div class="list-img" @click="messagePage">
         <image src="/static/image/index/check.png" mode="widthFix"></image>
       </div>
       <div class="list-img">
         <image src="/static/image/index/inquiry.png" mode="widthFix"></image>
         <button open-type="contact" class="contact-btn"></button>
       </div>
     </div>
     <div class="list">
       <div class="list-img">
         <image src="/static/image/index/guide.png" mode="widthFix"></image>
         <button open-type="contact" class="contact-btn"></button>
       </div>
       <div class="list-img" @click="editMessagePage">
         <image src="/static/image/index/contact.png" mode="widthFix"></image>
       </div>
     </div>

     <div class="category">
       <p>病种分类</p>
       <ul>
         <li v-for="(item,index) in categoryList" :key="index" @click="detailPage">{{item}}</li>
       </ul>
     </div>

     <div class="recommend">
        <p class="recommend-title">专家推荐</p>
        <div class="recommend-option" @click="introducePage">
          <div class="recommend-option-img">
            <image src="/static/image/index/doctor.png" mode="widthFix"></image>
          </div>
          <div class="recommend-content">
            <p>
              <span class="recommend-name">曾春芳</span>
              <span class="recommend-rank">科主任</span>
            </p>
            <p class="recommend-site">海南医学院第一附属医院心电图室</p>
            <p class="recommend-text">海南医学院第一附属医院心电图室,科室主任,教授,中国心电学会无创心脏电医生理专业委员会...</p>
          </div>
        </div>
        <div class="recommend-option"  @click="introducePage">
          <div class="recommend-option-img">
            <image src="/static/image/index/doctor.png" mode="widthFix"></image>
          </div>
          <div class="recommend-content">
            <p>
              <span class="recommend-name">曾春芳</span>
              <span class="recommend-rank">科主任</span>
            </p>
            <p class="recommend-site">海南医学院第一附属医院心电图室</p>
            <p class="recommend-text">海南医学院第一附属医院心电图室,科室主任,教授,中国心电学会无创心脏电医生理专业委员会...</p>
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
     userInfo: {},
     imgUrls: [
       '/static/image/index/banner.png',
       '/static/image/index/banner2.png',
       '/static/image/index/banner3.png'
     ],
     indicatorDots: true,
     color: '#0D9EFF',
     autoplay: true,
     interval: 2000,
     duration: 300,
     categoryList: ['心脏病','先心病','骨质疏松','骨质疏松','骨质疏松','骨质疏松']
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){

  },
  created(){
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              // console.log('res',res)
              this.userInfo = res.userInfo
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
        }
      })
    },
    introducePage(){
      wx.navigateTo({
         url: '/pages/introduce/introduce'
       })
    },
    detailPage(){
      wx.navigateTo({
         url: '/pages/detail/detail'
       })
    },
    editMessagePage(){
      wx.navigateTo({
         url: '/pages/edit-message/edit-message'
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
  padding:0rpx 30rpx;
  padding-top: 30rpx;
  padding-bottom: 100rpx;
}
.banner{
  width:100%;
  image{
    width:100%;
  }
}
.list{
  display: flex;
  justify-content:space-between;
  margin-top: 10rpx;
  .list-img{
    position: relative;
    image{
      width:340rpx;
      box-sizing: border-box;
      border-radius: 10rpx;
    }
  }
}
.category{
  background: #ffffff;
  border-radius: 10rpx;
  height:228rpx;
  margin-top: 40rpx;
  padding:30rpx 20rpx;
  p{
    color:#666666;
  }
  ul{
    width:100%;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    li{
      width:160rpx;
      height:50rpx;
      border-radius: 100rpx;
      background: #EFF8FF;
      color: #5ABFFF;
      text-align: center;
      margin-top: 30rpx;
      margin-right: 20rpx;
      line-height: 50rpx;
    }
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
.contact-btn{
  height:60rpx;
  line-height: 60rpx;
  margin-top: 30rpx;
  font-size: 25rpx;
  color:#5ABFFF;
  position: absolute;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
  opacity: 0;
}
</style>
