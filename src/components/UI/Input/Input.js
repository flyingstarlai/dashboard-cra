import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import IconText from './InputGroup/IconText';
import TwoLines from './InputGroup/TwoLines';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('text'):
      inputElement = (<Input
        type="text"
        placeholder={props.placeholder}
        {...props.input}
      />);
      break;
    case ('password'):
      inputElement = (<Input
        type="password"
        placeholder={props.placeholder}
        {...props.input}
      />);
      break;
    case ('select'):
      inputElement = (<Input type="select" value="MSSQL" {...props.input}>
        <option value="default">Please Select</option>
        <option value="MYSQL">MYSQL</option>
        <option value="MSSQL">MSSQL</option>
                      </Input>);
      break;
    default:
      inputElement = (<Input
        type="text"
        placeholder={props.placeholder}
        {...props.input}
      />);
  }

  switch (props.groupType) {
    case ('icon-text'):
      return <IconText {...props}> {inputElement} </IconText>;
    case ('two-lines'):
      return <TwoLines {...props}> {inputElement} </TwoLines>;
    default:
      return <IconText {...props}> {inputElement} </IconText>;
  }
};


export default input;
