import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Homepage from './pages/Homepage'
import MissingPage from './pages/404'

import {Socket} from './hooks/Socket'

function App() {

    return (
        <Socket>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={MissingPage}/>
                </Switch>
            </Router>
        </Socket>
    );
}

export default App;
