import './style/App.scss' 
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import LoginComponent from './components/Login'

export default function App () {

   return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent} />
            </Switch>
        </Router>
   )
   
}
