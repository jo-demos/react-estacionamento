import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Patio from './pages/Patio';
import Entrada from './pages/Entrada';
import NavBar from './components/NavBar';

export default function Routes() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Patio} />
                <Route path="/entrada" component={Entrada} />
            </Switch>
        </Router>
    )
}