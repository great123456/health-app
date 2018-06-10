<!-- 专家团队 -->
<template>
  <div class="container">
      <div class="recommend">
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
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 30rpx;
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
