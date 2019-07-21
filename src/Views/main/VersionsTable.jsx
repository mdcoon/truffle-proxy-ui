import React from "react";
import { Button, Row, Col, Table } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

export default class VersionsTable extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Block #</th>
            <th>Deploy Date</th>
            <th>Address</th>
            <th>Transaction Hash</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sample Block #</th>
            <td>7-20-19 12:00</td>
            <td>0x…………</td>
            <td>@0x…………</td>
            <td className={classNames(["text-center"])}>
              <Button color="primary" size="lg">
                Here's a link
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">Sample Block #</th>
            <td>7-20-19 12:00</td>
            <td>0x…………</td>
            <td>@0x…………</td>
            <td className={classNames(["text-center"])}>
              <Button color="primary" size="lg">
                Here's a link
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">Sample Block #</th>
            <td>7-20-19 12:00</td>
            <td>0x…………</td>
            <td>@0x…………</td>
            <td className={classNames(["text-center"])}>
              <Button color="primary" size="lg">
                Here's a link
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
