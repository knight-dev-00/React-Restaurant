import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({dish, onClick}) {
  return(
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg src={dish.image} alt={dish.name} />
        <CardImgOverlay body className="ml-5">
          <CardTitle heading>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return(
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    )
  })
  if (props.dishes.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  } else if (props.dishes.errMess) {
    <div className="container">
      <div className="row">
        <h4>{props.errMess}</h4>
      </div>
    </div>
  } else
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  )
}


export default Menu;
