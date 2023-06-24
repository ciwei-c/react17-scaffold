import { configure } from "mobx"
configure({ useProxies: "never" })

import UserStore from "./User"
import TodoStore from "./Todo"
class Store {
  user: UserStore
  todo: TodoStore
  constructor() {
    this.user = new UserStore()
    this.todo = new TodoStore()
  }
}

export default new Store()