import * as React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import {domainTracker as DomainTracker} from "./components/company/domainTracker/domainTrackerContainer";
import {kaseyaContainer as KaseyaContainer} from "./components/integrations/kaseya/kaseyaContainer";
import {showErrors as ShowErrors} from "./components/UtilComp/wiseMessageContainer";

// TODO: {M.A} find a solution //https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17355#issuecomment-310544041*/
let props:any; // tslint:disable-line
export const routes = () => (

  <Router>
    <div>
      <ShowErrors {...props}/>
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
        <Route path="/integration/kaseya/view" component={KaseyaContainer} {...props}  />

        {/*<Route path="/company/domainTracker/:domain/view" component={DomainTracker}  />*/}
      {/*</Switch>*/}
    </div>
  </Router>
);
