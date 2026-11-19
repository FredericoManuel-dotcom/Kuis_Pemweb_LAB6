import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { dummyTodos } from './data/dummyTodos'
import TodoList from './pages/TodoList'
import TodoDetail from './pages/TodoDetail'

function App() {
  const [todos, setTodos] = useState(dummyTodos)

  const addTodo = (data) => {
    const id = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1
    setTodos([...todos, { ...data, id }])
  }

  const updateTodo = (id, data) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...data, id } : t)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<TodoList todos={todos} onAdd={addTodo} onDelete={deleteTodo} />}
      />
      <Route
        path="/todo/:id"
        element={<TodoDetail todos={todos} onUpdate={updateTodo} />}
      />
    </Routes>
  )
}

export default App
