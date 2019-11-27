import React from 'react'
import history from '../services/history';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom"

import Login from '../screen/Login'

import Home from '../screen/Home'
import RegisterUserContainer from './RegisterUserContainer'
import CompanyList from '../screen/CompanyList'

import List from '../screen/List'
import VisitCotainer from './VisitContainer';
import Visit from '../screen/Visit'
import RegisterCompanyContainer from './RegisterCompanyContainer';

function RoutesContainer() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/visit">
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
                <Route path="/companylist">
                    <CompanyList />
                </Route>
            </Switch>
        </Router>  
    )
}

export default RoutesContainer