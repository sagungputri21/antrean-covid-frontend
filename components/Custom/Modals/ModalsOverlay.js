import React from 'react'

const ModalOverlay = ({children, darkAmount}) => {
    return (
        <div className={`absolute w-full h-full bg-gray-${darkAmount} top-0 left-0 flex justify-center items-center z-50 bg-opacity-40`}>
            {children}
        </div>
    )
}

export default ModalOverlay

