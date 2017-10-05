import React, {Component} from 'react';
import  { Link } from 'react-router-dom';

class TableRow extends Component {

    render () {
       const { data , remove1, Name } =this.props;

        return (

            <tr>
                     <td>{this.props.data.value}</td>
                                <td>{this.props.data.Repair_Level}</td>
                                <td className="text-right">{this.props.data.price}</td>
                               <td>
									<Link to={{pathname: '/DashBoardRCAssumptionsEdit', state: {Name, data}}} className="edit2"><i data-placement="top" data-toggle="tooltip" className="fa fa-edit editicon tooltips" data-original-title="Edit"></i></Link>
                                    <span onClick={remove1.bind(this,data)} className="delete2 couserHandSymbol"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon" data-original-title="Delete"></i></span> 
									{/* <a href="javascript:(void);" data-toggle="modal" data-target="#delete" className="delete2"><i data-placement="top" data-toggle="tooltip" className="fa fa-trash bootbox-confirm removeicon tooltips" data-original-title="Delete"></i></a> */}
				               </td>
            </tr>
        )
    }
}

export default TableRow;