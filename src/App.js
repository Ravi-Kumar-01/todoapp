import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react'
import TodoItem from './components/TodoItem';
import './App.css';
import { Navbar } from "./components/Navbar";
import { TodoContainer } from "./components/TodoContainer";
import { Footer } from "./components/Footer";
// import About from "./components/About";
import { AddTodo } from './components/AddTodo'



function App(todo) {
    const onDelete = (todo) => {
        console.log("I am on Delete of todo", todo)

        setTodos(todos.filter((a) => {
            return a !== todo;
        }))
    }

    const addTodo = (title, desc) => {
        console.log("I am adding this Todo", title, desc)
        let slno = todos[todos.length - 1].slno + 1;
        const newTodo = {
            slno: slno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, newTodo]);
        console.log(newTodo)

    }

    const [todos, setTodos] = useState([{
            slno: 1,
            title: "Go to John's house",
            desc: "Today is his birthday"
        },
        {
            slno: 2,
            title: "Go to the mall",
            desc: "You have to buy clothes for party"
        },
    ])


    return ( 
        <>
        <Navbar/>
        <div className = "todoContainer" >
        <AddTodo addTodo = {addTodo}/>
        <TodoContainer todos = {todos} onDelete = { onDelete }/> 
        </div>
        </>
    );

}
export default App;