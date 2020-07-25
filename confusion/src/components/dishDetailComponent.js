import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      const commentsdisplay = dish.comments.map((comment) => {
        return (
          <div key="{comment.id}" className="mb-4">
            <p>{comment.comment}</p>{" "}
            <p>
              -- {comment.author}, {comment.date}
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

  render() {
    return (
      <>
        <div>
          <div>{this.renderDish(this.props.selectedDish)}</div>
        </div>
      </>
    );
  }
}
