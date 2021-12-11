import React from 'react'
import {useContext, useEffect} from "react"
import { UserContext } from '../../lib/context/UserContext'
import UserView from '../Custom/UserView'
import Link from 'next/link'

const Navbar = () => {

    const [user, setUser] = useContext(UserContext)

    return (
    <div className="flex justify-between py-5 bg-white px-5 shadow">
        <div>
          <img src="/Logo.png" alt="logo VaksinKuy" className="flex h-12 ml-6"/>
        </div>
        {user ? <NavbarLogged user={user}/>  : <NavbarUnlog/>}
    </div>
    )
}

const NavbarUnlog = () => {
    return(
        <div>
          <Link href="/login">
            <button className="mt-0 mr-6 bg-purple-500 hover:bg-purple-700 text-white font-bold px-7 py-2 rounded-md items-center">Login</button>
          </Link>
        </div>
    )
}

const NavbarLogged = ({user}) => {
    return (
        <div>
            <UserView user={user}/>
        </div>
    )
}

export default Navbar
