import { useState } from 'react'

const emptyForm = {
  title: '',
  description: '',
  status: 'to-do',
  priority: 'low',
  deadline: '',
}

function TodoModal({ heading, submitLabel, initialData = emptyForm, onSubmit, onClose }) {
  const [form, setForm] = useState(initialData)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>{heading}</h2>

        <label>Judul</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Deskripsi</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <div className="row">
          <div className="field">
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="to-do">to-do</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className="field">
            <label>Prioritas</label>
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
        />

        <div className="row buttons">
          <button type="button" className="btn red" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn blue">
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoModal
