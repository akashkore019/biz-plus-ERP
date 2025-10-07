import React from 'react'

export default function Register(){
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-medium mb-4">Create an account</h2>
      <form className="space-y-3 bg-white p-6 rounded shadow">
        <input className="w-full border px-3 py-2 rounded" placeholder="Full name" />
        <input className="w-full border px-3 py-2 rounded" placeholder="Email" />
        <input className="w-full border px-3 py-2 rounded" placeholder="Password" type="password" />
        <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  )
}
