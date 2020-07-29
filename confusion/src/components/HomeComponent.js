import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home({ dish, leader, promotion, dishesLoading, dishesErrMess }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <RenderCard
            item={dish}
            isLoading={dishesLoading}
            errMess={dishesErrMess}
          />
        </div>
        <div className="col-sm-4">
          <RenderCard
            item={leader}
            isLoading={dishesLoading}
            errMess={dishesErrMess}
          />
        </div>
        <div className="col-sm-4">
          <RenderCard
            item={promotion}
            isLoading={dishesLoading}
            errMess={dishesErrMess}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
