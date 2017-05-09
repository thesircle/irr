///<reference path="../node_modules/@types/react-router/index.d.ts"/>
import * as React from 'react'
import Kaseya from './components/integrations/kaseya/kaseyaContainer'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

    export const Routes = () => (
        <Router>
            <Switch>
              <Route path="/integration/kaseya/update" component={Kaseya} />
            </Switch>
        </Router>
    );
