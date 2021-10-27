import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Favourites from './FavouritesComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders,
  fetchFavourites, postFavourite, deleteFavourite, postFeedback, loginReq,
  signupReq, logoutReq } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promos: state.promotions,
    leaders: state.leaders,
    feedback: state.feedback,
    favourites: state.favourites,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
    postFeedback: (info) => dispatch(postFeedback(info)),
    loginReq: (cred) => dispatch(loginReq(cred)),
    signupReq: (cred) => dispatch(signupReq(cred)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    fetchFavourites: () => dispatch(fetchFavourites()),
    postFavourite: (id) => dispatch(postFavourite(id)),
    deleteFavourite: (id) => dispatch(deleteFavourite(id)),
    logoutReq: () => dispatch(logoutReq())
  }
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
    if (sessionStorage['token']) {
      this.props.fetchFavourites();
    }
  }

  render() {
    const HomePage = () => {
      return(
        <Home
            dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
            dishLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            promotion={this.props.promos.promos.filter((promo) => promo.featured)[0]}
            promotionLoading={this.props.promos.isLoading}
            promotionsErrMess={this.props.promos.errMess}
            leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
            leaderLoading={this.props.leaders.isLoading}
            leadersErrMess={this.props.leaders.errMess}
        />
      )
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        sessionStorage['token']
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    const DishWithId = ({match}) => {
      return(
        this.props.favourites.favourites
        ?
        <DishDetail
            dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId, 10)[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId, 10)}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            favourite={this.props.favourites.favourites.some((dish) => dish._id === match.params.dishId)}
            postFavourite={this.props.postFavourite}
        />
        :
        <DishDetail
            dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId, 10)[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === match.params.dishId, 10)}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            favourite={false}
            postFavourite={this.props.postFavourite}
        />
      )
    }

    return(
      <div>
        <Header loginReq={this.props.loginReq} signupReq={this.props.signupReq}
          user={this.props.user} logoutReq={this.props.logoutReq} />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <PrivateRoute exact path="/profile/favourites" component={() => <Favourites favourites={this.props.favourites} deleteFavourite={this.props.deleteFavourite} />} />
              <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} feedback={this.props.feedback} />} />
              <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
