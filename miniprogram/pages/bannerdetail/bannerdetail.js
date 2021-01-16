// pages/discoverydetail/discoverydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerdetail: {},
    discintro: [],
    userimage: './user-unlogin.png',
  },

  follow: function () {
    wx.showToast({
      title: '用户OpenId相关功能暂未开发 下学期再做',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 5000     
    })  
  },
  send: function () {
    wx.showToast({
      title: '用户评论相关功能暂未开发  下学期再做',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 5000     
    })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var userimg = wx.getStorageSync('userimage')
    if (userimg != '') {
      this.setData({
        userimage: userimg
      })
    }
    var art = e.art
    const db = wx.cloud.database()
    db.collection("banner").where({
      _id: art
    })
    .get({
      success: res => {
        this.setData({
          bannerdetail: res.data[0],
        })
        if(res.data[0].intro){
          this.setData({
            discintro: res.data[0].intro.split("\\n")
          })
        }
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})