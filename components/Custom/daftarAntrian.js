import React from "react"

const DaftarAntrian = ({noAntrian, nama, nik}) => {

    return (
        <div className="flex w-full justify-between items-center mt-5">
            <p className="text-lg">{noAntrian}. {nama} {nik}</p>
        </div>
    )
}

export default DaftarAntrian