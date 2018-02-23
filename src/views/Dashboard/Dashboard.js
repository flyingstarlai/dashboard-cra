import React, { Component } from 'react';
import styles from './Dashboard.module.css';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <span className={styles.pred}>
          Hello World
        </span>
      </div>
    )
  }
}

export default Dashboard;
