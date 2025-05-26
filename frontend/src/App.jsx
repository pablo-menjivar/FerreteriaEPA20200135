import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navegation from "./components/Navigation.jsx"
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <>
      <Router>
        <Navegation/>
      </Router>
      <Toaster toastOptions={{ duration: 1000 }}/>
      <Toaster toastOptions={{ duration: 1000 }}/>
    </>
  )
}
export default App