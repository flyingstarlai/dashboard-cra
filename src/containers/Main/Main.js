import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import * as actions from '../../store/actions/index';
import Header from '../../components/Layout/Header/';
import Sidebar from '../../components/Layout/Sidebar/';
import Breadcrumb from '../../components/Layout/Breadcrumb/';
import Aside from '../../components/Layout/Aside/';
import Footer from '../../components/Layout/Footer/';

import Dashboard from '../../views/Dashboard/';
import BasicForms from '../../views/Forms/BasicForms/';
import AdvancedForms from '../../views/Forms/AdvancedForms';

class Main extends Component {
  componentDidMount() {
    // this.props.onTryAutoLogin();
  }

  render() {
    console.log(this.props.isAuthenticated);
    if (!this.props.isAuthenticated) return <Redirect to="/login" />;

    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/forms/basic" name="Basic Forms" component={BasicForms} />
                <Route path="/forms/advanced" name="Advanced Forms" component={AdvancedForms} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token != null,
});

const mapDispatchToProps = dispatch => ({
  onTryAutoLogin: () => dispatch(actions.authCheckState()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
