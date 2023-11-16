import logo from './logo.svg';
import data from './data.json'
import './App.css';
import { useState } from 'react';
import TodoList from './componentes/TodoList';

function App() {

  const [todos , setTodos] = useState(data);

  

  return (
    <div className="container">
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
