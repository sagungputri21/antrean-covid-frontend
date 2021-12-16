import React from 'react'
import Identitas from '../Custom/identitas'
import Keterangan from '../Custom/keterangan'

const Status = ({ nama, nik, status}) => {
    
    const getStatusStyle = (status) => {
        switch(status){
            case 0:
                return "flex justify-center text-xl px-40 py-3 mb-8 bg-purple-100 rounded-xl border-purple-500 text-purple-600 font-semibold"
            case 1:
                return "flex justify-center text-xl px-36 py-3 mb-8 bg-purple-300 rounded-xl border-purple-500 text-white font-semibold"
            case 2:
                return "flex justify-center text-xl px-40 py-3 mb-8 bg-purple-500 rounded-xl text-white font-semibold"
        }
    }

    const getStatusDesc = (status) => {
        switch(status){
            case 0: 
                return "Anda belum melakukan vaksinasi baik dosis pertama ataupun kedua, silakan daftarakan diri Anda melalu menu Registrasi untuk mendapatkan vaksinasi Covid 19."
            case 1:
                return "Anda sudah melakukan vaksinasi dosis pertama, silakan lakukan vaksinasi dosis kedua jika sudah dalam rentang 3 setelah vaksin pertama. Tetap jaga kesehatan"
            case 2:
                return "Anda sudah melakukan vaksinasi dosis pertama dan kedua. Tetap jaga kesehatan dan taati protokol kesehatan saat beraktivitas di luar rumah."
        }
    }

    const getStatusText = (status) => {
        switch(status){
            case 0: 
                return "BELUM VAKSIN"
            case 1:
                return "VAKSIN DOSIS PERTAMA"
            case 2:
                return "VAKSIN LENGKAP"
        }
    }
     
    
    return (
        <>
            <div className="w-max h-fit mt-8 ml-20 border-solid border border-purple-300 bg-white rounded-xl px-8">
                <Identitas nama={nama} nik={nik} />
                <div className="flex row border-b-2 mt-5 border-purple-300"></div>
                <div className="font-Roboto mt-4">
                    <p className="text-xl mb-2 mt-1">Status Vaksin : </p>
                    <p className={getStatusStyle(status)}></p>
                    <p className={getStatusText(status)}></p>
                </div>
            </div>
            <Keterangan desc={getStatusDesc(status)}/>
        </>
    )
}

export default Status