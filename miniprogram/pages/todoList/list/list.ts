// pages/todoList/list/list.ts
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
    title: "全部", color: "#5c6269",
    list: [
      { id: '1', name: 'kkk1', listName: '提醒', date: '昨天', flag: true, complete: false },
    ],
    showFinished: true, // 显示完成项目
    showAddInput: false,  // 显示添加TODO表单
    nameInput: "",  // 名称表单
    remarkInput: "",  // 备注表单
  },

  lifetimes: {
    attached: function () {
      const list = [
        { id: '1', name: 'kkk1', listName: '提醒', date: '昨天', flag: true, complete: false },
        { id: '2', name: 'kkk2', listName: '提醒', date: '今天', flag: false, complete: false },
        { id: '3', name: 'kkk3', listName: '提醒', date: '前天', flag: true, complete: false },
        { id: '4', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        { id: '5', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        { id: '6', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true },
        { id: '7', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        { id: '8', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        { id: '9', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true },
        { id: '10', name: 'kkk4', listName: '提醒', date: '昨天', flag: true, complete: true },
        { id: '11', name: 'kkk5', listName: '提醒', date: '今天', flag: false, complete: true },
        { id: '12', name: 'kkk6', listName: '提醒', date: '前天', flag: true, complete: true }
      ];
      this.setData({
        "list": list
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapCompleteButton(e: any) {
      const { id } = e.currentTarget.dataset;
      let { list } = this.data;
      const newList = list.map((item) => {
        if (item.id === id) { let comp = item.complete; item.complete = !comp; }
        return item;
      })
      this.setData({ list: newList })
    },
    handleTapShowButton() {
      console.log('handleTapShowButton');
      this.setData({ "showFinished": !this.data.showFinished })
    },
    handleTapAddButton() {
      this.setData({ "showAddInput": !this.data.showAddInput })
    },
    handleTapAddTodoDoneButton() {
      console.log('handleTapAddTodoDoneButton');
    },
    handleSwiperDelete(e: any) {
      if (e.detail.current === 1) {
        const { id } = e.target.dataset;
        let { list } = this.data;
        const newList = list.filter(item => { return item.id != id })
        setTimeout(() => { this.setData({ list: newList }) }, 500);
      }
    },
    getUnfinishedList() {
      return this.data.list.filter(item => { return !item.complete })
    },
    getFinishedList() {
      return this.data.list.filter(item => { return item.complete })
    },
  },

  observers: {
    "list": function (list: Array<any>) {
      const finishList = list.filter(item => { return item.complete })
      const unFinishList = list.filter(item => { return !item.complete })
      this.setData({
        "finished_list": finishList, "unfinished_list": unFinishList
      }); // 已完成的项目 finished_list 未完成的项目 unFinishList
    }
  }
})