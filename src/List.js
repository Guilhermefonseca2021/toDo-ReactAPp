import React, { useState } from "react";


function List(props) {
    return (
        <div className='list-todo'>
            <h2>Lista de tarefas: </h2>
                {props.todos.length === 0 && <p>Nao ha tarefas! </p>}
            <ul>
                {props.todos.map(todo => <li>{todo}</li>)}
            </ul>   
        </div>     
    )
}

export default List;