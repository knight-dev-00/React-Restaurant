import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Col, Label, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Fade, FadeTransform, Stagger } from 'react-animation-components';

const required = val => val && val.length;
const maxLength = len => val => !(val) || val.length <= len;
const minLength = len => val => !(val) || val.length >= len;

function RenderDish(props) {
  return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <FadeTransform in
            transformProps={{
              exitTransform: 'scale(.5) translateY(-50%)'
            }}>
            <Card>
              <CardImg top src={'https://' + window.location.hostname + '/' + props.dish.image} alt={props.dish.name} />
              <CardImgOverlay>
                  <Button outline color="primary" onClick={() => props.favourite ? console.log('Already favourite') : props.postFavourite(props.dish._id)}>
                      {props.favourite ?
                          <span className="fa fa-heart"></span>
                          :
                          <span className="fa fa-heart-o"></span>
                      }
                  </Button>
              </CardImgOverlay>
              <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>
            </Card>
          </FadeTransform>
        </div>
        <RenderComments
          dish={props.dish}
          errMess={props.errMess}
          comments={props.comments}
          postComment={props.postComment}
        />
      </div>
  )
}

class RenderComments extends Component {
  comments = this.props.comments.map((comment) => {
    console.log(comment)
    return(
      <Fade in>
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>{comment.author.firstname + ' ' + comment.createdAt}</p>
        </li>
      </Fade>
    )
  });
  render() {
    console.log(this.props)
    console.log(this.comments);
    if (this.props.errMess) {
      return(
        <div className="col-12 col-md-5 m-1">
          <h4>{this.props.errMess}</h4>
        </div>
      )
    } else {
      return(
        <div className="col-12 col-md-5 m-1">
          <h3>Comments</h3>
          <ul className="list-unstyled">
            <Stagger in>
              {this.comments}
            </Stagger>
          </ul>
          <CommentForm
            postComment={this.props.postComment}
            dish={this.props.dish}
          />
        </div>
      )
    }
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleSubmit(values) {
    console.log(values)
    this.props.postComment(this.props.dish._id, Number(values.rating), values.comment)
    this.toggleModal();
  }
  render() {
    return(
      <>
        <Button outline onClick={this.toggleModal}>Send Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Send Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col md={10}>
                  <Control.select model=".rating" name="rating" id="rating"
                      className="form-control">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={2}>Comment</Label>
                <Col md={10}>
                  <Control.textarea model=".comment" name="comment" rows="6"
                      id="comment" className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Button type="submit" value="submit" color="primary">Send</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

function DishDetail(props) {
  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  } else if (props.errMess) {
    <div className="container">
      <div className="row">
        <h4>{props.errMess}</h4>
      </div>
    </div>
  } else
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb className="col-2">
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <RenderDish
        dish={props.dish}
        comments={props.comments}
        errMess={props.commentsErrMess}
        postComment={props.postComment}
        favourite={props.favourite}
        postFavourite={props.postFavourite}
      />;
    </div>
  )
}


export default DishDetail;
