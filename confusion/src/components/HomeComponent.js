import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

function RenderCard({ item }) {
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

function Home({ dish, leader, promotion }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <RenderCard item={dish} />
        </div>
        <div className="col-sm-4">
          <RenderCard item={leader} />
        </div>
        <div className="col-sm-4">
          <RenderCard item={promotion} />
        </div>
      </div>
    </div>
  );
}

export default Home;
