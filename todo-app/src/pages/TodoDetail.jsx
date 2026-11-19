import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TodoModal from '../components/TodoModal'

function TodoDetail({ todos, onUpdate }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const todo = todos.find((t) => t.id === Number(id))

  if (!todo) {
    return (
      <div className="container">
        <p>Tugas tidak ditemukan</p>
        <Link to="/" className="btn blue">
          Kembali
        </Link>
      </div>
    )
  }

  const handleUpdate = (data) => {
    onUpdate(todo.id, data)
    setShowForm(false)
    alert('Tugas berhasil diperbarui')
  }

  return (
    <div className="detail">
      <div className="detail-left">
        <h3>Judul</h3>
        <p>{todo.title}</p>
        <h3>Deskripsi</h3>
        <div className="description">{todo.description}</div>
      </div>

      <div className="detail-right">
        <h3>Status</h3>
        <p>{todo.status}</p>
        <h3>Prioritas</h3>
        <p>{todo.priority}</p>
        <h3>Deadline</h3>
        <p>{todo.deadline}</p>
        <div className="actions">
          <button className="btn red" onClick={() => navigate('/')}>
            Kembali
          </button>
          <button className="btn blue" onClick={() => setShowForm(true)}>
            Update
          </button>
        </div>
      </div>

      {showForm && (
        <TodoModal
          heading="Update Todo"
          submitLabel="Update"
          initialData={todo}
          onSubmit={handleUpdate}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default TodoDetail
