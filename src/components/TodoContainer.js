import React from 'react'
import { TodoItem } from "./TodoItem";
import './todoContainer.css'

export const TodoContainer = (props) => {


    return (
        <div className = "container" >

        <h4> Todos List </h4>
        <hr/> 
        { props.todos.length === 0 ? "No List to display" : props.todos.map((todo) => < TodoItem todo = { todo } 
        onDelete = { props.onDelete } /> ) } 
        </div>
    )
}