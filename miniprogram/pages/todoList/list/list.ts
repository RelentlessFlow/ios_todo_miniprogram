import { Todo } from '../../../type/todo'
import { changeTodoComplete, changeTodoFlag, deleteTodo } from '../../../api/apiTodo'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todos: {
      type: Array,
      value: [] as Array<Todo>,
    },
    title: {
      type: String,
      value: "标题"
    },
    categoryId: {
      type: String,
      value: "000"
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    color: "#5c6269",
    showFinished: true, // 显示完成项目
    showAddInput: false,  // 显示添加TODO表单
    nameInput: "",  // 名称表单
    remarkInput: "",  // 备注表单
  },

  lifetimes: {
    attached: function () {
      this.setData({title: this.properties.title})
      this.setData({color: this.properties.color})
      console.log(this.properties)
    }    
    },

  observers: {
    "todos ": function (todos: Array<any>) {
      console.log(todos)
      const finishList =  todos.filter(item => { return item.complete })
      const unFinishList = todos.filter(item => { return !item.complete })
      this.setData({
        "finished_list": finishList, "unfinished_list": unFinishList
      }); // 已完成的项目 finished_list 未完成的项目 unFinishList
    }
  },
  methods: {
    async handleTapCompleteButton(e: any) {
      const { id } = e.currentTarget.dataset;
      const rs = await changeTodoComplete(id)
      if(rs) {
        const { todos } = this.properties as { todos: Array<Todo> }
        const todo = todos.find(item => item.id === id)
        const complete = todo!.complete
        todo!.complete = !complete
        this.setData({"todos": todos})
      } else {
        wx.showToast({title: "网络连接超时"})
      }
    },
    async handleSwiper(e: any) {
      const { id } = e.currentTarget
      const { direction, turn } = e.detail
      if(direction === 'left') { // 旗帜
        if(await changeTodoFlag(id)) {
          const { todos } = this.properties as { todos: Array<Todo> }
          const todo = todos.find(item => item.id === id)
          const flag = todo!.flag
          todo!.flag = !flag
          this.setData({"todos": todos})
        } else {
          wx.showToast({title: "网络连接超时"})
        }
      }
      if(direction === 'right') { // 删除
        if(await deleteTodo(id)) {
          const { todos } = this.properties as { todos: Array<Todo> }
          const newTodos = todos.filter(item => item.id !== id)
          this.setData({"todos": newTodos})
        } else {
          wx.showToast({title: "网络连接超时"})
        }
      }
    },
    handleTapAddButton() {
      const { categoryId, title } = this.properties
      wx.navigateTo({
        url: `/pages/addTodo/addTodo?currentId=${categoryId}&&currentName=${title}`
      })
    },
    handleTapShowButton() {
      console.log('handleTapShowButton')
      this.setData({showFinished: !this.data.showFinished})
    },
    handleItemTapShowDetail(e: any) {
      let { remark } = e.currentTarget.dataset
      if(remark === "") { remark = "无" }
      wx.showModal({ title: `备注内容: ${remark}`, showCancel: false })
    }
  }
})
