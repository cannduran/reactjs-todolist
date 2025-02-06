import React from 'react';
import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {

    const { todos, handleDeleteTodo } = props // destructuring syntax

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })

            }

        </ul>
    )
}
