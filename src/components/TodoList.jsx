import React from 'react';
import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {

    const { todos, index, todoValue, setTodoValue } = props // destructuring syntax
    // TodoCard içinde ...props yaparak, propsu bir alt component'a pasladık. Yukarıdan aldık, aşağıya yolladık.


    return (

        <ul className="main">

            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex} >
                        <p>{todo}</p>
                    </TodoCard>
                )
            })
            }

        </ul>
    )
}
