import {Component} from "react";
import {LoaderCog} from "../../UtilComp/loaderCog";
import "./../../../styles/main.scss";
import {TabContentComp} from "./tabContentComp";
import {WhoisComp} from "./whoisComp";

export class DomainTrackerComp extends Component<{},{}> {

  constructor(props) {
    super(props);
    this.state = {
      header_whois:"",
      WhoisOBJ:{},
      AOBJ:{
        fetching:true,
        data:{
          information:{}
        }
      }
    };
  }

  componentWillReceiveProps(nextProps){
    let state = this.state as any;
    this.setState({WhoisOBJ:nextProps.domainTrackerWhois});
    nextProps.domainTrackerA.data ? this.setState({AOBJ: nextProps.domainTrackerA}): null;

  }
  componentDidMount(){
    (this.props as any).onViewDomainTracker();
  }

  render(){
    let state = this.state as any;
    return(
        <div className="page-wrapper">
          <div className="page-container">
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xs-12 registrar-info widgetborder no-padding m-b-15">
                <WhoisComp data={state.WhoisOBJ || {}}/>

              </div>
              <div className="col-md-6 col-sm-6 col-lg-3 col-lg-push-3 col-md-push-6 col-sm-push-6 domain-view no-padding">
               <img src="/img/domain-img.png" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-lg-pull-3 col-sm-pull-6 col-md-pull-6 an-pttr-width">
                <div className="col-md-12 col-lg-12  widgetborder domain-info">
                  <div className="panel-heading">
                    <span className="fs-20">A NAME</span>

                  </div>
                  {state.AOBJ.fetching ?
                    <LoaderCog/>:
                    <TabContentComp data={state.AOBJ.data.information || {}} />
                  }
                </div>
                <div className="col-md-12 col-lg-12  widgetborder domain-info m-t-15">
                  <div className="panel-heading">
                    <span className="fs-20">PTR RECORD</span>
                  </div>
                  <table className="table">
                    <tbody>
                    <tr>
                      <td>IP ADDRESS</td>
                      <td>thehelpdesk.com</td>
                    </tr>
                    <tr>
                      <td>DOMAIN NAME</td>
                      <td>56.63.202.48</td>
                    </tr>
                    <tr>
                      <td>TTL</td>
                      <td>10 min</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12 m-b-15 dns-record">
                <div className="row">
                  <div className="col-md-12 widgetborder no-padding  dns-column">
                    <div className="panel-heading table-header-bg">
                      <span className="fs-20">DNS:THEHELPDESK.COM</span>
                      <div className="pull-right"><span>DNS Record Published</span> <img
                          src="/img/icon_circle_success_white.svg" width="24px" height="24px"/></div>
                    </div>
                    <div id="dns">
                      <table className="table">
                        <thead>
                        <tr>
                          <th>Type</th>
                          <th>Domain Name</th>
                          <th>ip address</th>
                          <th>ttl</th>
                          <th>status</th>
                          <th>time</th>
                          <th>auth</th>
                          <th>parent</th>
                          <th>local</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td>john@example.com</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td>john@example.com</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td>john@example.com</td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                          <td className="text-center"><img src="/img/icon_circle_success.svg" />
                          </td>
                        </tr>
                        </tbody>
                      </table>
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
              </div>
              <div className="col-md-12 col-sm-12 col-lg-6 p-r-0 mx-record-column">
                <div className="col-md-12  widgetborder no-padding mx-record-column2">
                  <div className="panel-heading">
                    <span className="fs-20">MX RECORD</span>
                  </div>
                  <div id="mx-record">
                    <table className="table">
                      <thead>
                      <tr >
                        <th>pref</th>
                        <th>host Name</th>
                        <th>ip address</th>
                        <th>ttl</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>

                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>

                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>

                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td><a href="#">Blacklist Check</a> <a href="#">SMTP Test</a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-12 m-t-15 spf-txt-column no-padding">
                  <div className="col-md-6 p-l-0">
                    <div className="widgetborder">
                      <div className="panel-heading">
                        <span className="fs-20">SPF</span>
                      </div>
                      <div id="spf">
                        <table className="table">
                          <thead>
                          <tr>
                            <th></th>
                            <th>test</th>
                            <th>result</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="text-center"><img src="/img/icon_circle_error.svg"
                                                             width="24px" height="24px"/></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><img src="/img/icon_circle_success.svg" /></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><img src="/img/icon_circle_success.svg" /></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><img src="/img/icon_circle_success.svg" /></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 txtmain p-r-0">
                    <div className="widgetborder">
                      <div className="panel-heading">
                        <span className="fs-20">TXT</span>
                      </div>
                      <div id="txt">
                        <table className="table">
                          <thead>
                          <tr>
                            <th>domain name</th>
                            <th>record</th>
                            <th>ttl</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>John</td>
                          </tr>
                          <tr>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>John</td>
                          </tr>
                          <tr>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>John</td>
                          </tr>
                          <tr>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>John</td>
                          </tr>
                          <tr>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                            <td>John</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

    );
  }
}
