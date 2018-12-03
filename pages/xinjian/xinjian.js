Page({
  data: {
  },
  xinjianBox:function(e){
    let mingzi,mimaa;
    mingzi = e.detail.value.xinyonghu;
    mimaa = e.detail.value.xinmima;
    wx.showToast({
      title: '' + mingzi + mimaa,
      icon: 'success',
      duration: 2000
    })
    wx.setStorage({//存储到本地
      key: "mimaa",
      data: mingzi+" "+mimaa
    })
  },
  fanhui:function(){
    wx.navigateBack({
      url: '../index/index'
    })
  }
})
