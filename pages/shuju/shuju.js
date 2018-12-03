var app = getApp()
Page({
  data: {
    itemLists: []
  },
  deleteIitems(e) {
    let idx = e.currentTarget.dataset.idx
    let list = this.data.itemLists
    let filterRes = list.filter((ele, index) => {
      return index != idx
    })
    this.setData({
      itemLists: filterRes
    })
  },
  dengluyemian:function(e){
wx.redirectTo({
    url: '../xinjian/xinjian'
  })
  },
 onLoad: function () {
   var that = this;
   var listnew = app.globalData.singleChoiceAnswerNow ;
   this.setData({
     itemLists: listnew
      })
   wx.showToast({
     title: '成功' ,
     icon: 'success',
     duration: 2000
   })
 }
})

