
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
import { Navbar } from "../Components/nav/Navbar";
import { DetailsPage } from "../Components/pages/DetailsPage";
import { DetailsSeriePage } from "../Components/pages/DetailsSeriePage";
import { HomePage } from "../Components/pages/HomePage";
import { LoginPage } from "../Components/pages/LoginPage";
import { SeriesPage } from "../Components/pages/SeriesPage";
import { SearchResults } from '../Components/search/SearchResults';


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
