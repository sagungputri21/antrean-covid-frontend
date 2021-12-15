import React from 'react'

const Title = ({title, desc}) => {
    return (
        <div className="text-purple-800 font-Roboto mt-10 ml-20">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-1 text-xl">{desc}</p>
            
        </div>
    )
}

export default Title