import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

function renderDish(dish) {
  if (dish != null) {
    const commentsdisplay = dish.comments.map((comment) => {
      return (
        <div key="{comment.id}" className="mb-4">
          <p>{comment.comment}</p>{" "}
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </div>
      );
    });

    return (
      <div className="row row-content m-0">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className="col col-md-5">
          <h2>Comments</h2>
          {commentsdisplay}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail({ selectedDish }) {
  return (
    <div>
      <div>{renderDish(selectedDish)}</div>
    </div>
  );
}

export default DishDetail;
