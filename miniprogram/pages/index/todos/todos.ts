// components/todos/todos.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todos_sort: {
      type: Object,
      value: { today: 1, plan: 2, all: 3, flag: 4 }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    day: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getDay() {
      return new Date().getDate()
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        "day": this._getDay()
      }) 
    }
  }
})
