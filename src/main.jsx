import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BuscadorPelis } from './BuscadorPelis'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorPelis />
  </StrictMode>,
)
