import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"



export default function SecondComponent() {

    const { setAuth } = useContext(AuthContext)

    return (
        <>
            <h1>Login</h1>
            <button onClick={ e => setAuth(true) }>Kirish</button>
        </>
    )
}