import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Stagger, Fade } from 'react-animation-components';

const RenderLeader = (props) => {
  if (props.leaders.isLoading) {
    return(
      <Loading />
    )
  } else if (props.leaders.errMess) {
    return(
      <h4>{props.leaders.errMess}</h4>
    )
  } else {
    const leaders = props.leaders.leaders.map((leader) => {
      return(
        <div key={leader.id} className="row">
          <Fade in>
            <Media tag="li">
              <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
              </Media>
              <Media body className="ml-1">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
              </Media>
            </Media>
          </Fade>
        </div>
      )
    })
    return leaders
  };
}

function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb className="col-2">
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Remy, a young rat with an exceptional sense of taste and smell, dreams of becoming a chef like his idol, the late Auguste Gusteau. However, the rest of his colony, including his brother Émile and his father the clan leader Django, are interested in food only for sustenance. One day, while scavenging an elderly woman's house for ingredients, Remy accidentally reveals his clan to the woman. The rats are forced to flee, and Remy is separated from the others. He winds up in the sewers and, encouraged by an imaginary Gusteau, eventually finds himself above the kitchen of Gusteau's Restaurant in Paris.</p>
                    <p>Eventually, Skinner and the health inspector are released, and the restaurant is shut down due to health concerns, which causes Ego to lose his job and his credibility as a critic. However, Remy, Linguini and Colette open a popular new small bistro, La Ratatouille, which Ego invests in and frequently visits. The rat colony settles into the bistro's attic as their new home.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">2007</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Disney & Pixar</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$000, 000, 000</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-3">Anyone can cook but only the fearless will be great.</p>
                                <footer className="blockquote-footer">Auguste Gusteau
                                <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
            </div>
            <div className="container">
              <Stagger in>
                <Media list className="list-unstyled">
                    <RenderLeader leaders={props.leaders} />
                </Media>
              </Stagger>
            </div>
        </div>
    );
}

export default About;
