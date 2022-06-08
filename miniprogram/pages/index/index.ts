import { IAppOption } from '../../../typings'
import { ToList, Todo, TodoTop } from '../../type/todo'


// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    mylist: [
      { id: '1', iconColor: '#97989b', title: "提醒", count: 0 },
      { id: '2', iconColor: '#97989b', title: "列表1", count: 20 },
      { id: '3', iconColor: '#97989b', title: "列表2", count: 12 }
    ] as Array<ToList>,
    todos_sort: { today: 10, plan: 0, all: 20, flag: 9 } as TodoTop,
    flagList: {} as ToList,
    todayList: {} as ToList,
    allList: {} as ToList
  },
  handleTapAddTodo: function () {
    wx.navigateTo({ url: "/pages/addTodo/addTodo" })
  },
  handleTapAddList: function () {
    wx.navigateTo({ url: "/pages/addList/addList" })
  },

  onReady() {
    const { toLists, todos } = app.globalData
    this.setData({ mylist: toLists })
    this.setData({ allList: { id: "-1",  title: "全部", count: todos.length, todos: todos } as ToList })
    const todayTodos = todos.filter(todo => {
      return todo.date.getDay() === new Date().getDay()
    })
    this.setData({
      todayList: { id: "-2", title: "今天", count: todayTodos.length, todos: todayTodos } as ToList
    })
    const flagTodos = todos.filter(todo => {
      return todo.flag === true
    })
    this.setData({
      flagList: { id: "-3", title: "旗帜", count: flagTodos.length, todos: flagTodos } as ToList
    })
    const todos_sort: TodoTop = {
      today: this.data.todayList.todos.length,
      plan: 0,
      all: this.data.allList.todos.length,
      flag: this.data.flagList.todos.length
    }
    this.setData({ todos_sort })
  },
  handleTapTop: function(e:any){
    if(e.detail.type === "plan") {
      this.navToTodosList(this.data.allList)
    }
    if(e.detail.type === "flag") {
      this.navToTodosList(this.data.flagList)
    }
    if(e.detail.type === "today") {
      this.navToTodosList(this.data.todayList)
    }
    if(e.detail.type === "all") {
      this.navToTodosList(this.data.allList)
    }
  },
  navToTodosList: function(list: ToList) {
    app.globalData.currentList = list
    console.log(app.globalData.currentList)
    wx.navigateTo({
      url: "/pages/todoList/todoList"
    })
  }
})
