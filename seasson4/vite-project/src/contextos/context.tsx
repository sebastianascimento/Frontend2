import {Children, createContext} from "react";

export const BlackContext = createContext ({casa: ""})

export const BlackProvider = ({ children }) => {
    return (
        <BlackContext.Provider value={{casa: "penthouse"}}>
            {children}
        </BlackContext.Provider>
    )
}