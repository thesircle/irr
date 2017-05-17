import KaseyaContainer from "../integrations/kaseya/kaseyaContainer";
import ShowErrors from "../UtilComp/wiseMessageContainer"
export const RootComp = (props) =>
  (
    <div>
      this is root
      <ShowErrors />
      {(props.match.url === "/integration/kaseya/view")? <KaseyaContainer/>:null}
    </div>
  )