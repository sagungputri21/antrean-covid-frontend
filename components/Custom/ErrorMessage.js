import React from 'react'

const ErrorMessage = ({error}) => {
    return (
        <div>
            <p className="text-red-800">{error}</p>
        </div>
    )
}

export default ErrorMessage
