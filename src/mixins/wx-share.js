export default {
  data: {
    shareParams: {
      title: '预约挂号',
      path: '/pages/index/index',
      // imageUrl: '/static/images/share-img.jpg',
      success () {
        wx.showToast({
          title: '转发成功！',
          icon: 'none'
        })
      }
    }
  },
  onShareAppMessage () {
    return this.shareParams
  }
}
