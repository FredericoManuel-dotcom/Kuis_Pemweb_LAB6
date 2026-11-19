import { useState } from 'react'
import { Link } from 'react-router-dom'
import TodoModal from '../components/TodoModal'

function TodoList({ todos, onAdd, onDelete }) {
  const [showForm, setShowForm] = useState(false)

  const handleAdd = (data) => {
    onAdd(data)
    setShowForm(false)
    alert('Tugas berhasil ditambahkan')
  }

  const handleDelete = (todo) => {
    if (window.confirm(`Yakin ingin menghapus tugas "${todo.title}"?`)) {
      onDelete(todo.id)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn blue" onClick={() => setShowForm(true)}>
          Tambah Todo
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 && (
            <tr>
              <td colSpan="5">Belum ada tugas</td>
            </tr>
          )}
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="title">{todo.title}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>{todo.deadline}</td>
              <td>
                <div className="actions">
                  <Link to={`/todo/${todo.id}`} className="btn blue">
                    Lihat
                  </Link>
                  <button className="btn red" onClick={() => handleDelete(todo)}>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <TodoModal
          heading="Tambah Todo"
          submitLabel="Tambah"
          onSubmit={handleAdd}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default TodoList
