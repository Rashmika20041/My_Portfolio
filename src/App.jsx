import './App.css'
import Dashboard from './Components/dashboard'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
      <Dashboard />
      <Analytics />
    </>
  )
}

export default App
