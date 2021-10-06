import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promos: state.promotions,
    leaders: state.leaders,
    feedback: state.feedback
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (info) => dispatch(postFeedback(info)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback'))
  }
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      console.log(this.props.promos)
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

    const DishWithId = ({match}) => {
      return(
        <DishDetail
            dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
        />
      )
    }

    return(
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
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
