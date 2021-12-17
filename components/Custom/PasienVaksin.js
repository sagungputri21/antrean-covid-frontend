import React from "react";
import Identitas from "./identitas";

const PasienVaksin = ({nama, nik}) => {
    return (
        <div className="w-7/12 h-fit mt-8 ml-20 border-solid border border-purple-300 bg-white rounded-xl">
            <div className="font-Roboto mt-4">
                <p className="text-xl mt-3 ml-8">Pasien sedang vaksin : </p>
                <div className="flex row border-b-2 mt-3 border-purple-200"></div>
                <div className="ml-6 mb-8">
                    {/* dummy */}
                    <Identitas nama={nama} nik={nik} />
                </div>
            </div>
        </div>
    )
}

export default PasienVaksin