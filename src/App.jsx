import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  // Aşağıdaki kısma tekrar bak!
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    // Aşağıdaki kısma tekrar bak!
    persistData(newTodoList)

    setTodos(newTodoList);
    console.log("Updated Todos:", newTodoList); //kontrol için ekledim.
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    // Aşağıdaki kısma tekrar bak!
    persistData(newTodoList)

    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // Aşağıdaki kısma tekrar bak! useEffect kullandık. LocalStorage sayesinde refresh edince todo'lar gitmiyor.

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} todoValue={todoValue} setTodoValue={setTodoValue}
        handleDeleteTodo={handleDeleteTodo} todos={todos} />

    </>
  )
}

export default App
