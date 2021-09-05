
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import { Navbar } from "../Components/Nav/Navbar";
import { DetailsPage } from "../Components/Pages/DetailsPage";
import { HomePage } from "../Components/Pages/HomePage";
import { LoginPage } from "../Components/Pages/LoginPage";
import { SearchResults } from '../Components/Search/SearchResults';


export const AppRouters = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/films' component={ HomePage } />
                <Route exact path='/search' component={ SearchResults } />
                <Route exact path='/details' component={ DetailsPage } />
                <Route exact path='/auth/login' component={ LoginPage } />

                <Redirect to='/films' />
            </Switch>
        </Router>
    )
}
