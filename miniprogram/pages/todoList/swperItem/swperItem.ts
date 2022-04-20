// pages/todoList/swperItem/swperItem.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftText1: { type: String, value: "leftText1" },
    leftText2: { type: String, value: "leftText2" },
    turn: { type: Boolean, value: true }, // turn True 显示 leftText1 否则 leftText2
    rightText: { type: String, value: "Right" },
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSwiper(e: any) {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          this.setData({ 'index': 1 }); resolve(true)
        }, 500) // 滑回去
      });
      promise.then(() => {
        if (e.detail.current === 0) { // 左滑逻辑
          this.setData({ 'turn': !this.properties.turn }) // 切换左侧文字
          this.triggerEvent('swiper', { // 派发事件
            direction: 'left', turn: this.properties.turn
          })
        }
        if (e.detail.current === 2) { // 右滑逻辑
          this.triggerEvent('swiper', {
            direction: 'right'
          })
        }
      })
    },
  }
})
