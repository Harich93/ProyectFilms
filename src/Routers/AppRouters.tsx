
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import { Navbar } from "../Components/Nav/Navbar";
import { HomePage } from "../Components/Pages/HomePage";
import { LoginPage } from "../Components/Pages/LoginPage";


export const AppRouters = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/home' component={ HomePage } />
                <Route exact path='/auth/login' component={ LoginPage } />

                <Redirect to='/home' />
            </Switch>
        </Router>
    )
}
