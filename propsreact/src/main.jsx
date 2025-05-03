import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Garage from './Garage.jsx'
import Info from './info.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  
    <Info />
    {/* <Garage /> */}
  </StrictMode>,
)
