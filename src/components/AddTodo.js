import React, { useState } from 'react';
import './addTodo.css'

export const AddTodo = ({ addTodo }) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("Title or Description cannot be blank");
        addTodo(title, desc);

    }

    return ( 
        <div className = "addConatiner" >
        <form onSubmit = { submit } >
        <div >
        <label > Add Todo in List </label> <br/>
        <input type = "text"
        value = { title }
        onChange = {
            (e) => { setTitle(e.target.value) }
        }
        /> 
        </div >
        <br/>
        <div>
        <label> Add Description of Todo </label> <br/>
        <input type = "text"
        value = { desc }
        onChange = {
            (e) => { setDesc(e.target.value) }
        }
        />
        </div>
        <br/>
        <br/> 
        <button style = { { backgroundColor: "green", color: "white" } } type = "submit" > Add to list </button>
        </form>
        </div>
    )
}