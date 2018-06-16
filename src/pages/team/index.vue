<!-- 专家团队 -->
<template>
  <div class="container">
      <div class="recommend">
        <div class="recommend-option" @click="introducePage(item.id)" v-for="(item,index) in doctorList" :key="index">
          <div class="recommend-option-img">
            <image :src="item.atar"></image>
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
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiDoctorList } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      doctorList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getDoctorList()
  },
  created(){

  },
  methods: {
    getDoctorList(){
      apiDoctorList()
      .then((res)=>{
        this.doctorList = res.data.list
      })
    },
    introducePage(id){
      wx.navigateTo({
         url: '/pages/introduce/introduce?id='+id
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
      height:70rpx;
      border-radius: 100%;
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
