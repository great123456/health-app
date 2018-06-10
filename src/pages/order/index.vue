<!-- 订单列表 -->
<template>
  <div class="container">
    <div class="order-option" v-for="(item,index) in orderList" :key="index">
      <p class="order-title">{{item.type == 1?'24小时心电图检查':'预约住院'}}</p>
      <p class="order-time"><span>{{item.created_at}}</span></p>
      <p class="order-price">￥{{item.total}}</p>
    </div>
    <p v-if="orderList.length == 0" style="text-align:center;color:#b5b6b7;padding-top:30rpx;">暂无个人订单</p>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiOrderList } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      orderList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getOrderList()
  },
  created(){

  },
  methods: {
    getOrderList(){
      apiOrderList()
      .then((res)=>{
        this.orderList = res.data.list
      })
    }
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
