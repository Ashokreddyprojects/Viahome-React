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
                                <th width="160px">2017 Median<br/>Income ($)</th>
                                <th width="90px">1 Person <br />($)</th>
                                <th width="90px">2 People <br />($)</th>
                                <th width="90px">3 People <br />($)</th>
                                <th width="90px">4 People <br />($)</th>
                                <th width="90px">5 People <br />($)</th>
                                <th width="90px">6 People <br />($)</th>
                                <th width="90px">7 People <br />($)</th>
                                <th width="90px">8 People <br />($)</th>
                                <th width="100px">Actions</th>
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