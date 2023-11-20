import * as ActionTypes from './ActionTypes.js';
var token = sessionStorage["token"];

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, comment) => (dispatch) => {
  var newComment = {
    dish: dishId,
    rating: rating,
    comment: comment
  }
  return fetch('/comments', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage['token']
    },
    body: JSON.stringify(newComment)
  })
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
  .then(comment => {
    dispatch(addComment(comment))
    console.log(comment)
  })
  .catch(err => {
    console.log(err.message);
    alert("The comment could not get posted!\nError: " + err.message)
  })
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch('/dishes')
    .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          var error = new Error("Error " + response.status + ": " + response.statusText)
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(dishes => {
      dispatch(addDishes(dishes))
    })
    .catch(err => dispatch(dishesFailed(err.message)))
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
})

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
})

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
})

export const fetchComments = () => (dispatch) => {
  return fetch('/comments')
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess
    })
    .then(comments => dispatch(addComments(comments)))
    .catch(err => dispatch(commentsFailed(err.message)))
}

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
})

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch('/promotions')
  .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess
    })
    .then(promos => dispatch(addPromos(promos)))
    .catch(err => dispatch(promosFailed(err.message)))
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
})

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
})

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
})

export const fetchLeaders = () => (dispatch) => {
   dispatch(leadersLoading());

   return fetch('/leaders')
   .then(response => {
       if (response.ok) {
         return response.json()
       } else {
         var error = new Error("Error " + response.status + ": " + response.statusText)
         error.response = response;
         throw error;
       }
     },
     error => {
       var errmess = new Error(error.message);
       throw errmess
     })
     .then(leaders => dispatch(addLeaders(leaders)))
     .catch(err => dispatch(leadersFailed(err.message)))
}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
})

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
})

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
})

export const postFeedback = (info) => (dispatch) => {
  return fetch('/feedback', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
  .then(feedback => {
    dispatch(addFeedback(feedback))
    console.log(feedback)
  })
  .catch(err => {
    console.log(err.message);
    alert("The feedback could not get posted!\nError: " + err.message)
  })
};

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});

export const fetchFavourites = () => (dispatch) => {
  dispatch(favouritesLoading(true));

  return fetch('/favourites', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage['token']
    }
  })
  .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess
    })
    .then(favourites => dispatch(addFavourites(favourites)))
    .catch(err => dispatch(favouritesFailed(err.message)))
}

export const favouritesLoading = () => ({
  type: ActionTypes.FAVOURITES_LOADING,
})

export const favouritesFailed = (errmess) => ({
  type: ActionTypes.FAVOURITES_FAILED,
  payload: errmess
})

export const addFavourites = (favourites) => ({
  type: ActionTypes.ADD_FAVOURITES,
  payload: favourites
})

export const postFavourite = (dishId) => (dispatch) => {
  const token = 'Bearer ' + sessionStorage['token'];
  return fetch('/favourites/' + dishId, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Authorization': token
    },
  })
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
  .then(favourites => {
    console.log(favourites)
    dispatch(addFavourites(favourites))
  })
  .catch(err => {
    console.log(err.message);
    alert("The dish cannot be added to favourites!\nError: " + err.message)
  })
};

export const deleteFavourite = (dishId) => (dispatch) => {
  const token = 'Bearer ' + sessionStorage['token'];
  return fetch('/favourites/' + dishId, {
    method: 'DELETE',
    credentials: 'same-origin',
    headers: {
      'Authorization': token
    },
  })
  .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        var error = new Error("Error " + response.status + ": " + response.statusText)
        error.response = response;
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
  .then(favourites => {
    dispatch(addFavourites(favourites))
  })
  .catch(err => {
    console.log(err.message);
    alert("The dish cannot be removed!\nError: " + err.message)
  })
};

export const loginReq = (cred) => (dispatch) => {
  dispatch(loginRequest());
  return fetch('/users/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cred)
  })
  .then((resp) => {
    console.log(resp)
    if (!resp.ok) {
      var error = new Error("Error " + resp.statusCode + ": " + resp.status + '\n' + resp.err)
      error.response = resp;
      throw error;
    } else {
      return resp.json();
    }
  },
  error => {
    var errmess = new Error(error.message);
    throw errmess
  })
  .then((response) => {
    dispatch(loginSuccess());
    sessionStorage["token"] = response.token;
    sessionStorage["firstname"] = response.user.firstname;
    sessionStorage["lastname"] = response.user.lastname;
  })
  .catch(err => dispatch(loginFailed(err.message)))
}

export const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
})

export const loginFailed = (errmess) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: errmess
})

export const loginSuccess = () => ({
  type: ActionTypes.LOGIN_SUCCESS,
})

export const signupReq = (cred) => (dispatch) => {
  dispatch(signupRequest());
  return fetch('/users/signup', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cred)
  })
  .then((resp) => {
    if (!resp.ok) {
      var error = new Error("Error " + resp.statusCode + ": " + resp.status + '\n' + resp.err)
      error.response = resp;
      throw error;
    } else {
      return resp.json();
    }
  },
  error => {
    var errmess = new Error(error.message);
    throw errmess
  })
  .then((response) => {
    dispatch(signupSuccess());
    sessionStorage["token"] = response.token;
    sessionStorage["user"] = response.user;
  })
  .catch(err => dispatch(signupFailed(err.message)))
}

export const signupRequest = () => ({
  type: ActionTypes.SIGNUP_REQUEST,
})

export const signupFailed = (errmess) => ({
  type: ActionTypes.SIGNUP_FAILED,
  payload: errmess
})

export const signupSuccess = () => ({
  type: ActionTypes.SIGNUP_SUCCESS,
})

/*export const fetchUser = () => {
  return fetch('/users/user', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Authorization: 'Bearer ' + sessionStorage['token']
    }
  })
  .then(resp => {
    if (!resp.ok) {
      var error = new Error("Error " + resp.statusCode + ": " + resp.status + '\n' + resp.err)
      error.response = resp;
      throw error;
    } else {
      return resp.json();
    }
  },
  error => {
    var errmess = new Error(error.message);
    throw errmess
  })
}*/

export const logoutReq = () => (dispatch) => {
  dispatch(logoutRequest())
  sessionStorage["token"] = '';
  sessionStorage["firstname"] = '';
  sessionStorage["lastname"] = '';
  dispatch(logoutSuccess())
}

export const logoutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST,
})

export const logoutFailed = (errmess) => ({
  type: ActionTypes.LOGOUT_FAILED,
  payload: errmess
})

export const logoutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
})
console.log(sessionStorage["token"])
