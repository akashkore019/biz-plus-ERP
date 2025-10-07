import React from 'react'

export default function StatsCard({title, value}){
  return (
    <div className="p-4 bg-white rounded shadow flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-semibold">{value}</div>
      </div>
    </div>
  )
}
