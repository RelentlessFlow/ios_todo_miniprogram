// components/search/search.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    search_active: false,
    cancel_active: false,
    edit_active: false,
    clear_active: false
  },
  lifetimes: {
    ready: function() {
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
      _displaySearchList: function() {
        this.setData({
          edit_active: false,
          cancel_active: true,
          search_active: true
        })
      },
      _fadeSearchList: function() {
        this.setData({
          edit_active: true,
          cancel_active: false,
          search_active: false
        })
      }
  }
})
