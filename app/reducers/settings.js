import { TOGGLE_REDSHIFT } from '../constants/ActionTypes'
import { toggleRedshift } from './ipc'

const initialState =
  {
    toggleRedshift: true
  }

export default function todos(state = initialState, action) {
  switch (action.type) {

    case TOGGLE_REDSHIFT:
      let toggle = !state.toggleRedshift;
      toggleRedshift(toggle);
      return Object.assign({}, state, {
        toggleRedshift: toggle,
      });
    default:
      return state
  }
}
