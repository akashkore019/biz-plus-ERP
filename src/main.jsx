import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/styles/tailwind.css'
// It's more reliable to import bootstrap from node_modules directly
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/globals.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
