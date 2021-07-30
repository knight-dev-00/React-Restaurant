import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, FormFeedback, Input, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      agree: false,
      email: '',
      contactType: 'Tel.',
      message: '',
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    }
  }

  handleBlur(event) {
    this.setState(
      {touched: { ...this.state.touched, [event.target.name]: true }}
    )
  }

  validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

  handleChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    console.log(this.state)
    alert(this.state)
    event.preventDefault();
  }

  render() {
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
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
            <Form onSubmit={(evt) => this.handleSubmit(evt)}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                  <Input type="text" id="firstname" name="firstname"
                      placeholder="First Name" value={this.state.firstname}
                      valid={errors.firstname === '' && this.state.touched.firstname}
                      invalid={errors.firstname !== '' && this.state.touched.firstname}
                      onBlur={(evt) => this.handleBlur(evt)}
                      onChange={(evt) => this.handleChange(evt)} />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                  <Input type="text" id="lastname" name="lastname"
                      placeholder="Last Name" value={this.state.lastname}
                      valid={errors.lastname === '' && this.state.touched.lastname}
                      invalid={errors.lastname !== '' && this.state.touched.lastname}
                      onBlur={(evt) => this.handleBlur(evt)}
                      onChange={(evt) => this.handleChange(evt)} />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>E-mail</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email"
                      placeholder="example@---.com" value={this.state.email}
                      valid={errors.email === '' && this.state.touched.email}
                      invalid={errors.email !== '' && this.state.touched.email}
                      onBlur={(evt) => this.handleBlur(evt)}
                      onChange={(evt) => this.handleChange(evt)} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                <Col md={10}>
                  <Input type="text" id="telnum" name="telnum"
                      placeholder="123456789" value={this.state.telnum}
                      valid={errors.telnum === '' && this.state.touched.telnum}
                      invalid={errors.telnum !== '' && this.state.touched.telnum}
                      onBlur={(evt) => this.handleBlur(evt)}
                      onChange={(evt) => this.handleChange(evt)} />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size:6, offset:2}}>
                  <FormGroup check>
                    <Label check><strong>May we contact you?</strong>
                      <Input type="checkbox" name="agree"
                          checked={this.state.agree}
                          onChange={(evt) => this.handleChange(evt)} />
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{size:3, offset:1}}>
                  <Input type="select" name="contactType"
                      value={this.state.contactType}
                      onChange={(evt) => this.handleChange(evt)}>
                    <option>E-mail</option>
                    <option>Tel.</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md="10">
                  <Input type="textarea" id="message" name="message"
                      placeholder="Your Feedback" value={this.state.message}
                      rows="12" onChange={(evt) => this.handleChange(evt)} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size:10, offset:2}}>
                  <button type="submit" color="primary"> Send Feedback</button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }

}

export default Contact;
