import { Redirect, Route } from "react-router-dom";

import { useContext, useEffect } from "react"
import AuthContext from "../contexts/AuthContext"

export default function PrivateRoute({ children, ...props }) {

    const { auth, setAuth } = useContext(AuthContext)
    console.log(auth);

    return (
        <>
            { auth && <Redirect to="/" />}
            <Route {...props} />
        </>
    )
}