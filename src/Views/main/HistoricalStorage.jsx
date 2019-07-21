import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

export default class HistoricalStorage extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Block #</th>
            <th>Transaction Hash</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>0x…………</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>0x…………</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>0x…………</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
