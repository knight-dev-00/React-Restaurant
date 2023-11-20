import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { Stagger, Fade } from 'react-animation-components';

function Favourites(props) {
  const RenderFavourites = (favourites) => {
    return favourites.favourites.map((favourite) => {
      return(
        <div key={favourite._id} className="row">
          <Fade in>
            <Media tag="li">
              <Media left middle>
                <Media object src={favourite.image} alt={favourite.name} />
              </Media>
              <Media body className="ml-1">
                <Media heading>{favourite.name}</Media>
                <p>{favourite.description}</p>
                <Button outline color="danger" onClick={() => props.deleteFavourite(favourite._id)}>
                  <span className="fa fa-times"></span>
                </Button>
              </Media>
            </Media>
          </Fade>
        </div>
      )
    })
  }
  return(
    <div className="container">
        <div className="row">
            <Breadcrumb className="col-2">
                <BreadcrumbItem><Link to="/profile">Profile</Link></BreadcrumbItem>
                <BreadcrumbItem active>Favourites</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Favourites</h3>
                <hr />
            </div>
        </div>
        <div className="container">
          <Stagger in>
            <Media list className="list-unstyled">
                {RenderFavourites(props.favourites)}
            </Media>
          </Stagger>
        </div>
    </div>
  )
}

export default Favourites;
