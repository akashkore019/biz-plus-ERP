import React, { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    // Simple client-side validation
    if(!form.name || !form.email || !form.message){
      setStatus({ type: 'error', message: 'Please complete all fields.' })
      return
    }
    setStatus({ type: 'success', message: 'Message sent (mock).' })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      {status && (
        <div className={`p-2 text-sm ${status.type === 'error' ? 'text-red-700' : 'text-green-700'}`}>
          {status.message}
        </div>
      )}
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="w-full mt-1 p-2 border rounded h-32" />
      </div>
      <div>
        <button className="px-4 py-2 bg-sky-700 text-white rounded">Send Message</button>
      </div>
    </form>
  )
}
