import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import DynamicBanner from './components/DynamicBanner.tsx'
import StapleMunch from './components/StapleMunch.tsx'
import InfoSection from './components/InfoSection.tsx'
import LocalDelicacies from './components/LocalDelicacies.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Navbar />
    <InfoSection />
    <DynamicBanner />
    <StapleMunch />
    <LocalDelicacies />
  </StrictMode>,
)
