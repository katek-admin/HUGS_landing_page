import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PublicOffer from './pages/PublicOffer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/public-offer" element={<PublicOffer />} />
        </Routes>
      </LanguageProvider>
    </HashRouter>
  </React.StrictMode>,
)
