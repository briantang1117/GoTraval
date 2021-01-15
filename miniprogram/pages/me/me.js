// pages/me/me.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatarUrl: './user-unlogin.png',
    nickname: '',
    slogan: '',
    data: [10,78,5,216],
    logged: false,
    takeSession: false,
    requestResult: '',
    currentTab: 0
  },
  switchNav: function (e) {
    var index = e.target.id
    this.setData({
      currentTab: index
    })
  },
  /* nav绑定页面 */
  change: function (e) {
    var cur = e.detail.current;
    this.setData({
      currentTab: cur
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.getSetting({
      success: res => {
        console.log("login")
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                logged: true,
                avatarUrl: res.userInfo.avatarUrl,
                nickname: res.userInfo.nickName,
                userInfo: res.userInfo,
                slogan: '业余摄影师 旅行爱好者'
              })
              wx.setStorageSync('userimage', res.userInfo.avatarUrl)
            }
          })
        }
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        nickname: e.detail.userInfo.nickName,
        userInfo: e.detail.userInfo,
        slogan: '业余摄影师 旅行爱好者'
      })
      wx.setStorageSync('userimage', e.detail.userInfo.avatarUrl)
    }
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