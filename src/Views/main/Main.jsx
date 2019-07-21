import React from 'react';
import {
    Row,
    Col
} from 'reactstrap'
import cn from 'classnames';
import * as align from 'Constants/alignments'

export default class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col md="10">
                    Main display
                </Col>
            </Row>
        )
    }
}