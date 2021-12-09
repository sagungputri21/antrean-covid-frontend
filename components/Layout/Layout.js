import autoprefixer from 'autoprefixer'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <div className="container mx-auto">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
