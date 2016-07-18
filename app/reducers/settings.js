import {
  TOGGLE_REDSHIFT,
  NIGHTTIME_SLIDER,
  DAYTIME_SLIDER
} from '../constants/ActionTypes';

import {
  toggleRedshift,
  nightTimeSlider,
  dayTimeSlider
} from './ipc';

const initialState = {
  toggleRedshift: true,
  dayTimeSlider: 98,
  nightTimeSlider: 1
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REDSHIFT:
      const toggle = !state.toggleRedshift;
      // TODO: I'll have to remember if we are in day or night time. Interesting cases.
      // Location service first.
      toggleRedshift(toggle);
      return Object.assign({}, state, {
        toggleRedshift: toggle,
      });

    case DAYTIME_SLIDER:
      dayTimeSlider(action.value);
      return Object.assign({}, state, {
        dayTimeSlider: action.value,
      });

    case NIGHTTIME_SLIDER:
      nightTimeSlider(action.value);
      return Object.assign({}, state, {
        nightTimeSlider: action.value,
      });

    default:
      return state;
  }
}
