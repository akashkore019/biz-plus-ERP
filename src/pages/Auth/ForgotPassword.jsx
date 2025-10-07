import React from 'react'

export default function ForgotPassword(){
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-medium mb-4">Reset your password</h2>
      <form className="space-y-3 bg-white p-6 rounded shadow">
        <input className="w-full border px-3 py-2 rounded" placeholder="Email" />
        <button className="w-full bg-yellow-600 text-white py-2 rounded">Send reset link</button>
      </form>
    </div>
  )
}
