import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <nav className="space-y-2">
        <Link to="/dashboard" className="block">Dashboard</Link>
        <Link to="/dashboard/leads" className="block">Leads</Link>
        <Link to="/dashboard/opportunities" className="block">Opportunities</Link>
      </nav>
    </aside>
  )
}
