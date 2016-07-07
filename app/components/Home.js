import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import RaisedButton from 'material-ui/RaisedButton';
import MainAppBar from './MainAppBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MainAppBar />
        <h1>Hello main view</h1>
      </div>
    );
  }
}
