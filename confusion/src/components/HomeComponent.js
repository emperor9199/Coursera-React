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
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
}

function Home({
  dish,
  leader,
  promotion,
  dishesLoading,
  dishesErrMess,
  promoLoading,
  promoErrMess,
}) {
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
            item={promotion}
            isLoading={promoLoading}
            errMess={promoErrMess}
          />
        </div>
        <div className="col-sm-4">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
