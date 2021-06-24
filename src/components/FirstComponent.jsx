import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

export default function FirstComponent() {

    const { dark, setDark } = useContext(ThemeContext)


    return (
        <>
            <h1 onDoubleClick={e => setDark(!dark) }>dunyo</h1>
        </>
    )
}