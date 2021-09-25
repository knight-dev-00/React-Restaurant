import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Row, Col, Label, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = val => val && val.length;
const maxLength = len => val => !(val) || val.length <= len;
const minLength = len => val => !(val) || val.length >= len;

class RenderDish extends Component {
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
    console.log(this.props)
  }

  handleSubmit(values) {
    console.log(values)
    this.props.addComment(this.props.dish.id, values.rating, values.name, values.comment)
    console.log([this.props.dish.id, values.rating, values.name, values.comment])
    this.toggleModal();
  }
  comments = this.props.comments.map((comment) => {
    return(
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>{comment.author + ' ' + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
      </li>
    )
  });
  render() {
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
            <ul className="list-unstyled">
              {this.comments}
            </ul>
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
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                      <Control.text model=".name" name="name" id="name"
                          className="form-control"
                          validators={{
                            required, maxLength: maxLength(20), minLength: minLength(2)
                          }}/>
                      <Errors className="text-danger" model=".name" show="touched"
                          messages={{
                            required: "Required",
                            maxLength: "Must be 15 characters or less",
                            minLength: "Must be more than 1 character"
                          }}
                      />
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
          </div>
        </div>
    )
  }
}

function DishDetail (props) {
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <RenderDish
        dish={props.dish}
        comments={props.comments}
        addComment={props.addComment}
      />;
    </div>
  )
}


export default DishDetail;
