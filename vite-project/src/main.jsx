import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Explore from './Blocks/explore/explore'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Explore/>
  </StrictMode>,
)
