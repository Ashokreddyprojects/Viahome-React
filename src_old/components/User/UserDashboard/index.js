import React, { Component } from 'react';
import UserHeader from '../Header';



class UserDashboard extends Component {
  render() {
    var data=this.props.location.state;
    console.log("User Login Data",data)
    return (
      <UserHeader>
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
                
                     <a className="default-btn pull-right cpbtn" href="createproject.html">Create Project</a>
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
                        <div className="col-md-6"><span className="pull-right">Total Users:100</span></div>
                       </div>
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover table-striped general-table col-md-12 col-sm-12 col-xs-12">
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
                        </table>
                    </div>
                </section>


            {/*-Pagenation start-- */}
           
            <ul className="pagination pull-right ">
                     
                   <li><a href="#">&laquo;</a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                   <li><a href="#">&raquo;</a></li>
               
            </ul>
          
        {/* page end */}
        </section>
    </section>
      
      </UserHeader>
    );
  }
}

export default UserDashboard;