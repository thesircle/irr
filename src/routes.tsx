import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {container as Container} from "./components/root/rootContainer";

export const routes = () => (

  <Router>
    <div>
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
        <Route path="/integration/domainTracker/view" component={Container}  />
      <Route path="/integration/kaseya/view" component={Container}  />
      <Route path="/comapny/domainTracker/:domain" component={Container}  />
      {/*</Switch>*/}
    </div>
  </Router>
);
