import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import Spinner from '../../components/UI/Spinner/Spinner';
import ConnectionForm from './ConnectionForm/ConnectionForm';
import Connection from './Connection/Connection';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {
  componentDidMount() {
    this.props.onConnectionList();
  }
  connectionHandler = (values) => {
    if (!this.props.isEdit) this.props.onConnectionAdd(values);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <ConnectionForm
            connectionSubmit={this.connectionHandler}
            errorMessage={this.props.submitError}
          />
          <Col xs="12" lg="8">
            { this.props.listError ? <Row><Col xs="12"><Alert color="danger">{this.props.listError}</Alert></Col></Row> : null }
            <Row>
              { this.props.listLoading ? <Spinner /> : this.props.connections.map(connection => <Connection key={connection.name} connection={connection} />)}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  submitLoading: state.connection.submitLoading,
  submitError: state.connection.submitError,
  listLoading: state.connection.listLoading,
  listError: state.connection.listError,
  isEdit: state.connection.isEdit,
  connections: state.connection.connections,
});

const mapDispatchToProps = dispatch => ({
  onConnectionList: () => dispatch(actions.connectionList()),
  onConnectionAdd: values => dispatch(actions.connectionAdd(values)),
  onConnectionUpdate: values => dispatch(actions.connectionUpdate(values)),
  onConnectionToggleEdit: () => dispatch(actions.connectionToggleEdit),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
