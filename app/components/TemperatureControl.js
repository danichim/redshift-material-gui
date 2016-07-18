import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';


export default class TemperatureControl extends Component {

  static propTypes = {
    dayTimeSlider: PropTypes.func.isRequired,
    nightTimeSlider: PropTypes.func.isRequired
  }

  render() {
    const { dayTimeSlider, nightTimeSlider } = this.props;
    return (
      <div>
        <br />
        <Slider
          defaultValue={6500}
          max={6500}
          min={2700}
          step={1}
          onChange={dayTimeSlider}
        />
        <Slider
          defaultValue={2700}
          max={6500}
          min={2700}
          step={1}
          onChange={nightTimeSlider}
        />
      </div>
    );
  }
}
