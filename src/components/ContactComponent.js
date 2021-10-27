import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Label, Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Form, Control, Errors, } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !(val) || val.length <= len;
const minLength = len => val => !(val) || val.length >= len;
const isNumber =  val => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

  handleSubmit(values) {
    console.log(JSON.stringify(values))
    var feedback = {
      firstname: values.firstname,
      lastname: values.lastname,
      telnum: values.telnum,
      email: values.email,
      agree: values.agree,
      contactType: values.contactType,
      message: values.message,
      date: new Date().toISOString(),
    };
    this.props.postFeedback(feedback)
    console.log(this.props.feedback)
    if (this.props.feedback.firstname !== '') {
      alert(this.props.feedback)
    }
    this.props.resetFeedbackForm();
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb className="col-2">
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
              <i className="fa fa-phone"></i>: +852 1234 5678<br />
              <i className="fa fa-fax"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5> Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your Feedback!</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                  <Control.text model=".firstname" id="firstname" name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(2), maxLength: maxLength(15),
                      }}
                  />
                  <Errors className="text-danger" model=".firstname" show="touched"
                      messages={{
                        required: "Required",
                        maxLength: "Must be 15 characters or less",
                        minLength: "Must be more than 1 character"
                      }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                  <Control.text model=".lastname" id="lastname" name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(2), maxLength: maxLength(15),
                      }}
                       />
                  <Errors className="text-danger" model=".lastname" show="touched"
                      messages={{
                        required: "Required",
                        maxLength: "Must be 15 characters or less",
                        minLength: "Must be more than 1 character"
                      }}
                        />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>E-mail</Label>
                <Col md={10}>
                  <Control.text model=".email" id="email" name="email"
                      placeholder="example@---.com"
                      className="form-control"
                      validators={{
                        required, validEmail
                      }}
                       />
                   <Errors className="text-danger" model=".email" show="touched"
                       messages={{
                         required: "Required",
                         vaildEmail: "Must be a valid E-mail",
                       }}
                         />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                <Col md={10}>
                  <Control.text model=".telnum" name="telnum"
                      placeholder="123456789"
                      validators={{
                        required, isNumber
                      }}
                       />
                  <Errors className="text-danger" model=".email" show="touched"
                      messages={{
                       required: "Required",
                       vaildEmail: "Must be a valid E-mail",
                      }}
                       />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:6, offset:2}}>
                  <div>
                    <Label check><strong>May we contact you?</strong>
                      <Control.checkbox model=".agree" name="agree"
                          className="form-check-input"
                           />
                    </Label>
                  </div>
                </Col>
                <Col md={{size: 3, offset: 1}}>
                  <Control.select model=".contactType" name="contactType"
                      className="form-control">
                    <option>E-mail</option>
                    <option>Tel.</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Control.textarea model=".message" id="message" name="message"
                      rows="12"
                      className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:10, offset:2}}>
                  <Button type="submit" color="primary">Send Feedback</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

export default Contact;
