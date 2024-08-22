import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss'
import { RootCmp } from './RootCmp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
     <RootCmp />
  // </StrictMode>
)