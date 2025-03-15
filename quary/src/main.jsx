import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Routes/root.jsx'
import "normalize.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Root/>
  </StrictMode>,
)
