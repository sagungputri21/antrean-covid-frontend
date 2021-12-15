import React from 'react'
import Identitas from '../Custom/identitas'
import Keterangan from '../Custom/keterangan'

const Status0 = ({ nama, nik }) => {
    return (
        <>
            <div className="w-max h-fit mt-8 ml-20 border-solid border border-purple-300 bg-white rounded-xl px-8">
                <Identitas nama="SAGUNG PUTRI NARISWARI" nik="NIM : 2008561062" />
                <div className="flex row border-b-2 mt-5 border-purple-300"></div>
                <div className="font-Roboto mt-4">
                    <p className="text-xl mb-2 mt-1">Status Vaksin : </p>
                    <p className="flex justify-center text-xl px-40 py-3 mb-8 bg-purple-100 rounded-xl border-purple-500 text-purple-600 font-semibold">BELUM VAKSIN</p>
                </div>
            </div>
            <Keterangan desc="Anda belum melakukan vaksinasi baik dosis pertama ataupun kedua, 
            silakan daftarakan diri Anda melalu menu Registrasi untuk mendapatkan vaksinasi Covid 19." />
        </>
    )
}

export default Status0