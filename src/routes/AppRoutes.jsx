import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Pricing from '../pages/Pricing/Pricing'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Auth/Login'
import Dashboard from '../pages/Dashboard/Dashboard'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
  <Route path="services" element={<Services />} />
  <Route path="pricing" element={<Pricing />} />
  <Route path="contact" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
