import {Component} from "react";
import {DataTable} from "./dataTable";

export class DNSComp extends Component<any,any>{
  constructor(props){
    super(props);
  }
  render(){
    let props = this.props as any;
    return (
      <div className="row">
        <div className="col-md-12 widgetborder no-padding  dns-column">
          <div className="panel-heading table-header-bg">
            <span className="fs-20">DNS:{props.data.dns.domainName}</span>
            <div className="pull-right"><span>DNS Record Published</span> <img
              src="/img/icon_circle_success_white.svg" width="24px" height="24px"/></div>
          </div>
          <div id="dns">
            <DataTable data={props.data.dns.dns} loader={props.data.fetching} />
          </div>
          <div className="col-md-12 result fs-16"><div className="m-b-5 m-t-5">RESULT</div>
          </div>
          <div className="table-scroller-dns">
            <table className="table table-bordered">
              <tbody>
              <tr>
                <td className="text-center"><img src="/img/icon_circle_warning.svg"
                                                 width="24px" height="24px"/></td>
                <td>soa serail number format is invalid soa serail number format is
                  invalid soa serail number format is invalid soa serail number forma
                </td>
              </tr>
              <tr>
                <td className="text-center"><img src="/img/icon_circle_success.svg" />
                </td>
                <td>soa serail number format is invalid</td>
              </tr>
              <tr>
                <td className="text-center"><img src="/img/icon_circle_success.svg" />
                </td>
                <td>soa serail number format is invalid</td>
              </tr>
              <tr>
                <td className="text-center"><img src="/img/icon_circle_success.svg" />
                </td>
                <td>soa serail number format is invalid</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12 col-xs-12 table-footer"><span>Reported by</span>
            <span> </span>
            <span> on 4-4-2017 at</span> <span>6:45:32 AM (UTC-5)</span>
          </div>
        </div>
      </div>
    );
  }
}