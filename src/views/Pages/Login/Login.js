import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, Alert } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../../store/actions/index';
import InputField from '../../../components/UI/Input/Input';
import * as validationTypes from '../../../shared/utility';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Login extends Component {
  componentDidMount() {
    // this.props.onTryAutoLogin();
  }

  render() {
    let errorMessage = null;
    if (this.props.authError) errorMessage = (<Alert color="danger">{this.props.authError}</Alert>);

    let authRedirect = null;
    if (this.props.isAuthenticated) authRedirect = <Redirect to="/" />;

    let form = (<form onSubmit={this.props.handleSubmit(values => this.props.onAuth(values))}>
      <Field
        key="username"
        elementType="text"
        groupType="icon-text"
        icon="icon-user"
        component={InputField}
        name="username"
        placeholder="Username"
        validate={validationTypes.REQUIRED}
      />
      <Field
        key="password"
        elementType="password"
        groupType="icon-text"
        icon="icon-lock"
        component={InputField}
        name="password"
        placeholder="Password"
        validate={validationTypes.REQUIRED}
      />
      <Row>
        <Col xs="6">
          <Button color="primary" className="px-4">Login</Button>
        </Col>
        <Col xs="6" className="text-right">
          <Button color="link" className="px-0">Forgot password?</Button>
        </Col>
      </Row>
    </form>);
    if (this.props.loading) form = <Spinner />;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {authRedirect}
                    {errorMessage}
                    {form}
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: `${44}%` }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  authError: state.auth.error,
  isAuthenticated: state.auth.token != null,
});

const mapDispatchToProps = dispatch => ({
  onAuth: values => dispatch(actions.auth(values)),
});
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'loginForm',
})(Login));
