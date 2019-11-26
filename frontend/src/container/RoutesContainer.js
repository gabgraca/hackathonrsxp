import React from 'react'
import history from '../services/history';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom"

import Login from '../screen/Login'

import Home from '../screen/Home'
import StudentRegister from '../screen/StudentRegister'
import CompanyRegister from '../screen/CompanyRegister'

import List from '../screen/List'


function RoutesContainer() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/studentRegister">
                    <StudentRegister />
                </Route>
                <Route exact path="/companyRegister">
                    <CompanyRegister />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
            </Switch>
        </Router>  
    )
}

export default RoutesContainer