import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';


export default class TemperatureControl extends Component {

  static propTypes = {
    dayTimeSlider: PropTypes.func.isRequired,
    nightTimeSlider: PropTypes.func.isRequired
  }

  // state = {
  //   dayTime: 6500,
  //   nightTime: 2700
  // }; 

  // dayTimeSlider = (e, v) => {
  //   this.setState({ dayTime: v });
  // }
  // 
  // nightTimeSlider = (e, v) => {
  //   this.setState({ nightTime: v });
  // }

  render() {
    const { dayTimeSlider, nightTimeSlider } = this.props;

    return (
      <div>
        <br />
        <Slider
          defaultValue={6500}
          max={6500}
          min={2700}
          onChange={dayTimeSlider}
        />
        <Slider
          defaultValue={2700}
          max={6500}
          min={2700}
          onChange={nightTimeSlider}
        />
      </div>
    );
  }
}