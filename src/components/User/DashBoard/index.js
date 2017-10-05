import React, { Component } from 'react';



class DashBoard extends Component {
  render() {
    var data=this.props.location.state;
    console.log("User Login Data",data)
    return (
      <div>
          <p>This page is under construction. Please come back soon!</p>
      
      </div>
    );
  }
}

export default DashBoard;