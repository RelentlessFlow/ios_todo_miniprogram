// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    mylist: [
      {iconColor: '#97989b', title: "提醒", count: 0},
      {iconColor: '#97989b', title: "列表1", count: 20},
      {iconColor: '#97989b', title: "列表2", count: 12}
    ]
  },
  handleAddTodolist: function() {
    console.log('CCC');
  }
})
