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
    return (
      <div className={classNames(["container"], ["text-center"], ["mt-5"])}>
        <Form>
          <FormGroup row>
            <Label for="contractAddress" sm={2}>
              Please enter your contract address:
            </Label>
            <Col sm={5}>
              <Input type="textarea" name="text" id="contractAddress" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
