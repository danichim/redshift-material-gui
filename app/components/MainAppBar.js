import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import styles from './MainAppBar.css';


const remote = require('electron').remote;


export default class MainAppBar extends React.Component {
  closeWindow() {
    var window = remote.getCurrentWindow();
    window.hide();
  }
  render() {
    return (
      <AppBar
        className={styles.appbar}
        iconElementLeft={<IconButton className={styles.button}><NavigationClose /></IconButton>}
        onClick={this.closeWindow}
        title="Redshift"
      />
    );
  }
}
