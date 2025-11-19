import './App.css'
import Dashboard from './Components/dashboard'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {

  return (
    <>
      <Dashboard />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
