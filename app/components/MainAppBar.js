import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import styles from './MainAppBar.css';
import LocationModule from '../components/LocationModule'


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
        iconElementLeft={
          <IconButton 
            onClick={this.closeWindow}
            className={styles.button}>
            <NavigationClose />
          </IconButton>
        }
          
        iconElementRight={
          <LocationModule className={styles.appbar} />
        }
        title="Redshift"
      />
    );
  }
}