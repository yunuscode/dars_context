import { Route } from "react-router-dom"
import React from 'react'
import AuthContext from "../contexts/AuthContext"

export default function AuthRouter ({ children, ...props }) {

    const [auth, setAuth] = React.useState(false)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <AuthContext.Consumer>
                {
                    () => children
                }
            </AuthContext.Consumer>
        </AuthContext.Provider>
    )
}