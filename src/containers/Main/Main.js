import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Layout/Header/';
import Sidebar from '../../components/Layout/Sidebar/';
import Breadcrumb from '../../components/Layout/Breadcrumb/';
import Aside from '../../components/Layout/Aside/';
import Footer from '../../components/Layout/Footer/';

import Dashboard from '../../views/Dashboard/';
import BasicForms from '../../views/Forms/BasicForms/'
import AdvancedForms from '../../views/Forms/AdvancedForms'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/forms/basic" name="Basic Forms" component={BasicForms} />
                <Route path="/forms/advanced" name="Advanced Forms" component={AdvancedForms} />
                <Redirect from="/" to="/dashboard"/>
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

export default Full;
