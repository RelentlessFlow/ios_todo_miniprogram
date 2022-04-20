// pages/addTodo/buttonform/buttonform.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftTitle: { type: String, value: "LEFT"},
    rightTitle: { type: String, value: "RIGHT"}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLeftButtonTap: function() {
      this.triggerEvent("lefttap", {})
    },
    handleRightButtonTap: function() {
      this.triggerEvent("righttap", {})
    }
  }
})
