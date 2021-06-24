import './App.scss' 
import { BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react'
import AuthRouter from './routers/AuthRoute'
import FirstComponent from './components/FirstComponent'
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'
import SecondComponent from './components/SecondComponent'

export default function App () {


    return (
        <BrowserRouter>

            <AuthRouter>
                
                <PrivateRoute exact path="/" component={FirstComponent} />
                <PublicRoute exact path="/login" component={SecondComponent} />

            </AuthRouter>

        </BrowserRouter>
    )
}
