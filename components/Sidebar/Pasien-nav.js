import Link from 'next/link'
import React from 'react'

const PasienNav = () => {
    return(
            <div className="w-64 h-full mt-10 ml-11 border-solid border border-purple-300 bg-white rounded-xl">
                <div className="flex flex row border-b-2 mt-6">
                    <img src="/bars.svg" alt="home icon" className="h-8 mr-4 ml-8 mb-6 hover:stroke-white" />
                    <h2 className="text-purple-700 font-bold text-2xl mb-6">MENU</h2>
                </div>
                <ul className="font-Roboto text-purple-600 item-center">
                    <li className="mt-4">
                        <Link href="/Pasien/Pasien">
                            <a className="font-semibold inline flex item-center text-lg px-6 py-3 ml-2 mr-2 hover:bg-purple-400 rounded-lg hover:text-white">
                                <img src="/Home.svg" alt="home icon" className="h-7 mr-3 hover:stroke-white" />
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/Pasien/Registrasi">
                            <a className="font-semibold inline flex item-center text-lg px-6 py-3 ml-2 mr-2 hover:bg-purple-400 rounded-lg hover:text-white">
                                <img src="/Home.svg" alt="home icon" className="h-7 mr-3 hover:stroke-white" />
                                Registrasi
                            </a>
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link href="/Pasien/CekStatus">
                            <a className="font-semibold inline flex item-center text-lg px-6 py-3 ml-2 mr-2 hover:bg-purple-400 rounded-lg hover:text-white">
                                <img src="/Home.svg" alt="home icon" className="h-7 mr-3 hover:stroke-white" />
                                Status Vaksin
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className="mt-48 mb-6 text-purple-600">
                        <Link href="/">
                            <a className="font-semibold inline flex item-center text-lg px-6 py-3 ml-2 mr-2 hover:bg-purple-400 rounded-lg hover:text-white">
                                <img src="/Home.svg" alt="home icon" className="h-7 mr-3 hover:stroke-white" />
                                Log Out
                            </a>
                        </Link>
                </div>
            </div>
    )
}

export default PasienNav