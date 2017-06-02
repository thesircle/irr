import KaseyaContainer from "../integrations/kaseya/kaseyaContainer";
import DomainTracker from "../integrations/domainTracker/domainTrackerContainer";
import ShowErrors from "../UtilComp/wiseMessageContainer"
export const RootComp = (props) =>
  (
    <div>
      this is root
      <ShowErrors />
      {(props.match.url === "/integration/kaseya/view")? <KaseyaContainer/>:null}
        {(props.match.url === "/integration/domainTracker/view")? <DomainTracker/>:null}
    </div>
  )