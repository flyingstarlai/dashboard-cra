import React from 'react';
import PropTypes from 'prop-types';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';

import 'ladda/dist/ladda-themeless.min.css';

const loadingButton = props => (
  <LaddaButton
    className={props.styles}
    loading={props.loading}
    data-color={props.color}
    data-style={EXPAND_RIGHT}
  >
    {props.label}
  </LaddaButton>
);

loadingButton.defaultProps = {};

loadingButton.propTypes = {};

export default loadingButton;
