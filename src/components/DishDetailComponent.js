import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

function renderDish(dish) {
  if (dish !=null) {
    const comments = dish.comments.map((comment) => {
      return(
        <Media body key={comment.id}>
          <p>{comment.comment}</p>
          <p>{comment.author + ' ' + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
        </Media>
      )
    });
    return(
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
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

function DishDetail(props) {
  return(
    <div className="container">
      {renderDish(props.dish)};
    </div>
  )
}


export default DishDetail;
