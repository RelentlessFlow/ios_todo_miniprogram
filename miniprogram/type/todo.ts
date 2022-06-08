export type ToList = {
  id: string,
  iconColor : string,
  title: string,
  count: number,
  todos: Array<Todo>
}
export type Todo = {
  id: string,
  name: string,
  remark: string,
  listName: string,
  listId: string
  date: Date,
  flag: boolean,
  complete: boolean
}

export type TodoTop = {
  today: number,
  plan: number,
  all: number,
  flag: number
}

