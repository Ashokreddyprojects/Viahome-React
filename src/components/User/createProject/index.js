import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../Header';

class createProject extends Component {

	constructor(props)
	{
		super(props);
		this.state={

			 projectRequireError:[]
		}

	this.handleSubmit=this.handleSubmit.bind(this);
	}

handleSubmit(event)
{
	event.preventDefault();
	const project = event.target;
	let Name=project.Name.value;
	let Email=project.Email.value;
	let Address=project.Address.value;
	let City=project.City.value;
	let State=project.State.value;
	let ZipCode=project.ZipCode.value;
	let ProjectName=project.ProjectName.value;
	let OrganizationName=project.OrganizationName.value;
	let PropertyAddress=project.PropertyAddress.value;
	let MetroArea=project.MetroArea.value;
	let ConstructionType=project.ConstructionType.value;
	let PurchasePrice=project.PurchasePrice.value;
	let SquareFootage=project.SquareFootage.value;
	let RenovationLevel=project.RenovationLevel.value;
	let Studios=project.Studios.value;
	let One_BedRoom_11=project.One_BedRoom_11.value;
	let Two_BedRoom_12=project.Two_BedRoom_12.value;
	let Three_BedRoom_13=project.Three_BedRoom_13.value;
	let Four_BedRoom_14=project.Four_BedRoom_14.value;

					var condtionCheck=true;
					var projectRequireError =[];
	
					if(Name.length === 0){
							condtionCheck=false;
							projectRequireError[0]="Name is required"
						}
						if(Email.length === 0){
							condtionCheck=false;
							projectRequireError[2]="Email is required"
						}
							if(Address.length === 0){
							condtionCheck=false;
							projectRequireError[3]="Address is required"
						}
							if(City.length === 0){
							condtionCheck=false;
							projectRequireError[4]="City is required"
						}
							if(State.length === 0){
							condtionCheck=false;
							projectRequireError[5]="State is required"
						}
							if(ZipCode.length === 0){
							condtionCheck=false;
							projectRequireError[6]="Zip Code is required"
						}
							if(ProjectName.length === 0){
							condtionCheck=false;
							projectRequireError[7]="Project Name is required"
						}
							if(OrganizationName.length === 0){
							condtionCheck=false;
							projectRequireError[8]="Organization Name is required"
						}
							if(PropertyAddress.length === 0){
							condtionCheck=false;
							projectRequireError[9]="Property Address is required"
						}
							if(MetroArea.length === 0){
							condtionCheck=false;
							projectRequireError[10]="Metro Area is required"
						}
							if(ConstructionType.length === 0){
							condtionCheck=false;
							projectRequireError[11]="Construction Type is required"
						}
							if(PurchasePrice.length === 0){
							condtionCheck=false;
							projectRequireError[12]="Purchase Price is required"
						}
							if(SquareFootage.length === 0){
							condtionCheck=false;
							projectRequireError[13]="Square Footage is required"
						}
							if(RenovationLevel.length === 0){
							condtionCheck=false;
							projectRequireError[14]="Renovation Level is required"
						}
							if(Studios.length === 0){
							condtionCheck=false;
							projectRequireError[15]="Studios is required"
						}
							if(One_BedRoom_11.length === 0){
							condtionCheck=false;
							projectRequireError[16]="One BedRoom 11 is required"
						}
							if(Two_BedRoom_12.length === 0){
							condtionCheck=false;
							projectRequireError[17]="Two BedRoom 12 is required"
						}
							if(Three_BedRoom_13.length === 0){
							condtionCheck=false;
							projectRequireError[18]="Three BedRoom 13 is required"
						}
							if(Four_BedRoom_14.length === 0){
							condtionCheck=false;
							projectRequireError[19]="Four BedRoom 14 is required"
						}


						this.setState({projectRequireError})


}

    render() {
		var Name=this.props.location.state.Name;
				

        return (
            <UserHeader Name={Name}>
                <section id="container" >

    {/* main content start */}
    <section id="main-content" className="hide-sidebar">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt braeadcrumbs-dashboardresponsive">
                        <li>
                            <Link to={{ pathname: '/UserDashboard', state: {Name} }} className="">Dashboard</Link>
                        </li>
                         <li>
                            <Link className="current" to={{ pathname: '/createProject', state: {Name} }}>CreateProject</Link>
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
                                    
                                    <form role="form" className="form-horizontal" id="reg-login" onSubmit={this.handleSubmit} >
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
												<input placeholder="Name" type="text" name="Name"  />
												 <span className = "ErrorsMsgDisplay">{this.state.errors[0]}</span>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="E-mail" type="email" name="Email" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Phone" type="number" name="Phone" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" name="Address"/>
											</div>
										</div>
                                        
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="City" type="text" name="City"/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="State" type="text" name="State" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Zipcode" type="number"  name="ZipCode"/>
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
												<input placeholder="Project Name" type="text"  name="ProjectName"/>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" Organization Name" type="text" name="OrganizationName" />
											</div>
										</div>
                                       
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Property Address" type="text" name="PropertyAddress" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Metro Area" type="text" name="MetroArea" />
											</div>
										</div>
                                        
										<div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Is your project new construction or acquisition renovation" type="text"  name="ConstructionType"/>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the site purchase price" type="number" name="PurchasePrice" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder=" What is the building square footage" type="number" name="SquareFootage"/>
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="Renovation Level" type="text" name="RenovationLevel" />
											</div>
										</div>
                                        <div className="col-md-4">
											<div className="reg-login-info">
												<input placeholder="Studios" type="number" name="Studios" />
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
												<input placeholder="1 Bed Rooms 11" type="number"  name="One_BedRoom_11" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="2 Bed Rooms 12" type="number" name="Two_BedRoom_12" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="3 Bed Rooms 13" type="number" name="Three_BedRoom_13" />
											</div>
										</div>
                                        <div className="col-md-4 col-sm-6 col-xs-12">
											<div className="reg-login-info">
												<input placeholder="4 Bed Rooms" type="number"  name="Four_BedRoom_14" />
											</div>
										</div>
                                      

										
										
									</div>

									<div className="pull-right profilebtns">
										<a href="createproject.html" className="main-btn" type="reset">Cancel</a>
										<button className="main-btn btnreact">Add</button>
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
