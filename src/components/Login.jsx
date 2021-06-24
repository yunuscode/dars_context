import { useState } from "react"
import bgImage from '../assets/image/login-background.png'

export default function LoginComponent () {

    const [secureText, setSecureText] = useState(true)

    return (
        <section className="login">
            <div className="login__bg__image">
                <img src={bgImage} alt="" />
            </div>
            <div className="login__content">
                <form className="login__form">
                    <h1 className="login__title">
                        Get more things done with us
                    </h1>
                    <p className="login__subtext">
                        Search Sourcing the world's brightest professionals for your business.
                    </p>
                    <div className="login__button__group">
                        <button className="active" type="button">Login</button>
                        <button type="button">Sign Up</button>
                    </div>
                    <label className="login__input__label">
                        <input type="email" required placeholder="Email address" />
                    </label>
                    <label className="login__input__label">
                        <input type={secureText ? "password" : "text"} required placeholder="Password" />
                        <button onClick={e => setSecureText(!secureText)} type="button">
                            { secureText ? "Show" : "Hide"}
                        </button>
                    </label>
                    <button className="login__submit__button">Login</button>
                </form>
            </div>
        </section>
    )
}