import React from "react";

class Todo {
    // variavel de class pq variavel normais n tem acesso a variaveis de outro obj e preciso saber o id de cada construtor
    static lastId = 0;

    // para qnd eu chamar o new Tudo
    constructor(todos) {
        this.id = Todo.lastId++;;
        this.todo = todos;
        this.done = false;
    }
}

export default Todo;