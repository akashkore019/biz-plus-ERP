import React from 'react'
import StatsCard from './components/StatsCard'

export default function Dashboard(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="Leads" value="124" />
        <StatsCard title="Opportunities" value="34" />
        <StatsCard title="Revenue" value="$12.4k" />
      </div>
    </div>
  )
}
