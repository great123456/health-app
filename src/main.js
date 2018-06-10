import Vue from 'vue'
// import store from './store/index'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  // store,
  ...App
})
app.$mount()

export default {
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，
    // 其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/index',                           // 首页
      'pages/team/team',                              //专家团队
      'pages/brand/brand',                            //医院品牌
      'pages/center/center',                          //我的
      'pages/order/order',                            //订单列表
      'pages/report/report',                          //个人报告
      'pages/message/message',                        //个人信息
      'pages/introduce/introduce',                    //医生主页
      'pages/detail/detail',                          //病种介绍
      'pages/edit-message/edit-message'               //填写个人信息
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'bottom',
      color: '#AEAEBD',
      selectedColor: '#303135',
      backgroundColor: '#FFFFFF',
      borderStyle: '#E1E1E6',
      list: [{
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: '/static/image/index/home.png',
        selectedIconPath: '/static/image/index/home-select.png'
      }, {
        text: '专家团队',
        pagePath: 'pages/team/team',
        iconPath: '/static/image/index/expert.png',
        selectedIconPath: '/static/image/index/expert-select.png'
      },{
        text: '医院品牌',
        pagePath: 'pages/brand/brand',
        iconPath: '/static/image/index/brand.png',
        selectedIconPath: '/static/image/index/brand-select.png'
      },{
        text: '我的',
        pagePath: 'pages/center/center',
        iconPath: '/static/image/index/me.png',
        selectedIconPath: '/static/image/index/me-select.png'
      }]
    }
  }
}
