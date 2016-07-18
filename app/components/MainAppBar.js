import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import styles from './MainAppBar.css';
import LocationModule from '../components/LocationModule'
import { remote } from 'electron'

const appWindow = remote.getCurrentWindow();

export default class MainAppBar extends React.Component {
  closeWindow() {
    appWindow.hide();
  }
  render() {
    return (
      <AppBar
        className={styles.appbar}
        iconElementLeft={
          <IconButton
            onClick={this.closeWindow}
            className={styles.button}
          >
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
