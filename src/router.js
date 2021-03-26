import React, { Component } from "react";
import JobView from "./components/JobView";
import Header from "./components/Header";
import { Switch, Route, withRouter,Redirect} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/header" component={Header} />
        <Route path="/job/:id" component={JobView} />
        <Route exact path="/" render={() => (
    <Redirect to="/header"/>
)}/>
      </Switch>
    );
  }
}

export default withRouter(Router);