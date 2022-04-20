// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    mylist: [
      {id: 1, iconColor: '#97989b', title: "提醒", count: 0},
      {id: 2, iconColor: '#97989b', title: "列表1", count: 20},
      {id: 3, iconColor: '#97989b', title: "列表2", count: 12}
    ]
  },
  handleTapAddTodo: function() {
    wx.navigateTo({url: "/pages/addTodo/addTodo"})
  },
  handleTapAddList: function() {
    wx.navigateTo({url: "/pages/addList/addList"})
  }
})
