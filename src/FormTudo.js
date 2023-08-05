import React, { useState } from "react";

function FormTudo (props) {

    const [title, setTitle] = useState('')

    function handleSubmit(submitEvent) {
        
        submitEvent.preventDefault()
    
        if (title) {
        // mt importante meu todo'title' como argumento da funcao como callback
          props.onAddItem(title)
          setTitle('')
        }
      }    

    return (
        <div className='form-todo'>
            <h2>insira sua proxima tarefa: </h2>
            <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='title'> O que voce vai fazer? </label>
                <input 
                type='text' 
                name='title' 
                placeholder='Titulo da tarefa' 
                onChange={(writingEvent)=> setTitle(writingEvent.target.value)}
                // o valor do input seja limpo qnd der submit
                value={title || ''}
                required
                />
            </div>
            {/* aqui o submit realiza a funcao onSubmit do form */}
            <input type='submit' value='Criar tarefa' />
            </form>
        </div>
    )
}

export default FormTudo;