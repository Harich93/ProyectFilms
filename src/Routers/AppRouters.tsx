
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import { Navbar } from "../Components/nav/Navbar";
import { DetailsPage } from "../Components/pages/DetailsPage";
import { HomePage } from "../Components/pages/HomePage";
import { LoginPage } from "../Components/pages/LoginPage";
import { SearchResults } from '../Components/search/SearchResults';


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
