import React from "react";

const Jumlah = ({jumlah}) => {
    return (
        //untuk jumlah vaksin di dashboard dokter
        <div className="w-4/6 h-fit mx-auto">
            <div className="mt-8 ml-20 border-solid bg-purple-400 rounded-xl mx-auto flex justify-center">
                <h2 className="py-3 px-5 text-xl">
                    Terdapat {jumlah} 
                    orang yang siap divaksin hari ini
                </h2>
            </div>
        </div>
    )
}

export default Jumlah