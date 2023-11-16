import React from 'react'
import TodoItem from './TodoItem';


function TodoList({todos}) {
  return (
    <div>
      {
        todos.map((todo, index) => (
            <TodoItem key ={`todo-${index}`}todo = {todo}/>
        ))
      }
    </div>
  )
}

export default TodoList;