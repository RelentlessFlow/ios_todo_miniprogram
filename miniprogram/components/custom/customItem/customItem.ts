// components/custom/customItem/customItem.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    brt: {type: Boolean, value: false},  // border-radius-top 上圆角
    brb: {type: Boolean, value: false},  // border-radius-top 下圆角
    border: {type: Boolean, value: false}, // border-bottom 下边框
    showArrow: {type: Boolean, value: true}, // 展示右侧的箭头
    borderWidth: {type: Number, value: 100}, // 底部边框宽度
    bgColor: {type: String, value: ''}, // 项目背景颜色,
    padding: {type: String, value: ''} // 内变局
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

  }
})
