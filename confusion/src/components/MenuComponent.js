import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderMenuItem({ dish, isLoading, errMess }) {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Loading />
          </div>
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    );
}

function Menu(props) {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-sm-5 m-1">
        <RenderMenuItem
          dish={dish}
          isLoading={props.isLoading}
          errMess={props.errMess}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;
