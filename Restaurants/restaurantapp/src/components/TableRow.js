import React from 'react'
import { Col } from 'reactstrap';
import Table from './Table'


class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let row=[];
        for (var j = 0; j < this.props.cols; j++) {
            row.push(<Col style={{ paddingLeft: "2vw" }}><Table /></Col>)
        }
        return (
            row
        );
    }
}

export default TableRow;




