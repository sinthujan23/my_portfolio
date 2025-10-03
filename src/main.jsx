import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// FORCE DARK MODE BEFORE ANYTHING LOADS
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('light');
localStorage.setItem('theme', 'dark');
document.documentElement.style.colorScheme = 'dark';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)