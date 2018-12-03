// pages/xiugai/xiugai.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  yonghuxiangguan: function (e) 
  {
    const that = this;
    var ddd;
    ddd = e.detail.value.xinmima
   let pages = getCurrentPages();//当前页面
    let prevPage2 = pages[pages.length - 2];//上一页面
    prevPage2.setData({//直接给上移页面赋值
      bbb: ddd,
    })
    wx.showToast({
      title: '密码修改成功',
      icon: 'success',
      duration: 2000
    })
    setTimeout(function () {
      wx.navigateBack({
        url: '../index/index'
      })
    }, 1000) //延迟时间
     }
})
 