import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header'
import Footer from './Components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Footer/>
  </StrictMode>,
)
