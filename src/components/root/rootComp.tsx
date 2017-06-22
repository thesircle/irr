import {domainTracker as DomainTracker} from "../integrations/domainTracker/domainTrackerContainer";
import {kaseyaContainer as KaseyaContainer} from "../integrations/kaseya/kaseyaContainer";
import {showErrors as ShowErrors} from "../UtilComp/wiseMessageContainer";
interface Props {
  match: Match;
}
interface Match {
  url: string;
}
export const rootComp = (props: any) => (
  <div>
    this is root
    <ShowErrors />
    {(props.match.url === "/integration/kaseya/view") ? <KaseyaContainer/> : null}
    {(props.match.url === "/integration/domainTracker/view") ? <DomainTracker/> : null}
  </div>
);