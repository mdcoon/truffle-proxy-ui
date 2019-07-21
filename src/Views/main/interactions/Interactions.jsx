import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";
import styles from "./interactions.module.scss";

const Interactions = props => {
  return (
    <div className={classNames(["text-center"], ["container"], ["mt-5"])}>
      <p>
        Use these functions to interact with Metamask to interact with the
        deployed proxy contract.
      </p>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Visit</CardTitle>
            <CardText>Sign the guestbook.</CardText>
            <Button color="info" onClick={props.contractVisit}>
              Visit
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Increment</CardTitle>
            <CardText>Increment account.</CardText>
            <Button color="success" onClick={props.contractIncrement}>
              Increment
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Interactions;
