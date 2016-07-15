import React from 'react';
import Slider from 'material-ui/Slider';


class TemperatureControl extends React.Component {

  state = {
    dayTime: 6500,
    nightTime: 2700
  };

  dayTimeSlider = (e, v) => {
    this.setState({dayTime: v});
    console.log("Changing day time", v);
  }

  nightTimeSlider = (e, v) => {
    this.setState({nightTime: v});
    console.log("Changing night time", v);
  }

  render() {
    return(
      <div>
        <br />
        <p>Day time temperature. Currently set to {this.state.dayTime}</p>
        <Slider
          defaultValue={6500}
          max={6500}
          min={2700}
          onChange={this.dayTimeSlider}
        />
        <p>Night time temperature. Currently set to {this.state.nightTime}</p>
        <Slider
          defaultValue={2700}
          max={6500}
          min={2700}
          onChange={this.nightTimeSlider}
        />
      </div>
    );
  }
}


export default TemperatureControl;
