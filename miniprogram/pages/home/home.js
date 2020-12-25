// pages/home/home.js
Page({
  /*页面的初始数据*/
  data: {
    bannerImage: [],
    searchHolder: [],
    todayhot1: [],
    todayhot2: [],
    todayhot3: [],
    guoneitop10: [],
    haiwaitop10: [],
    currentTab: 0,
    hotcurrent: 0,
    clientHeight: 0,
    head_height: 0,
  },
  /* 页面绑定nav */
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
  /* 排序函数 */
  shuffle: function (array) {
    var n = array.length, t, i;
    console.log(n)
    while (n) {
      i = Math.random() * n-- | 0; // 0 ≤ i < n
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  },

  // 截获竖向滑动
  catchTouchMove: function (res) {
    return false
  },
/* 跳转到详情页 传递两个参数：数据库表名 城市名称 */
  showdistdetail: function(e) {
    console.log(e)
    var database = e.currentTarget.dataset.db
    var city = e.currentTarget.dataset.ct
    wx.navigateTo({
      url: '../destdetail/destdetail?'+'database='+database+'&city='+city,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    /* 从数据库中获取banner数据 */
    db.collection('banner').limit(4).get({
      success: res => {
        this.setData({
          bannerImage: res.data
        })
      },
      fail: console.error
    })
    /* 从数据库中获取今日热门数据 */
    db.collection('todayhot').limit(9).get({
      success: res => {
        var datalist = this.shuffle(res.data)
        this.setData({
          searchHolder: datalist,
          todayhot1: [datalist[0], datalist[1], datalist[2]],
          todayhot2: [datalist[3], datalist[4], datalist[5]],
          todayhot3: [datalist[6], datalist[7], datalist[8]]
        })
      },
      fail: console.error
    })
    /* 从数据库中获取国内top10数据 */
    db.collection('guoneitop10').limit(10).get({
      success: res => {
        this.setData({
          guoneitop10: res.data
        })
      },
      fail: console.error
    })
    /* 从数据库中获取海外top10数据 */
    db.collection('haiwaitop10').limit(10).get({
      success: res => {
        this.setData({
          haiwaitop10: res.data
        })
      },
      fail: console.error
    })

    /* 获取窗口高度 */
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight,
        });
      }
    })

    /* 获取head高度 */
    var query = wx.createSelectorQuery();
    query.select('#head').boundingClientRect(function (rect) {
      that.setData({
        head_height: rect.height
      })
    }).exec();
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
    this.onLoad()
    this.setData({
      hotcurrent: 0
    })
    wx.stopPullDownRefresh()
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