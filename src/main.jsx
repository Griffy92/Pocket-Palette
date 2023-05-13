import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // comment out the react.strictmode tags to get fabric objects interactive.
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
