import * as ActionTypes from './ActionTypes.js';

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  var newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString();
  return fetch('http://localhost:3001/dishes/comments', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
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

  return fetch('http://localhost:3001/dishes')
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
      console.log(dishes)
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
  return fetch('http://localhost:3001/dishes/comments')
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

  return fetch('http://localhost:3001/promos')
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
   dispatch(leadersLoading(true));

   return fetch('http://localhost:3001/leaders')
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
  return fetch('http://localhost:3001/feedback', {
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
    alert("The fedback could not get posted!\nError: " + err.message)
  })
};

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});
