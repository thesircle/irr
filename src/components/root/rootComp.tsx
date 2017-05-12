import KaseyaContainer from "../integrations/kaseya/kaseyaContainer";
export const RootComp = (props) =>
  (
    <div>
      this is root
      {(props.match.url === "/integration/kaseya/view")? <KaseyaContainer/>:null}
    </div>
  )