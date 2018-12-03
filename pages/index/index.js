var app = getApp()
Page({
  data: {
     aaa: '111',
     bbb: '222',
    itemLists: [
      { id: 1, time: '111 222' },
      { id: 2, time: '222 333' },
      { id: 3, time: '333 444' },
    ]
  },
  searchBox: function (e) {
    const that = this;
    var first, second;
      first= e.detail.value.username,
      second= e.detail.value.pwd 
    if ((first == that.data.aaa) && (second==that.data.bbb) )
    {wx.navigateTo({
      url: '../shuju/shuju'
      })}},
  xinjianyonghu: function () {
    wx.navigateTo({
      url: '../xinjian/xinjian'
    })},
  xiugaiyonghu: function () {
    wx.navigateTo({
      url: '../xiugai/xiugai'
    })},
    refresh_bt: function () {
      var mingzi = wx.getStorageSync('mingzi');//wx.getStorageSync(key)，获取本地缓存
      var mimaa = wx.getStorageSync('mimaa');//wx.getStorageSync(key)，获取本地缓存
      wx.showToast({
        title: '' + mingzi+ mimaa,
        icon: 'success',
        duration: 2000
      }) 
      this.data.itemLists.push({ time: mingzi + " " + mimaa });
          app.globalData.singleChoiceAnswerNow = this.data.itemLists;
  },})