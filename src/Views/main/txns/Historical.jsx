import React from "react";
import { Row, Col } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";
import HistoricalStorage from "./HistoricalStorage.jsx";
import HistoricalTransactions from "./HistoricalTransactions.jsx";

export default class HistoricalData extends React.Component {
  render() {
    return (
      <div>
        <div className={classNames(["row"])}>
          <div className={classNames(["col-12"])}>
            <HistoricalTransactions {...this.props} />
          </div>

        </div>
      </div>
    );
  }
}
