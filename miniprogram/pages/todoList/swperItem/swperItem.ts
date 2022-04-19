// pages/todoList/swperItem/swperItem.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bindLeftSwiper: { type: Object, value: function() {} },
    bindRightSwiper: { type: Object, value: function() {} },
    leftText: { type: String, value: "Left"},
    rightText: { type: String, value: "Right"},
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 1, id: 1, leftText: "Left", rightText: "Right",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSwiperItem(e: any) {
      if (e.detail.current === 2) { // 右滑逻辑
        setTimeout(() => { 
          console.log(e);
         }, 500)
      }
      if (e.detail.current === 0) { // 左滑逻辑
        setTimeout(() => { 
          console.log(e);
         }, 500)
      }
    }
  }
})
