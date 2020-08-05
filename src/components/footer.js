import React from 'react'

import logo from '../images/logo.svg'

const Footer = () => {
    return (
        <footer className="py-4" style={{textAlign: "center", borderTop: "1px solid gray", backgroundColor: "#f2f2f2"}}>
            <span>Willow</span><img src={logo} alt="logo" style={{height: "100px", width: "100px"}}/><span>Creek</span>
            <p>2436 Westbrook Drive, Monhagen, ME | Ph: 207-669-0325 | &copy; 2020</p>
        </footer>
    )
}

export default Footer
