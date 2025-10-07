import React from 'react'
import PageHeader from '../../components/common/PageHeader'

export default function Services(){
  return (
    <div>
      <PageHeader title="Services" subtitle="What we offer" />
      <section className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white rounded-lg shadow">Business Management</div>
        <div className="p-6 bg-white rounded-lg shadow">Inventory & Orders</div>
        <div className="p-6 bg-white rounded-lg shadow">Finance & Reports</div>
      </section>
    </div>
  )
}
