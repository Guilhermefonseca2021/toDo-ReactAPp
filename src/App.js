import './App.css';
import React, { useState, useEffect } from 'react';
import FormTudo from './FormTudo'
import List from './List';

function App() {

  const [todos, setTodos] = useState([])

  function onAddItem(todo) {
    // mt importante passar o array para se usar a funcao map
    // mais ainda fzr receber oq ja tem e somar o novo estado title
    setTodos([...todos, todo])
  }


  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>

      <FormTudo onAddItem={onAddItem}></FormTudo>
      <List todos={todos}></List>
    </div>
  );
}

export default App;
