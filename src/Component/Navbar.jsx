import React from 'react'
import logo from './logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    < img src={logo} width="100px" height="70px" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
