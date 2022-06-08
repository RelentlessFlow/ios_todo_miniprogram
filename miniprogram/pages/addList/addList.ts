import {addToList} from '../../api/apiTodo'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colors: [
      "#ea4d3d", "#f19937", "#f6cd45", "#5dc366",
      "#67a9ec", "#327cf6", "#575ace", "#d8506c",
      "#b57dd5", "#9a8566", "#5d666f", "#d1a8a0"
    ],
    current: "#ea4d3d",
    icon: {id: 1, path: "/images/icons/list.png"},
    input: ""
  },
  handleButtonTap: async function(e:any) {
    if(e.type === 'lefttap') {
      const {current, input} = this.data
      if(input === "") return
      const result = await addToList(current, input)
      if(result) {
        wx.showToast({
          title: "添加成功"
        })
        wx.navigateTo({
          url: "/pages/index/index"
        })
      }else {
        wx.showToast({
          title: "添加失败"
        })
        return
      }
    }
    if(e.type === 'righttap') {
      wx.navigateBack()
    }
  },
  handleColorSelect: function(e:any) {
    this.setData({"current": e.target.dataset.id}) 
  },
  handleInputChange: function(e:any) {
    this.setData({input: e.detail.value})
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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