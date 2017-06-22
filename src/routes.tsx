import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {container as Container} from "./components/root/rootContainer";
import {domainTracker as DomainTracker} from "./components/company/domainTracker/domainTrackerContainer";

export const routes = () => (

  <Router>
    <div>
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
        <Route path="/company/domainTracker/view" component={Container}  />
        <Route path="/integration/kaseya/view" component={Container}  />
        <Route path="/company/domainTracker/:domain/view" component={DomainTracker}  />
      {/*</Switch>*/}
    </div>
  </Router>
);
