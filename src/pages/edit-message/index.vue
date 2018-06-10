<!-- 填写信息 -->
<template>
  <div class="container">
    <div class="edit-container">
      <p class="edit-title">就诊人信息</p>
      <div class="edit-option">
        <p class="edit-title">姓名<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" v-model="name" placeholder="请输入姓名">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">年龄<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" v-model="age" placeholder="请输入年龄">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">联系电话<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" v-model="phone" placeholder="请输入联系电话">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">住院日期<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
             {{date}}
          </picker>
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">家庭住址<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <picker mode="region" :value="region" :custom-item="customItem" @change="bindRegionChange">
            {{region}}
          </picker>
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">详细地址<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" v-model="det_address" placeholder="请输入详细地址">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">身份证号码<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" v-model="card" placeholder="请输入身份证号码">
        </div>
      </div>
      <p class="order-btn" @click="getDetailPay">立即支付</p>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { formatTimeString } from '@/config/utils'
import { apiPayApm } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
     name: '',
     age: '',
     phone: '',
     date: '',
     pre_address: '',
     det_address: '',
     card: '',
     region: ['广东省', '广州市', '番禺区'],
     customItem: ''
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.date = formatTimeString(new Date())
    this.region = this.region.join('-')
  },
  created(){

  },
  methods: {
    getDetailPay(){
      console.log('date',this.date,this.region);
      if(this.name == ''|| this.age == ''|| this.phone == ''|| this.date == ''|| this.region == ''|| this.det_address==''||this.card==''){
        wx.showToast({
          title: '请填写完信息再提交',
          icon: 'none',
          duration: 2000
        })
        return
      }
      apiPayApm({
        apm_name: this.name,
        apm_age: this.age,
        apm_phone: this.phone,
        apm_date: this.date,
        apm_pre_address: this.region,
        apm_det_address: this.det_address,
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
    },
    bindDateChange(e){
     this.date = e.mp.detail.value
    },
    bindRegionChange(e){
      this.region = e.mp.detail.value.join('-')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 30rpx;
  box-sizing: border-box;
  padding-bottom: 100rpx;
}
.edit-container{
  width:100%;
  background: #ffffff;
  box-sizing: border-box;
  padding: 30rpx 20rpx;
}
.edit-title{
  color: #666666;
  margin-bottom: 10rpx;
  font-size: 32rpx;
}
.edit-option{
  margin-top: 20rpx;
  .edit-title{
    color: #999999;
    font-size: 25rpx;
  }
  .edit-put{
    width:550rpx;
    height:65rpx;
    line-height: 65rpx;
    border: 1px solid #CCCCCC;
    border-radius: 22px;
    margin-top: 5rpx;
    padding-left: 20rpx;
    input{
      margin-top: 5rpx;
    }
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
  margin: 60rpx auto;
  color:#ffffff !important;
}
</style>
