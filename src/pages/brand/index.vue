<!-- 医院品牌 -->
<template>
  <div class="container">
    <div class="brand-option">
      <div>
         <image src="/static/image/index/brand@2x.png" mode="widthFix"></image>
      </div>
      <div>
         <image src="/static/image/index/brand@2x.png" mode="widthFix"></image>
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

  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 30rpx;
  padding-bottom: 100rpx;
}
.brand-option{
  width:100%;
  display: flex;
  justify-content: space-between;
  div{
    width:370rpx;
    image{
      width:100%;
    }
  }
}
</style>
