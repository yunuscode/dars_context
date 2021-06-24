import './App.scss' 
import { BrowserRouter, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import ThemeRoute from './routers/ThemeRoute'
import FirstComponent from './components/FirstComponent'

import ThemeContext from "./contexts/ThemeContext"

export default function App () {

    return (
        <BrowserRouter>

            <ThemeRoute>

                    <Route path="/" component={FirstComponent} />

            </ThemeRoute>

        </BrowserRouter>
    )
}
