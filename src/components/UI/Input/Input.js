import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap'
import IconText from './InputGroup/IconText'

const input = (props) => {
  let inputElement = null;

  switch(props.elementType) {
    case('text'):
      inputElement = <Input
        type='text'
        placeholder={props.placeholder}
        {...props.input} />;
      break;
    case('password'):
      inputElement = <Input
        type='password'
        placeholder={props.placeholder}
        {...props.input} />;
      break;
    default:
      inputElement = <Input
        type='text'
        placeholder={props.placeholder}
        {...props.input}
      />
  }

  switch(props.groupType) {
    case('icon-text'):
      return <IconText {...props}> {inputElement} </IconText>
    default:
      return <IconText {...props}> {inputElement} </IconText>
  }
}


export default input;
