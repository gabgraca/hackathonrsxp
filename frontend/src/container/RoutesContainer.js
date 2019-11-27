import React from 'react'
import history from '../services/history';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom"

import Home from '../screen/Home'
import RegisterUserContainer from './RegisterUserContainer'

import RegisterSuccess from '../screen/RegisterSuccess'
import List from '../screen/List'
import VisitCotainer from './VisitContainer';
import Visit from '../screen/Visit'
import RegisterCompanyContainer from './RegisterCompanyContainer';
import LoginContainer from './LoginContainer';
import CompanyContainer from './CompanyContainer'

function RoutesContainer() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/visit/:email">
                    <Visit />
                </Route>
                <Route path="/visitContainer/:email">
                    <VisitCotainer />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/studentRegister">
                    <RegisterUserContainer />
                </Route>
                <Route exact path="/companyRegister">
                    <RegisterCompanyContainer />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/companylist/:email">
                    <CompanyContainer />
                </Route>
                <Route path="/registersuccess">
                    <RegisterSuccess />
                </Route>
            </Switch>
        </Router>  
    )
}

export default RoutesContainer