import React from "react";
import { Row, Col, Table, Button } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";
import StorageSummary from "Components/StorageSummary/StorageSummary";
import styles from "../main.module.scss";

export default class HistoricalStorage extends React.Component {
  render() {
    const { txns } = this.props;

    return (
      <Table hover>
        <thead>
          <tr>
            <th className={classNames([styles.table_header])}>Block #</th>
            <th className={classNames([styles.table_header])}>Function</th>
            <th className={classNames([styles.table_header])}>To Addr</th>
            <th className={classNames([styles.table_header])}>
              Transaction Hash
            </th>
            <th className={classNames([styles.table_header])}>Status</th>
            <th className={classNames([styles.table_header])}>Memory</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
          {txns.map((t, i) => (
            <tr key={i}>
              <th scope="row">{t.blockNumber.toLocaleString()}</th>
              <td>{t.fn ? t.fn : "unknown"}</td>
              <td>{t.receipt.to ? t.receipt.to : "none"}</td>
              <td>{t.hash.substring(0, 20) + "..."}</td>
              <td>{t.receipt.status ? "SUCCESS" : "FAIL"}</td>
              <td>
                <StorageSummary />
              </td>
            </tr>
          ))}
=======
          {
            txns.map((t, i)=>(
              <tr key={i}>
                <th scope="row">{t.blockNumber.toLocaleString()}</th>
                <td>{t.fn?t.fn:'unknown'}</td>
                <td>{t.receipt.to?t.receipt.to:'none'}</td>
                <td>{t.hash.substring(0, 20) + '...'}</td>
                <td>{t.receipt.status?"SUCCESS":"FAIL"}</td>
                <td><StorageSummary transaction={t} /></td>
              </tr>
            ))
          }

>>>>>>> 00cb967730c3141a51f9f55f89501398acbb41f1
        </tbody>
      </Table>
    );
  }
}
