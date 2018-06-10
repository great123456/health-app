<!-- 病种介绍 -->
<template>
  <div class="container">
    <div class="detail-container">
      <p class="detail-title">瓣膜病</p>
      <p class="detail-type">
        <span>推荐科室</span>
        <span class="detail-work">心胸外科</span>
      </p>
      <p class="detail-text">骨质疏松即骨质疏松症，是多种原因引起的一组骨病，骨组织有正常的钙化，
        钙盐与基质呈正常比例，以单位体积内骨组织量减少为特点的代谢性骨病变。
        在多数骨质疏松中，骨组织的减少主要由于骨质吸收增多所致。以骨骼疼痛、易于骨折为特征。</p>
      <p class="detail-btn" @click="editMessagePage">去问诊</p>
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

    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){

  },
  created(){

  },
  methods: {
    introducePage(){
      wx.navigateTo({
         url: '/pages/introduce/introduce'
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
