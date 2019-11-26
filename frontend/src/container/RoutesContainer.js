import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Login from '../screen/Login'
import Register from '../screen/Register'
import List from '../screen/List'

function RoutesContainer() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
            </Switch>
        </Router>  
    )
}

export default RoutesContainer