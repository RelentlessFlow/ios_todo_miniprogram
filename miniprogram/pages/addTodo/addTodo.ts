// pages/addTodo/addTodo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag : false, name: '', remark: ''
  },
  handleButtonTap(e:any) {
    if(e.type === 'lefttap') { // 左点击
      console.log('handleButtonTap Left');
    }
    if(e.type === 'righttap') { // 左点击
      console.log('handleButtonTap Right');
    }
  },
  handleFlagSwitch() {
    this.setData({"flag": !this.data.flag})
  },
  handleInput(e:any) {
    const {data, type} = e.detail;
    if(type === 'input1') { this.setData({'name': data.value}) }
    if(type === 'input2') { this.setData({'remark': data.value}) }
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