import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PublicOffer from './pages/PublicOffer'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/public-offer" element={<PublicOffer />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
