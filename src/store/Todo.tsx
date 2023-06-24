import { autorun, makeAutoObservable, reaction, runInAction, trace, when } from "mobx"

interface Todo {
  title: string
}



class TodoStore {
  todoList: Todo[] = []
  constructor() {
    makeAutoObservable(this)
    when(() => {
      return this.todoList.length > 3;
    }, () => {
      console.log('the condition of "when" function already get, notice please, this callback only excute once')
    })

    autorun(() => {
      this.todoList.length
      trace()
      console.log('when the variable in this function has changed, this function will executes. ')
    })

    reaction(() => {
      return this.todoList
    }, (data) => {
      console.log(data)
    })
  }


  get computedTodoList() {
    return this.todoList.map((v, index) => {
      return {
        title: `${index + 1}. ${v.title}`
      }
    })
  }
  addTodo(payload: Todo) {
    this.todoList.push(payload)
  }
  asyncAddTodo(payload: Todo) {
    setTimeout(() => {
      runInAction(() => {
        console.log(1212)
        this.todoList.push(payload)
      })
    }, 1000);
  }
}
export default TodoStore