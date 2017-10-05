import React, { Component } from "react";

class TableRow extends Component {


    render() {

        // console.log("Table Row data",this.props.data.Zip)

        return (



         <tr>

             {}
                                <td>{this.props.data.ProjectName}</td>
                                <td>{this.props.data.ConstructionType}</td>
                                <td>{this.props.data.Name}</td> 
                                <td className="text-right"></td>
                                <td></td>
                                <td></td>
                                
							
                            </tr>


        )





    }


}

export default TableRow;