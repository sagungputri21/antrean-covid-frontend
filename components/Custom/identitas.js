import React from 'react'

const Identitas = ({nama, nik}) => {
    return (
        <div className="font-Roboto mt-6 ml-3 text-2xl">
            <p className="text-purple-700 font-semibold">{nama}</p>
            <p className="mt-1">{nik}</p>
            
        </div>
    )
}

export default Identitas