<!-- 个人信息 -->
<template>
  <div class="container">
    <div class="message-container">
       <p class="message-title">完善个人信息</p>
       <div class="message-option">
         <span>姓名</span>
         <input type="text" v-model="name" placeholder="请输入姓名"/>
       </div>
       <div class="message-option">
         <span>电话</span>
         <input type="text" v-model="phone" placeholder="请输入电话"/>
       </div>
       <div class="message-option">
         <span>年龄</span>
         <input type="text" v-model="age" placeholder="请输入年龄"/>
       </div>
       <div class="message-option">
         <span>身份证号</span>
         <input type="text" v-model="card" placeholder="请输入身份证号"/>
       </div>
       <div class="message-option">
         <span>地址</span>
         <input type="text" v-model="address" placeholder="请输入地址"/>
       </div>
       <p class="order-btn" @click="getPayOrder">立即报名</p>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiPayCheck } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      name: '',
      phone: '',
      age: '',
      card: '',
      address: ''
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    if(wx.getStorageSync('user-phone')){
      this.name = wx.getStorageSync('user-name')
      this.phone = wx.getStorageSync('user-phone')
      this.age = wx.getStorageSync('user-age')
      this.card = wx.getStorageSync('user-card')
      this.address = wx.getStorageSync('user-address')
    }
  },
  created(){

  },
  methods: {
    getPayOrder(){
      if(this.name == ''|| this.age == ''|| this.phone == ''|| this.address==''||this.card==''){
        wx.showToast({
          title: '请填写完信息再提交',
          icon: 'none',
          duration: 2000
        })
        return
      }
      apiPayCheck({
        apm_name: this.name,
        apm_age: this.age,
        apm_phone: this.phone,
        apm_pre_address: '广东省',
        apm_det_address: this.address,
        apm_id_card_no: this.card
      })
      .then((res)=>{
        console.log('pay',res);
        if(res.code == 200){
          wx.requestPayment({
             'timeStamp': res.data.timeStamp+ '',
             'nonceStr': res.data.nonceStr,
             'package': res.data.package,
             'signType': 'MD5',
             'paySign': res.data.paySign,
             success:function(res){
               wx.redirectTo({
                 url: '/pages/order/order'
               })
             },
             fail:function(err){
               console.log('err',err)
             }
          })
        }else{
          wx.showToast({
            title: res.message,
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
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
