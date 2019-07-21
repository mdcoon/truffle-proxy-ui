import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

export default class HistoricalStorage extends React.Component {
  render() {
    const {
      txns
    } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th>Block #</th>
            <th>Function</th>
            <th>To Addr</th>
            <th>Transaction Hash</th>
          </tr>
        </thead>
        <tbody>
          {
            txns.map((t, i)=>(
              <tr key={i}>
                <th scope="row">{t.blockNumber.toLocaleString()}</th>
                <td>f...</td>
                <td>{t.receipt.to?t.receipt.to:'none'}</td>
                <td>{t.hash.substring(0, 20) + '...'}</td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>
    );
  }
}
