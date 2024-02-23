import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Button from './components/Button.jsx'
import Alert from './components/Alert.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Button />
    <Alert />
    <Menu />
    <Footer />
  </React.StrictMode>,
)
