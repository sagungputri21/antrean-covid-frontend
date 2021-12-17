import React from 'react'

const UserView = ({user}) => {
    return (
        <div>
            <p>
                {user}
                <img src="/profile.svg" alt="user icon" className="flex h-12"/>
            </p>
        </div>
    )
}

export default UserView
