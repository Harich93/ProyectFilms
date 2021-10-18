
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";

import { Navbar } from "../Components/Nav/Navbar";
import { DetailsPage } from "../Components/Pages/DetailsPage";
import { DetailsSeriePage } from "../Components/Pages/DetailsSeriePage";
import { HomePage } from '../Components/Pages/HomePage';
import { LoginPage } from "../Components/Pages/LoginPage";
import { SeriesPage } from "../Components/Pages/SeriesPage";
import { SearchResults } from "../Components/Search/SearchResults";


export const AppRouters = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/films' component={ HomePage } />
                <Route exact path='/series' component={ SeriesPage } />
                <Route exact path='/search' component={ SearchResults } />
                <Route exact path='/details' component={ DetailsPage } />
                <Route exact path='/details-serie' component={ DetailsSeriePage } />
                <Route exact path='/auth/login' component={ LoginPage } />

                <Redirect to='/films' />
            </Switch>
        </Router>
    )
}
