import * as types from '../constants/ActionTypes';

export function toggleRedshift() {
  return { type: types.TOGGLE_REDSHIFT };
}

export function dayTimeSlider(event, value) {
  return {
      type: types.DAYTIME_SLIDER,
      value
  };
}

export function nightTimeSlider(event, value) {
  return {
      type: types.NIGHTTIME_SLIDER,
      value
  };
}
