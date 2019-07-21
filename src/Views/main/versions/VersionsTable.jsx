import React from "react";
import { Button, Row, Col, Table } from "reactstrap";
import classNames from "classnames";
import { formatTime } from "Util/time";
import styles from "../main.module.scss";

export default class VersionsTable extends React.Component {
  render() {
    const { versions } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th className={classNames([styles.table_header])}>Block #</th>
            <th className={classNames([styles.table_header])}>Deploy Date</th>
            <th className={classNames([styles.table_header])}>Address</th>
            <th className={classNames([styles.table_header])}>
              Transaction Hash
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {versions.map((v, i) => (
            <tr key={i}>
              <th scope="row">{v.blockNumber.toLocaleString()}</th>
              <td>{formatTime(v.timestamp, "MM-DD-YYYY HH:mm:ss")}</td>
              <td>{v.address}</td>
              <td>{v.txnHash}</td>
              <td className={classNames(["text-center"])}>
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => this.props.showTxns(v)}
                >
                  Here's a link
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
