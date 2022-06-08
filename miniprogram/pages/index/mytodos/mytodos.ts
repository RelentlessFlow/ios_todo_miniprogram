import { IAppOption } from "../../../../typings";
import { ToList } from "../../../type/todo";
const app = getApp<IAppOption>()
// components/mytodos/mytodos.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Object,
      value: [] as Array<ToList>
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
    navToListDetail: function(e:any) {
      const {item} = e.currentTarget.dataset;
      app.globalData.currentList = item
      wx.navigateTo({
        url: `/pages/todoList/todoList`
      })
    }
  }
})
