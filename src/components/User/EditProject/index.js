import React, { Component } from 'react';
import UserHeader from '../Header';



class EditProject extends Component {
    render() {
   
        return (
            <UserHeader>
                <section id="container" >

{/* sidebar end */}
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
                            <a className="current" href="editproject.html">Edit Project</a>
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
                        Update Project
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

                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Name" type="text" value="Kenneth Baker"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="E-mail" type="email" value="kbaker@sevenriversgroup.com"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" value="(630) 965-9322"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" value="7748 S.East End" />
											</div>
										</div>
                                        
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="City" type="text" value="Chicago" />
											</div>
										</div>
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="State" type="text" value="IL"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Zipcode" type="number"value="60649"  />
											</div>
										</div>
                                        </div>
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Project Details</u></h2>
                                         </div>
                                        <div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Project Name" type="text" value="Gutsy"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" Organization Name" type="text" value="Seven Rivers Group LLC"  />
											</div>
										</div>
                                       
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Property Adress" type="text" value="7748 S.East End Chicago, IL 60649"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Metro Area" type="text" value="Chicago-Joliet-Naperville, IL HUD Metro FMR Area"  />
											</div>
										</div>
                                        
										<div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Is your project new construction or acquisition renovation" type="text"  value="Acquisition / Renovation"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" What is the site purchase price" type="number" value="85000"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder=" What is the building square footage" type="number" value="8934"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Renovation Level" type="text" value="Substantial"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Studios" type="number" value="0"  />
											</div>
										</div>
                                        </div>
                                        <br />
                                        <div className="prf-contacts sttng prf-personal prjdetailpad">
                                        <h2><u>Other Details</u></h2>
                                        </div>
                                        
                                        <div className="row">
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="1 Bed Rooms 11" type="number" value="0"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="2 Bed Rooms 12" type="number" value="0"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="3 Bed Rooms 13" type="number"value="0"  />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="4 Bed Rooms" type="number" value="5"  />
											</div>
										</div>
									</div>

									<div className="pull-right profilebtns">
										<a href="editproject.html" className="main-btn">Cancel</a>
										<a href="#" className="btnreact main-btn" data-toggle="modal" data-target="#successmsg">Update</a>
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
    </section>
            </UserHeader>
        );
    }
}

export default EditProject;