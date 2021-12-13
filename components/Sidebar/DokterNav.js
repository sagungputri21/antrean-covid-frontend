import React from 'react'
import PasienNavLink from './PasienNavLink'

const DokterNav = () => {
    return(
            <div className="w-64 h-full mt-10 ml-11 border-solid border border-purple-300 bg-white rounded-xl">
                <div className="flex row border-b-2 mt-6">
                    <img src="/bars.svg" alt="home icon" className="h-8 mr-4 ml-8 mb-6 hover:fill-white" />
                    <h2 className="text-purple-700 font-bold text-2xl mb-6">MENU</h2>
                </div>
                <ul className="font-Roboto text-purple-600 item-center">
                    <PasienNavLink routes="/Dokter/Dokter" images="/Home.svg" text="Home"/>
                    <PasienNavLink routes="/Dokter/Antrian" images="/Home.svg" text="Antrian"/>
                    <PasienNavLink routes="/Dokter/Konfirm" images="/Home.svg" text="Konfirmasi"/>
                </ul>
                <div className="mt-48 mb-6 text-purple-600">
                    <PasienNavLink routes="/" images="/Home.svg" text="Logout"/>
                </div>
            </div>
    )
}

export default DokterNav