import React from 'react'
import PasienNavLink from './PasienNavLink'

const PasienNav = () => {
    return(
            <div className="w-64 h-full mt-10 ml-11 border-solid border border-purple-300 bg-white rounded-xl">
                <div className="flex row border-b-2 mt-6">
                    <img src="/bars.svg" alt="home icon" className="h-8 mr-4 ml-8 mb-6 hover:stroke-white" />
                    <h2 className="text-purple-700 font-bold text-2xl mb-6">MENU</h2>
                </div>
                <ul className="font-Roboto text-purple-600 item-center">
                    <PasienNavLink routes="/Pasien/Pasien" images="/Home.svg" text="Home"/>
                    <PasienNavLink routes="/Pasien/Registrasi" images="/registrasi.svg" text="Registrasi"/>
                    <PasienNavLink routes="/Pasien/CekStatus" images="/status.svg" text="Status Vaksin"/>
                </ul>
                <div className="mt-48 mb-6 text-purple-600">
                    <PasienNavLink routes="/" images="/Logout.svg" text="Logout"/>
                </div>
            </div>
    )
}

export default PasienNav
