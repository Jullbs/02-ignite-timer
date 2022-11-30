// LIB, HOOKS, ETC
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// MAIN CODE
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
