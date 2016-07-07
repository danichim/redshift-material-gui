import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {
  render() {
    return (
      <div>
        <RaisedButton label="Plm"/>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
