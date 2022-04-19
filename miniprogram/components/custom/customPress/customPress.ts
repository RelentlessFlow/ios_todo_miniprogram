// components/custom/customPress/customPress.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onTapCallback: {
      type: Object, value: function(){console.log('onTapCallback')}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isTouched: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTouchStart: function() {
      this.setData({isTouched: true})
    },
    handleTouchEnd: function() {
      this.setData({isTouched: false})
    },
  }
})
