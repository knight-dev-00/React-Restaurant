import * as ActionTypes from './ActionTypes.js';


export const User = (state = {
    signing: null,
    signupFailed: null,
    logging: null,
    logged: null,
    loginFailed: null,
    firstname: sessionStorage['firstname'],
    lastname: sessionStorage['lastname']
  }, action) => {
  switch(action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {...state,
        signing: null,
        signupFailed: null,
        logging: true,
        logged: null,
        loginFailed: null
      }
    case ActionTypes.LOGIN_SUCCESS:
      return {...state,
        signing: null,
        signupFailed: null,
        logging: null,
        logged: true,
        loginFailed: null
      }
    case ActionTypes.LOGIN_FAILED:
      return {...state,
        signing: null,
        signupFailed: null,
        logging: null,
        logged: null,
        loginFailed: action.payload
      }
    case ActionTypes.SIGNUP_REQUEST:
      return {...state,
        signing: true,
        signupFailed: null,
        logging: null,
        logged: null,
        loginFailed: null
      }
    case ActionTypes.SIGNUP_SUCCESS:
      return {...state,
        signing: null,
        signupFailed: null,
        logging: null,
        logged: true,
        loginFailed: null
      }
    case ActionTypes.SIGNUP_FAILED:
      return {...state,
        signing: null,
        signupFailed: action.payload,
        logging: null,
        logged: null,
        loginFailed: null
      }
    default:
        return state;
  }
}
