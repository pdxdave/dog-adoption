import React from "react"

import "./layout.css"
import Navbar from '../components/navbar'


const Layout = ({ children }) => {
 

  return (
    <>
      <Navbar />
        <main>{children}</main>

    </>
  )
}


export default Layout
