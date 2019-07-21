import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

export default class HistoricalTransactions extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Storage Location</th>
            <th>Storage Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x…………</td>
            <td>1</td>
          </tr>
          <tr>
            <td>0x…………</td>
            <td>1</td>
          </tr>
          <tr>
            <td>0x…………</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
