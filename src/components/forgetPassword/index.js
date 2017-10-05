import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import * as AdminConstants from '../AdminConstants';
// import { Button, Modal } from 'react-bootstrap';


class forgetPassword extends Component {
  render() {

    console.log("hello")
    return (
      <div className="login-body">
    <div className="container">

      <form className="form-signin" >
        <img src="images/main-logo.png" className="img-responsive respwd1"/>
		<hr />
		<h5 className="text-center resh4" >Reset Your Password</h5>
		
        <div className="login-wrap">
            <div className="user-login-info" id="reg-login">
				<input placeholder="New Password" id="user" type="password" className="inputplaceholder" />
				<input placeholder="Confirm Password" type="password" className="inputplaceholder" />
			</div>
                
            <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit" data-toggle="modal" data-target="#signIn">Reset Password</button>
            
			
            
        </div>
         
          
          
      </form>
    </div>
      </div>
    );
  }
}

export default forgetPassword;