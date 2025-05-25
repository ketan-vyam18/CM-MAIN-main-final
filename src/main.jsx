import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Routing from './MainRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   <Routing />
  </StrictMode>,
)