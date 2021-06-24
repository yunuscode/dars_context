import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

export default function FirstComponent() {

    const { setAuth } = useContext(AuthContext)


    return (
        <>
            <h1 onDoubleClick={e => setAuth(false)}>dunyo</h1>
        </>
    )
}