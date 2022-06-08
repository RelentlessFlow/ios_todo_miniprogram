import { IAppOption } from "../../../typings"
import { ToList } from "../../type/todo"

const app = getApp<IAppOption>()
// const l : Array<ToList> | string = '123'
// const l  = '123' as Array<ToList> | string 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[] as Array<ToList>,
    currentId: "" as string
  },
  
  handleTap: function(e: any) {
    const {id, name} = e.currentTarget.dataset
    this.setData({currentId: id})
    let pages = getCurrentPages();
    let prevPage = pages[ pages.length - 2 ];
    prevPage.setData({ currentId: id })
    prevPage.setData({ currentName: name })
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log("sadasd")
    const {toLists,currentId}  = app.globalData
    console.log( app.globalData)
    this.setData({list: toLists})
    this.setData({currentId: currentId})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})