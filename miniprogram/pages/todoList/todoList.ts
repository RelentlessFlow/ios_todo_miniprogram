import { IAppOption } from "../../../typings"
import { Todo } from "../../type/todo"
import { changeTodoComplete, changeTodoFlag } from '../../api/apiTodo'
const app = getApp<IAppOption>()

// pages/todoList/todoList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '1', title: "全部",
    todos: [] as Array<Todo>,
    showFinished: true, // 显示完成项目
    showAddInput: false,  // 显示添加TODO表单
    nameInput: "",  // 名称表单
    remarkInput: "",  // 备注表单
  },

  handleTapCompleteButton() {
    console.log('handleTapCompleteButton')
  },
  handleTapShowButton() {
    this.setData({"showFinished": !this.data.showFinished})
  },
  handleTapAddButton() {
    this.setData({"showAddInput": !this.data.showAddInput})
  },
  handleTapAddTodoDoneButton() {
    console.log('handleTapAddTodoDoneButton');
  },
  handleSwiperDelete(e:any) {
    if(e.detail.current === 1) {
      const {id} = e.target.dataset;
      const {todos} = this.data;
      const newList = todos.filter(item => {return item.id != id })
      setTimeout(() => {this.setData({todos: newList})}, 500);
    }
  },
  getUnfinishedList() {
    return this.data.todos.filter(item => {return !item.complete})
  },
  getFinishedList() {
    return this.data.todos.filter(item => {return item.complete})
  },
  onReady() {
    const cur = app.globalData.currentList
    console.log(cur) 
    this.setData({id: cur.id})
    this.setData({title: cur.title})
    this.setData({todos: cur.todos})
  },
})