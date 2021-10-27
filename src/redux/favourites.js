import * as ActionTypes from './ActionTypes.js';

export const Favourites = (state = {
    isLoading: true,
    errMess: null,
    favourites: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_FAVOURITES:
      return {...state,
        isLoading: false,
        errMess: null,
        favourites: action.payload
      }
    case ActionTypes.FAVOURITES_FAILED:
      return {...state,
        isLoading: false,
        errMess: action.payload,
        favourites: []
      }
    case ActionTypes.FAVOURITES_LOADING:
      return {...state,
        isLoading: true,
        errMess: null,
        favourites: []
      }
    default:
        return state;
  }
}
