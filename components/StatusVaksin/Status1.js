import React from 'react'
import Identitas from '../Custom/identitas'
import Keterangan from '../Custom/keterangan'

const Status1 = ({ nama, nik }) => {
    return (
        <>
            <div className="w-max h-fit mt-8 ml-20 border-solid border border-purple-300 bg-white rounded-xl px-8">
                <Identitas nama={nama} nik={nik} />
                <div className="flex row border-b-2 mt-5 border-purple-300"></div>
                <div className="font-Roboto mt-4">
                    <p className="text-xl mb-2 mt-1">Status Vaksin : </p>
                    <p className="flex justify-center text-xl px-36 py-3 mb-8 bg-purple-300 rounded-xl border-purple-500 text-white font-semibold">VAKSIN DOSIS PERTAMA</p>
                </div>
            </div>
            <Keterangan desc="Anda sudah melakukan vaksinasi dosis pertama, 
            silakan lakukan vaksinasi dosis kedua jika sudah dalam rentang 3 setelah vaksin pertama. Tetap jaga kesehatan" />
        </>
    )
}

export default Status1