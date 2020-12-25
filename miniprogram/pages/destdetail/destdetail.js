// pages/destdetail/destdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    destdetail: {},
    cityintro: []
  },

  back: function() {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    /* 根据传递过来的数据库表名和城市名称去数据库查询城市详情数据 */
    var database = e.database
    var city = e.city
    const db = wx.cloud.database()
    db.collection(database).where({
      title: city
    })
    .get({
      success: res => {
        this.setData({
          destdetail: res.data[0],
        })
        if(res.data[0].intro){
          this.setData({
            cityintro: res.data[0].intro.split("\\n")
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