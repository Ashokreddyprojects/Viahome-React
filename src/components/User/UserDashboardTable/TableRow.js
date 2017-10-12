import React, { Component } from "react";

class TableRow extends Component {


    render() {

        return (


            <tr>
                <td>{this.props.data.ProjectName}</td>
                <td>{this.props.data.ConstructionType}</td>
                <td>{this.props.data.Name} </td>
                <td className="text-right">{this.props.data.Number_of_Units}</td>
                <td className="text-right">{this.props.data.Total_Project_Size}</td>
                <td>{this.props.data.FMR_Area}</td>
                <td className="text-center">
                    <a href="vhmodel.html" className="vhmodel"><i data-placement="top" data-toggle="tooltip" className="fa fa-home homeicon" data-original-title="VH Model"></i></a>
                    <a href="editproject.html" className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon" data-original-title="Edit Project"></i></a>
                    <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></a>
                    <a href="termsheet.html" className="termsheet"><i data-placement="top" data-toggle="tooltip" className="fa fa-file-text-o termicon" data-original-title="Term Sheet"></i></a>
                    <a href="editvhmodeltable.html" className="edit2"><i data-placement="left" data-toggle="tooltip" className="fa fa-pencil editicon" data-original-title="Edit VH Model"></i></a>
                </td>
            </tr>


        )





    }


}

export default TableRow;