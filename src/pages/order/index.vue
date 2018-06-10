<!-- 订单列表 -->
<template>
  <div class="container">
    <div class="order-option">
      <p class="order-title">24小时动态心电检查</p>
      <p class="order-time"><span>2018-05-16</span> <span>13:36</span></p>
      <p class="order-price">￥300</p>
    </div>
    <div class="order-option">
      <p class="order-title">24小时动态心电检查</p>
      <p class="order-time"><span>2018-05-16</span> <span>13:36</span></p>
      <p class="order-price">￥300</p>
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

  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 1px;
  padding-bottom: 100rpx;
}
.order-option{
  margin-top: 30rpx;
  border-radius: 10rpx;
  background: #ffffff;
  padding: 30rpx 20rpx;
  box-sizing: border-box;
  width:100%;
  color:#999999;
  position: relative;
  .order-title{
    font-size: 30rpx;
  }
  .order-time{
    font-size: 25rpx;
    color:#cccccc;
    margin-top: 10rpx;
  }
  .order-price{
    font-size: 50rpx;
    position: absolute;
    right:20rpx;
    top:30rpx;
  }
}
</style>
