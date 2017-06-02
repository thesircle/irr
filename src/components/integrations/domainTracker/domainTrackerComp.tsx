import {Component} from 'react'
import {PropTypes} from 'prop-types';
import './../../../styles/main.scss'

export class DomainTrackerComp extends Component<{},{}> {

  constructor(props) {
    super(props);
    this.state = {
      whoisFetchStatus:"",
      DomainTrackerOBJ:"",
    }
  }
  componentWillReceiveProps(nextProps){
    let state = this.state as any
    if(typeof nextProps.domainTrackerFetchingWhois =='undefined')
    {
      this.setState({whoisFetchStatus: ""})
    }else{
      this.setState({whoisFetchStatus: nextProps.domainTrackerFetchingWhois as any})
    }
    if(typeof nextProps.domainTrakerOBJ =='undefined')
    {
      this.setState({DomainTrackerOBJ: ""})
    }else{
      this.setState({DomainTrackerOBJ:nextProps.domainTrakerOBJ as any})
    }



  }
  componentDidMount(){
    (this.props as any).onViewDomainTracker();
  }

  render(){

    let state = this.state as any
    let s:any = ( (state.whoisFetchStatus)? "/img/load.gif" : "" )
    return(
        <div className="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-7 whois-lg-6-1560 widgetborder no-padding">
                <div className="panel-heading-domain-tracker">
                  <span className="fs-20">WHOIS:</span> <span className="fs-20 font-weight-200">THEHELPDESK.COM</span>
                  <span className="pull-right"><span>Domain will expire in 670 days</span> <i className="fa fa-check-circle fa-2x"></i></span>
                </div>
                <div className="col-md-5 col-sm-6 bg-white no-padding">
                  <table className="table domain-tracker-table ">
                    <tbody className="nth-child-even">
                    <tr>
                      <td>Registrar</td>
                      <td>GODADDY.COM,LLC</td>
                    </tr>
                    <tr>
                      <td>Registrar  URL</td>
                      <td>http://www.godaddy.com</td>
                    </tr>
                    <tr>
                      <td>Expiration Date</td>
                      <td>13-Feb-2019</td>
                    </tr>
                    <tr>
                      <td>Creation Date</td>
                      <td>13-feb-2017</td>
                    </tr>
                    <tr>
                      <td>Updated Date</td>
                      <td>12-Mar-2017</td>
                    </tr>
                    <tr>
                      <td>Whois Server</td>
                      <td>whois.godaddy.com</td>
                    </tr>
                    <tr>
                      <td>Creation Date</td>
                      <td>13-feb-2017</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-7 col-sm-6 register-info">
                  <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="pill" href=".home">REGISTRANRT INFO</a></li>
                    <li><a data-toggle="pill" href=".menu1">ADMIN INFO</a></li>
                    <li><a data-toggle="pill" href=".menu2">TECH INFO</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade in active home">
                      <table className="table domain-tracker-table">
                        <tbody className="">
                        <tr>
                          <td>Registrar</td>
                          <td>GODADDY.COM,LLC</td>
                        </tr>
                        <tr>
                          <td>Registrar  URL</td>
                          <td>http://www.godaddy.com</td>
                        </tr>
                        <tr>
                          <td>Expiration Date</td>
                          <td>13-Feb-2019</td>
                        </tr>
                        <tr>
                          <td>Creation Date</td>
                          <td>13-feb-2017</td>
                        </tr>
                        <tr>
                          <td>Updated Date</td>
                          <td>12-Mar-2017</td>
                        </tr>
                        <tr>
                          <td>Whois Server</td>
                          <td>whois.godaddy.com</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div  className="tab-pane fade menu1">
                      <h3>Menu 1</h3>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div  className="tab-pane fade menu2">
                      <h3>Menu 2</h3>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 reported"><span className="font-weight-200">Reported by</span> <span>whois:godaddy.com</span>
                  <span>on 4-4-2017 at</span> <span>6:45:32 AM (UTC-5)</span>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-3 col-lg-push-2 col-md-push-6 col-sm-push-6 lg-6-1560 p-l-0">
                <div className="col-md-12  col-lg-12 no-padding">
                  <img src="assets/img/domain-img.png" className="domain-img"/>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-lg-pull-3 col-sm-pull-6 col-md-pull-6 Aname-Ptrrecord-width">
                <div className="col-md-12 col-lg-12 no-padding">
                  <div className="col-md-12  widgetborder height_auto Aname-colum">
                    <div className="panel-heading p-l-0">
                      <span className="fs-20">A NAME</span>
                    </div>
                    <div className="row">
                      <table className="table Aname-ptr-table">
                        <tbody>
                        <tr>
                          <td className="col-md-5">Domain name</td>
                          <td>thehelpdesk.com</td>
                        </tr>
                        <tr>
                          <td className="col-md-5">IP address</td>
                          <td>56.63.202.48</td>
                        </tr>
                        <tr>
                          <td className="col-md-5">Ttl</td>
                          <td>10 min</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-12  widgetborder height_auto ptr-colum m-t-15">
                    <div className="panel-heading p-l-0">
                      <span className="fs-20">PTR RECORD</span>
                    </div>
                    <div className="row">
                      <table className="table  Aname-ptr-table">
                        <tbody>
                        <tr>
                          <td className="col-md-5">IP address</td>
                          <td>thehelpdesk.com</td>
                        </tr>
                        <tr>

                          <td className="col-md-5">Domain name</td>
                          <td>56.63.202.48</td>
                        </tr>
                        <tr>
                          <td className="col-md-5">Ttl</td>
                          <td>10 min</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 m-t-15 col-sm-12  sm-padding dns">
                <div className="row">
                  <div className="col-md-12 widgetborder no-padding dns-colum">
                    <div className="panel-heading-domain-tracker">
                      <span className="fs-20">DNS:</span> <span className="fs-20 font-weight-200">THEHELPDESK.COM</span>
                      <span className="pull-right"><span>Domain will expire in 670 days</span> <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i></span>

                    </div>
                    <div className="scroller">
                      <table className="table table-bordered">
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
                        <tbody className="nth-child-even">
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td>john@example.com</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td>john@example.com</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td>john@example.com</td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td  className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-12 p-t-5 p-b-5 result"><span className="fs-16">Result</span>
                    </div>
                    <div className="scroller result-table-colum">
                      <table className="table table-bordered domain-tracker-table result-table ">
                        <tbody>
                        <tr>
                          <td className="text-center"><i className="fa fa-exclamation-circle fa-2x"></i></td>
                          <td>soa serail number format is invalid soa serail number format is invalid soa serail number format is invalid soa serail number forma</td>
                        </tr>
                        <tr>
                          <td className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>        <td>soa serail number format is invalid</td>
                        </tr>
                        <tr>
                          <td className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td>soa serail number format is invalid</td>
                        </tr>
                        <tr>
                          <td className="text-center"><i className="fa fa-check-circle fa-2x"></i></td>
                          <td>soa serail number format is invalid</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-12 col-xs-12 reported"> <span className="font-weight-200">Reported by</span> <span>whois:godaddy.com</span>
                      <span>on 4-4-2017 at</span> <span>6:45:32 AM (UTC-5)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 m-t-15 col-lg-6 no-padding mx-record-colum">
                <div className="col-md-12 mx-record-colum2">
                  <div className="col-md-12  widgetborder">
                    <div className="panel-heading p-l-0">
                      <span className="fs-20">MX RECORD</span>
                    </div>
                    <div className="row mx-record-table scroller">
                      <table className="table table-bordered domain-tracker-table result-table">
                        <thead>
                        <tr >
                          <th>
                            pref
                          </th>
                          <th>
                            host Name
                          </th>
                          <th>
                            ip address
                          </th>
                          <th>
                            ttl
                          </th>
                          <th></th>
                        </tr>
                        </thead>
                        <tbody className="nth-child-even">
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                          <td>john@example.com</td>
                          <td>John</td>
                          <td>john@example.com</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 m-t-15 spf-txt-colum">
                  <div className="col-md-6 p-l-0">
                    <div className="widgetborder">
                      <div className="panel-heading">
                        <span className="fs-20">SPF</span>
                      </div>
                      <div className="scroller">
                        <table className="table table-bordered domain-tracker-table result-table">
                          <thead>
                          <tr>
                            <th></th>
                            <th>test</th>
                            <th>result</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td className="text-center"><i className="fa fa-times-circle fa-2x" aria-hidden="true" ></i></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><i className="fa fa-check-circle fa-2x" aria-hidden="true"></i></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><i className="fa fa-check-circle fa-2x" aria-hidden="true" ></i></td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td className="text-center"><i className="fa fa-check-circle fa-2x" aria-hidden="true" ></i></td>
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
                      <div className="scroller">
                        <table className="table table-bordered domain-tracker-table result-table">
                          <thead>
                          <tr >
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

    )
  }
}

