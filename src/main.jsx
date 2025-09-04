import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from './Pages/Home'

import Employees from './Pages/Employees'
import Teams from './Pages/Teams'
import Signin from './Pages/Signin'
import Toogle from './Toogle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Toogle/>
   
  </StrictMode>,
)
