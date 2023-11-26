import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FormulaProvider } from './context/FormulaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <FormulaProvider>
    <App />
   </FormulaProvider>
  </React.StrictMode>,
)
