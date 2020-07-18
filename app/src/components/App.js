import React, { useEffect } from "react"
import Header from './Header'
import Business from './Business'
import HomePage from './Homepage/HomePage'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'


function App() {
  return (
    <>
    <Header />
    {/* //Just change below ONLY  */}
    <Contact /> 
    <Business/>
    </>
  )
}

export default App