import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
// import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />}></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          ></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
