import React from 'react';

export const TodoItem = (props) => {
    return ( <
        >
        <
        div > < b > { props.todo.title } < /b><
        p > { props.todo.desc } < /p> <
        button style = {
            { backgroundColor: "red" }
        }
        onClick = {
            () => { props.onDelete(props.todo) }
        } > Delete < /button>  < /
        div > <
        hr / >
        <
        />
    )
}