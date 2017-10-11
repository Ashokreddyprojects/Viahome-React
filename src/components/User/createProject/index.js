import React, { Component } from 'react';
import UserHeader from '../Header';

class createProject extends Component {
    render() {
        return (
            <UserHeader>
                <section id="container" >

    {/* main content start */}
    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <a href="user-dashboard.html" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="createproject.html">CreateProject</a>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            
            <div className="col-md-12">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Create Project
                        {/*  <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span>  */}
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                          
                            <div id="EditProfile" className="tab-pane active">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Personal Details</u></h2>
                                    </div>
									<div className="row">
{/* 
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Intake ID" type="number" required>
											</div>
										</div>
 */}
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Name" type="text" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="E-mail" type="email" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Phone" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" />
											</div>
										</div>
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="City" type="text" />
											</div>
										</div>
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="State" type="text" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Zipcode" type="number" />
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Project Details</u></h2>
                                        </div>
                                        <div className="row">
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Project Name" type="text" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" Organization Name" type="text" />
											</div>
										</div>
                                       
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Property Address" type="text" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Metro Area" type="text" />
											</div>
										</div>
                                        
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Is your project new construction or acquisition renovation" type="text" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the site purchase price" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the building square footage" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Renovation Level" type="text" />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Studios" type="number" />
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Other Details</u></h2>
                                      </div>
                                        
                                        <div className="row">
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="1 Bed Rooms 11" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="2 Bed Rooms 12" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="3 Bed Rooms 13" type="number" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="4 Bed Rooms" type="number" />
											</div>
										</div>
                                      

										
										
									</div>

									<div className="pull-right profilebtns">
										<a href="createproject.html" className="main-btn" type="reset">Cancel</a>
										<a href="#" className="main-btn" data-toggle="modal" data-target="#successmsg" className="main-btn">Add</a>
									</div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}

</section>
            </UserHeader>
        );
    }
}

export default createProject;
