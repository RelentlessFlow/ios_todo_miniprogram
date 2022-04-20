// components/todoform/todoform.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value1: { type: String, value: "" },
    value2: { type: String, value: "" },
    placeholder1: { type: String, value: "标题" },
    placeholder2: { type: String, value: "备注" },
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
    handleInput1(e: any) {
      this.triggerEvent('input', { type: "input1", data: e.detail })
    },
    handleInput2(e: any) {
      this.triggerEvent('input', { type: "input2", data: e.detail })
    },
  }
})
