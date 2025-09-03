import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './Pages/Home'
import WorkPlace from './Pages/Admin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
   
  </StrictMode>,
)
