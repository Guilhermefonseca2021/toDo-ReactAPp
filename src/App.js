import './App.css';
import React, { useState, useEffect } from 'react';
// import { BsTrash, BsBookmarkCheck, BsBookmarkFill } from 'react-icons/bs';

// const API = 'https:localhost:5000';

function App() {

  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [todos, setTodos] = useState([])
  const [loading, setLoasding] = useState(false)

  function handleSubmit(eventoClicado) {
    // nao recarregue a pagina
    eventoClicado.preventDefault()

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    // envio para o back-end
    console.log(todo);

    setTitle('')
    setTime('')
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        <h2>insira sua proxima tarefa: </h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'> O que voce vai fazer? </label>
            <input 
              type='text' 
              name='title' 
              placeholder='Titulo da tarefa' 
              onChange={(eventoEscrevendo)=> setTitle(eventoEscrevendo.target.value)}
              // o valor do input seja carregado na hr q tiver carregando a pagina
              value={title || ''}
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='title'> Duracao:  </label>
            <input 
              type='number' 
              name='time' 
              placeholder='tempo estimado(hrs)' 
              onChange={(writeEvent)=> setTime(writeEvent.target.value)}
              // o valor do input seja carregado na hr q tiver carregando a pagina
              value={time || ''}
              required
            />
          </div>
          {/* aqui o submit realiza a funcao onSubmit do form */}
          <input type='submit' value='Criar tarefa' />
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de tarefas: </h2>
        {todos.length === 0 && <p>Nao ha tarefas! </p>}
      </div>
    </div>
  );
}

export default App;
