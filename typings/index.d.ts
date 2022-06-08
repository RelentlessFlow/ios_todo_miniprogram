/// <reference path="./types/index.d.ts" />

import { Todo, ToList } from "../miniprogram/type/todo";

interface IAppOption {
  globalData: {
    todos: Array<Todo>,
    toLists: Array<ToList>,
    currentList: ToList,
  },
  initApp: Function
}