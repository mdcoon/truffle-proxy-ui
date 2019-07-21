import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

const Interactions = props => {
  return (
    <div className={classNames(["text-center"], ["container"], ["mt-5"])}>
      <p>
        Use these functions to interact with Metamask to simulate proxy contract
        deployment.
      </p>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Visit</CardTitle>
            <CardText>Here’s a visit description here.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Increment</CardTitle>
            <CardText>Here’s an increment description here</CardText>
            <Button>Increment</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Interactions;
