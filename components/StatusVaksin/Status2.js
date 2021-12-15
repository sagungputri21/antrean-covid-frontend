import React from 'react'
import Identitas from '../Custom/identitas'
import Keterangan from '../Custom/keterangan'

const Status2 = ({ nama, nik }) => {
    return (
        <>
            <div className="w-max h-fit mt-8 ml-20 border-solid border border-purple-300 bg-white rounded-xl px-8">
                <Identitas nama={nama} nik="NIM : 2008561062" />
                <div className="flex row border-b-2 mt-5 border-purple-300"></div>
                <div className="font-Roboto mt-4">
                    <p className="text-xl mb-2 mt-1">Status Vaksin : </p>
                    <p className="flex justify-center text-xl px-40 py-3 mb-8 bg-purple-500 rounded-xl text-white font-semibold">VAKSIN LENGKAP</p>
                </div>
            </div>
            <Keterangan desc="Anda sudah melakukan vaksinasi dosis pertama dan kedua. Tetap jaga kesehatan dan taati protokol kesehatan saat beraktivitas di luar rumah." />
        </>
    )
}

export default Status2