import React from "react";
import { Button, Row, Col, Table } from "reactstrap";
import classNames from "classnames";
import {formatTime} from 'Util/time';

export default class VersionsTable extends React.Component {
  render() {
    const {
      versions
    }= this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Block #</th>
            <th>Deploy Date</th>
            <th>Address</th>
            <th>Transaction Hash</th>
          </tr>
        </thead>
        <tbody>
          {
            versions.map((v,i)=>(
              <tr key={i}>
                <th scope="row">{v.blockNumber.toLocaleString()}</th>
                <td>{formatTime(v.timestamp, 'MM-DD-YYYY HH:mm:ss')}</td>
                <td>{v.address}</td>
                <td>{v.txnHash}</td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    );
  }
}
