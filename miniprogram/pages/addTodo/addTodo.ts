const app = getApp<IAppOption>()
import { IAppOption } from '../../../typings'
import { addTodo } from '../../api/apiTodo'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    flag: false, name: '', remark: '',
    currentId: "",
    currentName: ""
  },
  async handleButtonTap(e: any) {
    const { name, flag, remark, currentId } = this.data
    if (e.type === 'lefttap') { // 左点击
      const result = await addTodo(name, remark, flag, false, currentId)
      if (result) {
        wx.navigateTo({
          url: "/pages/index/index"
        })
      } else {
        wx.showToast({
          title: "网络请求超时"
        })
      }
    }
    if (e.type === 'righttap') { // 左点击
      console.log('handleButtonTap Right');
    }
  },
  handleFlagSwitch() {
    this.setData({ "flag": !this.data.flag })
  },
  handleInput(e: any) {
    const { data, type } = e.detail;
    if (type === 'input1') { this.setData({ 'name': data.value }) }
    if (type === 'input2') { this.setData({ 'remark': data.value }) }
  },
  handleCategoryTap() {
    wx.navigateTo({
      url: "/pages/selectList/selectList"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { currentId, currentName } = options
    if(currentId != undefined) {
      if(currentId.length > 4) {
        this.setData({currentId})
        this.setData({currentName})
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const { currentId, currentName } = this.data
    if(currentId == "" && currentName == "") {
      const { id, title } = app.globalData.toLists[0]
      this.setData({ currentId: id })
      this.setData({ currentName: title })
    }
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