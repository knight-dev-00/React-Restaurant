import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import React, { Component } from 'react';
import { Dishes } from '../shared/dishes';
import { Comments } from '../shared/comments';
import { Promotions } from '../shared/promotions';
import { Leaders } from '../shared/leaders';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }
  }

  render() {
    const HomePage = () => {
      console.log(this.state)
      return(
        <Home
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail
            dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      )
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/contactus" component={Contact} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;
