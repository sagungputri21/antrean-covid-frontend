import React from 'react'

const Keterangan = ({desc}) => {
    return (
        <div className="font-Roboto mt-10 ml-20">
            <h1 className="text-2xl font-semibold">Keterangan :</h1>
            <p className="mt-1 text-lg w-11/12">{desc}</p>
        </div>
    )
}

export default Keterangan