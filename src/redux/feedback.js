import * as ActionTypes from './ActionTypes.js';

export const Feedback = (state, action) => {
  switch(action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {...state, state.feedback.concat(action.payload)}
    default:
        return state;
  }
}
