import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserHeader from '../Header';
import Table from '../UserDashboardTable/Table';
import { fetchDashBoardData } from '../../../AdminAction/actions';
import { fetchUserData } from '../../../AdminAction/userActions';
import * as AdminConstants from '../../Admin/AdminConstants';



class UserDashboard extends Component {
    componentWillMount() {
        var Url = AdminConstants.ApiCallUrl + 'findUsers';
        var paramString1 = "list";

        this.props.dispatch(fetchUserData(Url, paramString1));
        var Url2 = AdminConstants.ApiCallUrl + 'findProjects';
        var paramString = "list";

        this.props.dispatch(fetchDashBoardData(Url2, paramString));

    }
    render() {
        var data = this.props.location.state;

        var UserDatails = this.props.location.state;
        var Name;


        if (UserDatails.UserLoginData == undefined) {
            Name = data;
        } else {
            // console.log("User Login Details",UserDatails.UserLoginData.result)
            Name = UserDatails.UserLoginData.result;

        }
        return (
            <UserHeader Name={Name}>
                <section id="main-content" className="hide-sidebar">
                    <section className="wrapper">
                        <div className="row dbalign">
                            <div className="col-md-6 col-sm-6 col-xs-12 aligndbbtn">
                                <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsiveuser">
                                    <li>
                                        <a href="user-dashboard.html" className="current">Dashboard</a>
                                    </li>

                                </ul>

                            </div>


                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <Link className="default-btn pull-right cpbtn" to={{ pathname: '/createProject', state: {Name} }} >Create Project</Link>
                                <div className="input-group pull-right col-md-6 col-sm-8 col-xs-9 searchbuttonadjustment">
                                    <input type="text" className="search-query form-control serachbtn" placeholder="Search" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default serachbtnicon" type="button">
                                            <span className=" glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>

                            </div>


                        </div>
                        {/* page start */}
                        <section className="panel">
                            <header className="panel-heading main-bg">
                                <div className="row">
                                    <div className="col-md-6"><span className="pull-left">Projects List</span></div>
                                    <div className="col-md-6"><span className="pull-right">Total Users:&nbsp;{this.props.DashBoardApiSize}</span></div>
                                </div>
                            </header>
                            <div className="panel-body table-responsive">
                                <Table data={this.props.DashBoardApi} />
                                {/* <table className="table  table-hover table-striped general-table col-md-12 col-sm-12 col-xs-12">
                            <thead>
                            <tr>
								<th>Project Name</th>
                                <th>Project Type</th>
                                <th>User</th>
                                <th>Number of Units</th>
                                <th className="text-right">Total Project Size</th>
                                <th>FMR Area</th>
                                <th width="180px">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gutsy</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="left" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Square</td>
                                <td>New Construction</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                 <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                     <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
							<tr>
                                <td>Wrench</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                               <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                   <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
								
                            </tr>
                            <tr>
                                <td>Hook</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
								
                            </tr>
                            <tr>
                                <td>Severe</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                <tr>
                                <td>Rebel</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Subdivision</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                            <tr>
                                <td>Cobra</td>
                                <td>Acquisition / Renovation</td>
                                <td>User </td>
                                <td></td>
                                <td></td>
                                <td></td>
                               <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                   <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                <tr>
                                <td>Antique</td>
                                <td>New Construction</td>
                                <td>User </td>
                               <td></td>
                                <td></td>
                                <td></td>
                                <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                            </tr>
                                 <tr>
                                <td>Colusa</td>
                                <td>Acquisition / Renovation</td>
                                <td>User</td>
                                <td>6</td>
                                <td className="text-right">588,836.00</td>
                                <td>N/A</td>
                                 <td>
									<a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
									<a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
									<a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
									<a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                                     <a href="editvhmodeltable.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
								</td>
                                
                            </tr>
                            </tbody>
                        </table> */}
                            </div>
                        </section>


                    </section>
                </section>

            </UserHeader>
        );
    }
}
function mapStateToProps(state, actions) {




    if (state.fetchDashBoardData && state.fetchDashBoardData.App && state.fetchDashBoardData.App.length > 0) {
        // console.log("DashBoard", state.fetchDashBoardData)

        //debugger;
        return {
            DashBoardApi: state.fetchDashBoardData.App,
            DashBoardApiSize: state.fetchDashBoardData.App.length,
            UsersAPICount: state.fetchUserData.App.length
        }
    } else {
        return {};
    }

}

export default connect(mapStateToProps)(UserDashboard);