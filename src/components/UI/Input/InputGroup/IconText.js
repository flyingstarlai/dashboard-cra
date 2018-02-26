import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormText } from 'reactstrap'

const iconText = (props) => {
  return (
    <FormGroup className="mb-3">
      <InputGroup>
        <div className="input-group-prepend">
          <span className="input-group-text">
           <i className={props.icon}></i>
          </span>
        </div>
        {props.children}
      </InputGroup>
        <FormText color="danger"> {props.meta.touched && props.meta.error}</FormText>
    </FormGroup>
  );
}

iconText.defaultProps = {};

iconText.propTypes = {};

export default iconText;
