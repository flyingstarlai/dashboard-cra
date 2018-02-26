import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardHeader, CardBody, Button, Alert } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import LaddaButton from '../../../components/UI/Button/LoadingButton';
import InputField from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index';
import * as validationTypes from '../../../shared/utility';

const connectionForm = props => (
  <Col xs="12" sm="6" lg="4">
    <Card>
      <CardHeader>
        <strong>New Connection</strong>
      </CardHeader>
      <CardBody>
        { props.errorMessage ? <Alert color="danger">{props.errorMessage}</Alert> : null }
        <form onSubmit={props.handleSubmit((values) => { props.connectionSubmit(values); props.reset(); })}>
          <Field
            key="name"
            elementType="text"
            groupType="two-lines"
            component={InputField}
            name="name"
            placeholder="Enter name"
            label="Name"
            validate={validationTypes.REQUIRED}
          />
          <Field
            key="profile"
            elementType="select"
            groupType="two-lines"
            component={InputField}
            name="profile"
            placeholder="Profile"
            label="Profile"
            validate={[validationTypes.REQUIRED, validationTypes.PLEASE_SELECT]}
          />
          <Field
            key="host"
            elementType="text"
            groupType="two-lines"
            component={InputField}
            name="host"
            placeholder="Enter IP Host"
            label="Host"
            validate={validationTypes.REQUIRED}
          />
          <Field
            key="port"
            elementType="text"
            groupType="two-lines"
            component={InputField}
            name="port"
            placeholder="Enter Port"
            label="Port"
          />
          <Field
            key="password"
            elementType="text"
            groupType="two-lines"
            component={InputField}
            name="password"
            placeholder="Enter Password"
            label="Password"
            validate={validationTypes.REQUIRED}
          />
          <Field
            key="database"
            elementType="text"
            groupType="two-lines"
            component={InputField}
            name="database"
            placeholder="Enter Database"
            label="Database"
            validate={validationTypes.REQUIRED}
          />
          <Row>
            <Col xs="12" className="text-right">
              <Button color="secondary" className="px-3 mr-2" onClick={() => props.reset()}>Reset</Button>
              <LaddaButton
                loading={props.loading}
                styles="btn btn-primary btn-ladda"
                label="Submit"
                color="red"
              />
            </Col>
          </Row>
        </form>
      </CardBody>
    </Card>
  </Col>
);

connectionForm.defaultProps = {};

connectionForm.propTypes = {};

export default reduxForm({ form: 'connectionForm' })(connectionForm);
