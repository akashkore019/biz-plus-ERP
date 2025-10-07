import React from 'react'

export default function PageHeader({ title, subtitle }){
  return (
    <header className="py-4 border-b">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </header>
  )
}
