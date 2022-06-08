import { IAppOption } from '../typings'
import {getToLists} from './api/apiTodo'
import {ToList, Todo, TodoTop} from './type/todo'
App({
  globalData: {
    todos: [] as Array<Todo>,
    toLists: [] as Array<ToList>,
    currentList: {} as ToList,
  },
  initApp: async function(){
    const that = this
    getToLists().then((res:Array<any>) => {
      const list:Array<ToList> = [];
      const todos = [] as Array<Todo>
      res.forEach(list => {
         list.todos.forEach((todo: { id: string; name: string; remark: string; dateTime: string; flag: boolean; complete: boolean }) => {
           const td:Todo = {
             id: todo.id,
             name: todo.name,
             remark: todo.remark,
             date: new Date(todo.dateTime),
             flag: todo.flag,
             complete: todo.complete,
             listName: list.title,
             listId: list.id
           }
           todos.push(td)
         });
      }) // 获取全部todos
      that.globalData.todos = todos
      res.forEach(r => {
        const mytodos = [] as Array<Todo>
        r.todos.forEach((todo:any) => {
          const mytodo = {} as Todo
          mytodo.id = todo.id,
          mytodo.name = todo.name,
          mytodo.remark = todo.remark,
          mytodo.date = new Date(todo.dateTime),
          mytodo.flag =  todo.flag,
          mytodo.complete = todo.complete,
          mytodo.listName = todo.title,
          mytodo.listId = todo.id
          mytodos.push(mytodo)
        });
        const item:ToList = {
          id: r.id,
          iconColor: r.iconColor,
          title: r.title,
          count: (r.todos as Array<any>).length,
          todos: mytodos
        }
        list.push(item)
      })
      that.globalData.toLists = list
    })
  },
  onLaunch() {
    this.initApp()
  },
} as IAppOption)