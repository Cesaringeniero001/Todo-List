import logo from './logo.svg';
import data from './data.json'
import './App.css';
import { useState } from 'react';
import TodoList from './componentes/TodoList';
import TodoForm from './componentes/TodoForm';

function App() {

  const [todos , setTodos] = useState(data);

  const onComplete = (id) => {
    console.log("task", id);

    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {... todo}
    }))
  }

  const onDeleteItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    console.log("newTodo", newTodo)
    let newItem = {id: +new Date(), task: newTodo, completed: false};

    setTodos([...todos, newItem])
  }

  return (
    <div className="container">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos = {todos} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
    </div>
  );
}

export default App;
