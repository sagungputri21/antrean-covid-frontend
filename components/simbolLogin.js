import React from 'react'

const SimbolLogin = ({ image, button, doctor, nilaiDoctor, setDoctor}) => {

    const handleClick = () => {
        setDoctor(nilaiDoctor)
        console.log(doctor)
    }

    return (
        <div className="flex justify-center flex-col mb-8 w-3/4 items-center ml-3">
                <img src={image} alt="pendaftar" className="w-2/3" />
            <button onClick={handleClick} className={`hover:bg-purple-600 hover:text-white w-full py-3 rounded-md -mt-8 text-xl z-50 ${doctor == nilaiDoctor ? "bg-purple-600 text-white" : "bg-purple-200 text-black"}`}>
            {button}</button>
        </div>
    )
}

export default SimbolLogin
