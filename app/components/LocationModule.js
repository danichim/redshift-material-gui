import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LocationModule extends React.Component {
  state = {
    open: false,
    lat: 0,
    long: 0
  };
  constructor(props) {
    super(props);
    let coords = {};
    navigator.geolocation.getCurrentPosition(geo => {
      this.setState({
        lat: geo.coords.latitude,
        long: geo.coords.longitude
      })
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Set Location" onTouchTap={this.handleOpen} />
        <Dialog
          title="Set Location"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <p>We detected that your coordinates are:</p>
        <p>Latitude: {this.state.lat.toFixed(2)}</p>
        <p>Longitude: {this.state.long.toFixed(2)}</p>
        </Dialog>
      </div>
    );
  }
}
