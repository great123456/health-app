<!-- 医生主页 -->
<template>
  <div class="container">
     <div class="introduce-header">
       <image src="/static/image/index/doctor.png" mode="widthFix"></image>
       <p class="introduce-name">曾春芳</p>
       <p class="introduce-rank">主任医师</p>
       <p class="introduce-site">海南医学院第一附属医院</p>
       <p class="introduce-advantage">
         擅长
         <span>先天性心脏病</span>
       </p>
       <p class="introduce-text">掌握无创心血管检查各项技术,参与心血管介入治疗,扎实的心电图基础理论</p>
       <p class="introduce-btn" @click="editMessagePage">去问诊</p>
     </div>
     <div class="introduce-container">
        <div class="introduce-content">
          <p class="introduce-content-title">医生介绍</p>
          <p class="introduce-content-text">曾春芳，女，副主任医师，医学硕士。1991年毕业于同济医科大学，同年分配到泸州医学院附院呼吸内科工作至2000年；
            2000年就读于重庆医科大学，2003年毕业并获呼吸内科硕士学位，同年分配到绵阳市中心医院呼吸内科工作至今。从事呼吸内科临床工作20年，
            具有丰富的临床经验，能熟练诊治呼吸内科常见病如慢性阻塞性肺疾病、支气管哮喘、肺炎、胸腔积液、气胸等，擅长对呼吸内科疑难病例的诊治，
            能熟练进行呼吸内科纤支镜、胸腔闭式引流、胸膜活检等各种临床操作；具有较强的教学、科研能力，至今在国家级重点期刊上发表学术论文十余篇</p>
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
  padding-bottom: 100rpx;
}
.introduce-header{
  width:100%;
  background: #5ABFFF;
  padding: 60rpx 30rpx;
  padding-left:100rpx;
  box-sizing: border-box;
  color:#ffffff !important;
  position: relative;
  image{
    width:120rpx;
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
