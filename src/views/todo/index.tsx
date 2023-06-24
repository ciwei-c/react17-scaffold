import store from "@/store";
import { useState } from "react";

const TodoList = function () {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (newTodo) {
      store.todo.addTodo({
        title: newTodo
      })
      store.user.setUserInfo({ name: newTodo })
      setNewTodo("");
    }
  }
  const asyncAddTodo = () => {
    if (newTodo) {
      store.todo.asyncAddTodo({
        title: newTodo
      })
      setNewTodo("");
    }
  }
  return <div>
    <div>
      <input type="text" value={newTodo} onChange={(e) => {
        setNewTodo(e.target.value)
      }} />
      <button onClick={addTodo}>add todo</button>
      <button onClick={asyncAddTodo}>async add todo</button>
      <div>
        Todo List:
        {store.todo.todoList.map((v, index) => {
          return <div key={index}>{v.title}</div>
        })}
      </div>
      <div>
        Computed Todo List:
        {store.todo.computedTodoList.map((v, index) => {
          return <div key={index}>{v.title}</div>
        })}
      </div>
    </div>
  </div>
}

export default TodoList;