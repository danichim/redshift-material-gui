import { TOGGLE_REDSHIFT, NIGHTTIME_SLIDER, DAYTIME_SLIDER } from '../constants/ActionTypes'
import { toggleRedshift } from './ipc'

const initialState =
  {
    toggleRedshift: true,
    dayTimeSlider: 98,
    nightTimeSlider: 1
  }

export default function todos(state = initialState, action) {
  switch (action.type) {

    case TOGGLE_REDSHIFT:
      let toggle = !state.toggleRedshift;
      toggleRedshift(toggle);
      return Object.assign({}, state, {
        toggleRedshift: toggle,
      });
    case NIGHTTIME_SLIDER:
      console.log("DAY");
      break;
    case DAYTIME_SLIDER:
      console.log("NIGHT");
      break;
    default:
      return state
  }
}
