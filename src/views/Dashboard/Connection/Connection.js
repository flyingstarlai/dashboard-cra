import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, Button, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const connection = props => (
  <Col xs="12" sm="4">
    <Card className="text-white bg-info">
      <CardBody>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{props.connection.name}</td>
            </tr>
            <tr>
              <td>Profile:</td>
              <td>{props.connection.profile}</td>
            </tr>
            <tr>
              <td>Host:</td>
              <td>{props.connection.host}</td>
            </tr>
            <tr>
              <td>Port:</td>
              <td>{props.connection.port}</td>
            </tr>
            <tr>
              <td>DB:</td>
              <td>{props.connection.database}</td>
            </tr>
          </tbody>
        </table>
        <Row className="mt-2">
          <Col xs="12" className="text-center">
            <Button onClick={() => props.history.push('/forms/basic')} color="light" className="px-3 mr-2" >Manage</Button>
            <Button color="light" className="px-3 mr-2">Edit</Button>
            <Button color="secondary" className="px-3">Delete</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

connection.defaultProps = {};

connection.propTypes = {};

export default withRouter(connection);
