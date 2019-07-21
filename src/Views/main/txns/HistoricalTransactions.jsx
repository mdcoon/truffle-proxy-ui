import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";
import StorageSummary from 'Components/StorageSummary/StorageSummary';

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
            <th>Status</th>
            <th>Memory</th>
          </tr>
        </thead>
        <tbody>
          {
            txns.map((t, i)=>(
              <tr key={i}>
                <th scope="row">{t.blockNumber.toLocaleString()}</th>
                <td>{t.fn?t.fn:'unknown'}</td>
                <td>{t.receipt.to?t.receipt.to:'none'}</td>
                <td>{t.hash.substring(0, 20) + '...'}</td>
                <td>{t.receipt.status?"SUCCESS":"FAIL"}</td>
                <td><StorageSummary /></td>
              </tr>
            ))
          }

        </tbody>
      </Table>
    );
  }
}
