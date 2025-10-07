import React from 'react'
import PageHeader from '../../components/common/PageHeader'
import ContactForm from '../../components/common/ContactForm'

export default function Contact(){
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
      <div className="mt-6 max-w-3xl">
        <ContactForm />
      </div>
    </div>
  )
}
