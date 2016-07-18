import * as types from '../constants/ActionTypes'

export function toggleRedshift() {
  return { type: types.TOGGLE_REDSHIFT }
}

export function dayTimeSlider() {
  return { type: types.DAYTIME_SLIDER }
}

export function nightTimeSlider() {
  return { type: types.NIGHTTIME_SLIDER }
}