<!-- 个人信息 -->
<template>
  <div class="container">
    <div class="message-container">
       <p class="message-title">完善个人信息</p>
       <div class="message-option">
         <span>姓名</span>
         <input type="text" :value="name" placeholder="请输入姓名"/>
       </div>
       <div class="message-option">
         <span>电话</span>
         <input type="text" :value="name" placeholder="请输入电话"/>
       </div>
       <div class="message-option">
         <span>身份证号</span>
         <input type="text" :value="name" placeholder="请输入身份证号"/>
       </div>
       <div class="message-option">
         <span>地址</span>
         <input type="text" :value="name" placeholder="请输入地址"/>
       </div>
       <p class="order-btn">支付￥300</p>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
export default {
  mixins: [wxShare],
  data () {
    return {
      name: ''
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
  padding-top: 30rpx;
}
.message-container{
  background: #ffffff;
  border-radius: 10rpx;
  padding:20rpx;
  p{
    color:#666666;
    height:100rpx;
    line-height: 100rpx;
    font-size: 36rpx;
  }
}
.message-option{
  height:100rpx;
  line-height: 100rpx;
  color:#999999;
  font-size: 32rpx;
  span{
    display: inline-block;
    width:200rpx;
  }
  input{
    display: inline-block;
    font-size: 32rpx;
    line-height: 100rpx;
  }
}
.order-btn{
  width:550rpx;
  height:90rpx;
  line-height: 90rpx;
  border-radius: 22px;
  background: #5ABFFF;
  text-align: center;
  font-size: 32rpx;
  margin: 120rpx auto;
  color:#ffffff !important;
}
</style>
