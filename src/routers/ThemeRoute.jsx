import { Route } from "react-router-dom"
import React from 'react'
import ThemeContext from "../contexts/ThemeContext"

export default function AuthRouter ({ children, ...props }) {

    const [dark, setDark] = React.useState(false)

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <ThemeContext.Consumer>
                
                {
                    () => <div className={dark ? "dark" : ""}>{children}</div>
                }
                
            </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
}