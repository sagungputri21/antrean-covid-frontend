import React from 'react'

const Halo = ({nama}) => {
    return (
        <div className="font-Roboto mt-12">
            <p className=" text-3xl">Selamat Datang!</p>
            <p className="mt-4 text-5xl font-semibold text-purple-500">{nama}</p>
        </div>
    )
}

export default Halo