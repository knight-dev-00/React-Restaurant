import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
  if (isLoading) {
    return(
      <Loading />
    )
  } else if (errMess) {
    return(
      <h4>{errMess}</h4>
    )
  } else {
    return(
      <FadeTransform in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
          <CardBody>
            <CardImg src={'https://localhost:3443/' + item.image} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    )
  }
}

function Home(props) {
  return(
    <div className="container">
      <div className="row align-items-start">
        <div className="col-md m-1">
          <RenderCard key={props.dish} item={props.dish}
            isLoading={props.dishLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard key={props.promotion} item={props.promotion}
            isLoading={props.promotionLoading}
            errMess={props.promotionsErrMess}
          />
        </div>
        <div className="col-md m-1">
          <RenderCard key={props.leader} item={props.leader}
            isLoading={props.leaderLoading}
            errMess={props.leadersErrMess}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
