import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Label, FormGroup, FormText } from 'reactstrap';

const twoLines = props => (
  <Row>
    <Col>
      <FormGroup>
        <Label>{props.label}</Label>
        {props.children}
      </FormGroup>
      <FormText color="danger"> {props.meta.touched && props.meta.error}</FormText>
    </Col>
  </Row>
);

twoLines.defaultProps = {};

twoLines.propTypes = {};

export default twoLines;
