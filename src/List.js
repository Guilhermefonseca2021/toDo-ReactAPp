import React, { useState } from "react";


function List(props) {

    function DoneImg(props) {
        // se o padrao do comportamento do butao false for true realise nosso class do list
        if(props.done) {
            return ( <img alt="done" className="manager-icon" src="./assets/done.png"></img> )
        } else {
            return ( <img alt="undone" className="manager-icon" src="./assets/undone.png"></img> )
        }
    }


    return (
        <div className='list-todo'>
            <h2>Lista de tarefas: </h2>
                {props.todos.length === 0 && <p>Nao ha tarefas! </p>}
            <ul>
                {props.todos.map(todo => <li className={todo.done? 'done todo' : 'todo'} key={todo.id}>
                    {todo.todo}
                    <div>
                        <button onClick={()=> { props.onDone(todo) } } className="manager"><DoneImg done={todo.done}></DoneImg></button>
                        <button onClick={()=> { props.onTodoDeleted(todo)}} className="manager"><img alt="trash" className="manager-icon" src="./assets/trash.png"></img></button>
                    </div>
                </li>)}
            </ul>   
        </div>     
    )
}

export default List;