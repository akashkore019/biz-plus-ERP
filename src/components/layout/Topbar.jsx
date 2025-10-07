import React from 'react'

export default function Topbar(){
  return (
    <div className="flex items-center justify-end space-x-3">
      <button className="px-2 py-1">Notifications</button>
      <button className="px-2 py-1">Profile</button>
    </div>
  )
}
