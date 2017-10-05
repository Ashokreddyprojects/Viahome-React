import React, { Component } from 'react';
import HeadBar from '../Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Table from '../DashBoardTable/Table';
import { fetchDashBoardData } from '../../../AdminAction/actions';
import * as AdminConstants from '../AdminConstants';


class DashBoard extends Component {

    componentWillMount() {
        // console.log("Hi")
        var Url2 = AdminConstants.ApiCallUrl+'findProjects';
        var paramString = "list";

        this.props.dispatch(fetchDashBoardData(Url2, paramString));

    }
    render() {
 var data=this.props.location.state;

  var UserDatails = this.props.location.state;
  var UserDatailsSecure;
 

  if(UserDatails.UserLoginData==undefined)
    {
        UserDatailsSecure=data;
    }else
    {
        // console.log("User Login Details",UserDatails.UserLoginData.result)
        UserDatailsSecure=UserDatails.UserLoginData.result;

    }
  
   
        return (
            <HeadBar Name={UserDatailsSecure} >
                {/*main content start*/}
                <section id="main-content">
                    <section className="wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                                    <li>
                                        <Link to="AdminDashBoard" className="current">Dashboard</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* page start*/}

                        <section className="panel">
                            <header className="panel-heading main-bg">
                                <div className="row">
                                    <div className="col-md-4 col-xs-12 col-sm-4 headiconspl"><span>Projects List</span></div>
                                    <div className="col-md-4 col-xs-12 col-sm-4 headiconstp"><span>Total Projects:120</span></div>
                                    <div className="col-md-4 col-xs-12 col-sm-4 headiconstu"><span>Total Users:100</span></div>
                                </div>

                            </header>
                            <div className="panel-body table-responsive">


                                <Table data={this.props.DashBoardApi} />
                                {/* <Table  data={tableData}/>    */}

                                {/*  <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                               
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
							
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
								
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
								
                            </tr>
                            <tr>
                                <td>Serve</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                               
                                
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                    
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
                                
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                                   
                                
                            </tr>
                                <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                 
                                
                            </tr>
                            </tbody>
                        </table> */}
                            </div>
                        </section>




                        {/* page end*/}
                    </section>
                </section>
                {/*main content end*/}
            </HeadBar>
        );
    }
}


DashBoard.propTypes = {

};

DashBoard = reduxForm({
    form: 'DashBoard'
    // a unique identifier for this form
})(DashBoard)



function mapStateToProps(state, actions) {

    console.log("App", state.fetchDashBoardData.App)


    if (state.fetchDashBoardData && state.fetchDashBoardData.App && state.fetchDashBoardData.App.length > 0) {
        console.log("DashBoard", state.fetchDashBoardData)
        //debugger;
        return { DashBoardApi: state.fetchDashBoardData.App }
    } else {
        return {};
    }

}


export default connect(mapStateToProps)(DashBoard);
