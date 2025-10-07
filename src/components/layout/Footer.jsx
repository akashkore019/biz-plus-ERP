import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t py-4">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BizPlus CRM. All rights reserved.
      </div>
    </footer>
  )
}
