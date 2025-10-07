import React from 'react'
import PageHeader from '../../components/common/PageHeader'

export default function Pricing(){
  return (
    <div>
      <PageHeader title="Pricing" subtitle="Choose a plan that fits" />

      <section className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white rounded-lg shadow">Free</div>
        <div className="p-6 bg-white rounded-lg shadow">Pro</div>
        <div className="p-6 bg-white rounded-lg shadow">Enterprise</div>
      </section>
    </div>
  )
}
