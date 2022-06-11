export const getToLists = () => {
  return new Promise((resolve => {
    wx.request({
      url: 'https://localhost:7250/api/tolists',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data)
      },
    })
  }))
}

export const addToList = (iconColor:string, title:string) => {
  iconColor = iconColor.replace('#', '%23')
  const url = `https://localhost:7250/api/tolist?iconColor=${iconColor}&title=${title}`;
  return new Promise((resolve => {
    wx.request({
      url: url,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if(res.statusCode === 200) {
          resolve(true)
        }
      }
    })
  }))
}

export const addTodo = (name:string, remark:string, flag:boolean, complete:boolean,  toListId:string) => {
  return new Promise((resolve => {
    console.log(toListId)
    wx.request({
      url: 'https://localhost:7250/api/todo',
      data: { name, remark, flag, complete, toListId },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if(res.statusCode === 200) {
          resolve(true)
        }
      }
    })
  }))
}

export const changeTodoFlag = (id: string) => {
  return new Promise((resolve => {
    wx.request({
      url: `https://localhost:7250/api/todo/${id}/flag`,
      method: "PUT",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if(res.statusCode === 200) {
          resolve(true)
        }
      }
    })
  }))
}

export const changeTodoComplete = (id: string) => {
  return new Promise((resolve => {
    wx.request({
      url: `https://localhost:7250/api/todo/${id}/complete`,
      method: "PUT",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if(res.statusCode === 200) {
          resolve(true)
        }
      }
    })
  }))
}

export const deleteTodo = (id: string) => {
  return new Promise((resolve => {
    wx.request({
      url: `https://localhost:7250/api/todo/${id}`,
      method: "DELETE",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if(res.statusCode === 200) {
          resolve(true)
        }
      }
    })
  }))
}
