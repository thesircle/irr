// ///<reference path="../node_modules/@types/react-router/index.d.ts"/>
// import * as React from 'react'
// import Kaseya from './components/integrations/kaseya/kaseyaContainer'
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//
//     export const Routes = () => (
//         <Router>
//             <Switch>
//               <Route path="/integration/kaseya/view" component={Kaseya} />
//               <Route path="/integration/kaseya/update" component={Kaseya} />
//             </Switch>
//         </Router>
//     );


import * as React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {kaseyaContainer as KaseyaContainer} from "./components/integrations/kaseya/kaseyaContainer";
import {container as Container} from "./components/root/rootContainer";

export const routes = () => (

  <Router>
    <div>
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
        <Route path="/integration/domainTracker/view" component={Container}  />
      <Route path="/integration/kaseya/view" component={Container}  />
      {/*</Switch>*/}
    </div>
  </Router>
);
