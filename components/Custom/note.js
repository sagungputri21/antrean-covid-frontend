import React from 'react'

const Note = ({ desc }) => {
    return (
        <div className="font-Roboto mt-10">
            <div className="w-7/12 h-fit border-solid border border-purple-400 bg-white rounded-xl mx-auto">
                <h1 className="-mt-6 flex justify-center text-2xl w-96 py-1 mx-auto bg-purple-300 rounded-xl border-4 border-purple-200">Catatan :</h1>
                <p className="text-xl text-gray-600 py-4 px-10 mb-1 text-center">{desc}</p>
            </div>
        </div>
    )
}

export default Note