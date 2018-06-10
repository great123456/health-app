<!-- 填写信息 -->
<template>
  <div class="container">
    <div class="edit-container">
      <p class="edit-title">就诊人信息</p>
      <div class="edit-option">
        <p class="edit-title">姓名<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" :value="name" placeholder="请输入姓名">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">年龄<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" :value="name" placeholder="请输入年龄">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">联系电话<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" :value="name" placeholder="请输入联系电话">
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
          <input type="text" :value="name" placeholder="请输入详细地址">
        </div>
      </div>
      <div class="edit-option">
        <p class="edit-title">身份证号码<span style="color:#ea3a3a;">*</span></p>
        <div class="edit-put">
          <input type="text" :value="name" placeholder="请输入身份证号码">
        </div>
      </div>
      <p class="order-btn">支付￥300</p>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { formatTimeString } from '@/config/utils'
export default {
  mixins: [wxShare],
  data () {
    return {
     name: '',
     date: '',
     region: ['广东省', '广州市', '天河区'],
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
