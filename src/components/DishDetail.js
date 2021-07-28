import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props)
  }

  renderDish() {
    if (this.props.dish !=null) {
      console.log(this.props.dish.comments)
      const comments = this.props.dish.comments.map((comment) => {
        return(
          <Media body key={comment.id}>
            <p>{comment.comment}</p>
            <p>{comment.author + ' ' + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </Media>
        )
      });
      console.log(comments)
      return(
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h3>Comments</h3>
              <Media>
                {comments}
              </Media>
            </div>
          </div>
      )
    } else {
      <div></div>
    }
  }

  render() {
    return(
      <div className="container">
        {this.renderDish()}
      </div>
    )
  }


}

export default DishDetail;
