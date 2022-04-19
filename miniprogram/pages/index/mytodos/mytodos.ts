// components/mytodos/mytodos.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Object,
      value: [
        {iconColor: '#eb8835', title: "列表2", count: 0},
        {iconColor: '#eb8835', title: "列表1", count: 20},
        {iconColor: '#eb8835', title: "列表2", count: 12}
      ]
    }
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
