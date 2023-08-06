import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import FormTudo from './FormTudo'
import List from './List';

function App() {

  const [todos, setTodos] = useState([])

  function onAddItem(title) {
    // mt importante passar o array para se usar a funcao map
    // mais ainda fzr receber oq ja tem e somar o novo estado title
    let task = new Todo(title)
    setTodos([...todos, task])
  }

  function onTodoDeleted(todo) {
    let filteredTodo = todos.filter(task=>task.id != todo.id)

    setTodos(filteredTodo)
  }

  function onDone(todo) {
    
    let updateTodos = todos.map(task => {
    // cada item do meu id for igual ao que cliquei 
      if(task.id === todo.id) {
        task.done = !task.done; //importante o ! para retornar o contrario e poder undone, done vice versa
      }

      return task;
    })

    setTodos(updateTodos)
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <FormTudo onAddItem={onAddItem}></FormTudo>
      <List onDone={onDone} onTodoDeleted={onTodoDeleted} todos={todos}></List>
    </div>
  );
}

export default App;
