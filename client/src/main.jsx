import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/styles/global.scss"
import { ThemeProvider } from './context/ThemeContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
