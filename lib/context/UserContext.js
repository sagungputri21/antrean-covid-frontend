import React from 'react'
import { createContext } from 'react'
import { useLocalStorage } from '../useLocalStorage'

export const UserContext = createContext("")

const UserProvider = ({children}) => {

    const [user, setUser, removeUser] = useLocalStorage("user", "")
    
    return (
        <UserContext.Provider value={{user, setUser, removeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
