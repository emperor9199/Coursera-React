import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish, comment) {
    if (dish != null && comment != null)
      return (
        <>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description} </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5">
              <h3>Comments</h3>
              <div>{comment}</div>
            </div>
          </div>
        </>
      );
    else return <div></div>;
  }

  render() {
    const comment = this.props.selectedComment.map((comment) => {
      return (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <br />
          <div>
            --{comment.author} {comment.date}
          </div>
        </div>
      );
    });

    return (
      <>
        <div>
          <div>{this.renderDish(this.props.selectedDish, comment)}</div>
        </div>
      </>
    );
  }
}
