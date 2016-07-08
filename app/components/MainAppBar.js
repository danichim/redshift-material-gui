import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const remote = require('electron').remote;


export default class MainAppBar extends React.Component {
  closeWindow() {
    var window = remote.getCurrentWindow();
    window.hide();
  }
  render() {
    return (
      <AppBar
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onClick={this.closeWindow}
        title="Redshift"
      />
    );
  }
}
