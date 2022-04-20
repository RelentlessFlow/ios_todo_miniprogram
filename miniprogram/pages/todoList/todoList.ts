// pages/todoList/todoList.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '1', title: "全部", color: "#5c6269",
    todos: {
      list: [
        {id: '1', name: 'kkk1', listName: '提醒', date: '昨天', flag: true, complete: false },
        {id: '2', name: 'kkk2', listName: '提醒', date: '今天', flag: false, complete: false },
        {id: '3', name: 'kkk3', listName: '提醒', date: '前天', flag: true, complete: false },
        {id: '4', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        {id: '5', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        {id: '6', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true },
        {id: '7', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        {id: '8', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        {id: '9', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true },
        {id: '10', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        {id: '11', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        {id: '12', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true }
      ],
    },
    showFinished: true, // 显示完成项目
    showAddInput: false,  // 显示添加TODO表单
    nameInput: "",  // 名称表单
    remarkInput: "",  // 备注表单
  },

  handleTapCompleteButton() {
    console.log('handleTapCompleteButton')
  },
  handleTapShowButton() {
    this.setData({"showFinished": !this.data.showFinished})
  },
  handleTapAddButton() {
    this.setData({"showAddInput": !this.data.showAddInput})
  },
  handleTapAddTodoDoneButton() {
    console.log('handleTapAddTodoDoneButton');
  },
  handleSwiperDelete(e:any) {
    if(e.detail.current === 1) {
      const {id} = e.target.dataset;
      const {todos} = this.data;
      const {list} = todos; // 处理未完成列表
      const newList = list.filter(item => {return item.id != id })
      todos.list = newList;
      setTimeout(() => {this.setData({todos: todos})}, 500);
    }
  },
  getUnfinishedList() {
    return this.data.todos.list.filter(item => {return !item.complete})
  },
  getFinishedList() {
    return this.data.todos.list.filter(item => {return item.complete})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({"id": options.id})
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