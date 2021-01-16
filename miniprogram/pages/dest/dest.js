// pages/dest/dest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Asia: [],
    Eur: [],
    NA: [],
    SA: [],
    AF: [],
    DY: [],
    NJ: [],
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh()
    const db = wx.cloud.database()
    db.collection("destination").where({continent: "Asia"}).limit(5).get({
      success: res => {
        this.setData({Asia: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "Eur"}).limit(5).get({
      success: res => {
        this.setData({Eur: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "NA"}).limit(5).get({
      success: res => {
        this.setData({NA: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "SA"}).limit(5).get({
      success: res => {
        this.setData({SA: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "AF"}).limit(5).get({
      success: res => {
        this.setData({AF: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "DY"}).limit(5).get({
      success: res => {
        this.setData({DY: res.data})
      },
      fail: console.error
    })
    db.collection("destination").where({continent: "NJ"}).limit(5).get({
      success: res => {
        this.setData({NJ: res.data})
      },
      fail: console.error
    })
  },
  sorry: function () {
    wx.showToast({
      title: '该功能暂未开发 下学期再做 可以点击首页-榜单查看哦',
      icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
      duration: 5000     
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
    var that = this;
    this.onLoad(); //重新加载onLoad()

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