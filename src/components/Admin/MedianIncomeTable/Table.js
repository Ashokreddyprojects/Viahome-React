import React, {Component} from 'react';
import TableRow from './TableRow';

class Table extends Component {

    constructor() {
        super();
    }

    render() {
        const { remove, Name } = this.props
        if(!this.props.data) return null

        return (

            <div>
                <table className="table  table-hover general-table mangaeicons responsivetbl-adjustadmindashboard">

                    <thead>

                        <tr className="tblalignmentmedianincome">
                              <th><span className="pull-left">Area Name</span></th>
                                <th>2017&nbsp;Median&nbsp;Income<br />($)</th>
                                <th>1 Person <br />($)</th>
                                <th>2 People <br />($)</th>
                                <th>3 People <br />($)</th>
                                <th>4 People <br />($)</th>
                                <th>5 People <br />($)</th>
                                <th>6 People <br />($)</th>
                                <th>7 People <br />($)</th>
                                <th>8 People <br />($)</th>
                                <th width="160"><span className="pull-left">Actions</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.data.map((person, i) => <TableRow remove1={remove.bind(this)}  Name={Name}  key = {i} data = {person} />)}
                    </tbody>
                </table>

            </div>
        )
    }
}


export default Table;