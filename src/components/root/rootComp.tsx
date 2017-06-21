import {domainTracker as DomainTracker} from "../company/domainTracker/domainTrackerContainer";
import {kaseyaContainer as KaseyaContainer} from "../integrations/kaseya/kaseyaContainer";
import {showErrors as ShowErrors} from "../UtilComp/wiseMessageContainer";
export const rootComp =props => (
    <div>
      <ShowErrors />
      {(props.match.url === "/integration/kaseya/view")? <KaseyaContainer/>:null}
        {(props.match.url === "/company/domainTracker/view")? <DomainTracker/>:null}
    </div>
  );