import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";

export default class Settings extends React.Component {
  render() {
    const { proxyAddress } = this.props;

    return (
      <div className={classNames(["container"], ["text-center"])}>
        <Form>
          <FormGroup row>
            <Label for="contractAddress" sm={2}>
              Please enter your contract address:
            </Label>
            <Col sm={5}>
              <Input
                type="textarea"
                name="text"
                id="contractAddress"
                value={proxyAddress}
                onChange={e => this.props.updateAddress(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup
            className={classNames(["container"], ["text-left"])}
            check
            row
          >
            <Col sm={{ size: 10, offset: 2 }}>
              <Button size="lg" color="success">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
