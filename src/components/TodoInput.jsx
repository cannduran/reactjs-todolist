import React, { useState } from 'react'
export default function TodoInput(props) {

    const { handleAddTodos } = props  //destructuring the props

    const [todoValue, setTodoValue] = useState('')

    return (

        <header>

            <input value={todoValue} onChange={(event) => { setTodoValue(event.target.value) }} 
            placeholder="Enter todo..." />

            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}> Add </button>

        </header>
    )
}