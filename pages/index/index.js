// pages/index/index.js
//  var name;
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aaa: '111',
    bbb: '222',
    value:'',
  },
  searchBox: function (e) {
    const that = this;
    let first, second;
      first= e.detail.value.username,
      second= e.detail.value.pwd 
    if ((first == that.data.aaa) && (second==that.data.bbb) )
    {
      wx.navigateTo({
      url: '../shuju/shuju'
      })
    }
  },

  submit:function(){
    wx.showToast({
      title: '成功' + arr2,
      icon: 'success',
      duration: 2000
    })  
    var arr = [23, 12, 1, 34, 116, 8, 18, 37, 56, 50];
    var arr2 = arr.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1
      } else {
        return 0;
      }
    })
    console.log(arr2);
    wx.navigateTo({
      url: '../shuju/shuju?arr2=' + this.data.arr2,
      })
    

  },
  xinjian: function () {
    wx.navigateTo({
      url: '../yonghu/yonghu'
    })},
  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})