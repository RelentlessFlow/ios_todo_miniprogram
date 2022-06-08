import {TodoTop} from '../../../type/todo'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todos_sort: {
      type: Object,
      value: { today: 1, plan: 2, all: 3, flag: 4 } as TodoTop
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
    },
    handeTap(e:any) {
      this.triggerEvent("tapt", {type: e.currentTarget.dataset.type})
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
