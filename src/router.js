import React, { Component } from "react";
import JobView from "./components/JobView";
import Header from "./components/Header";
import { Switch, Route, withRouter} from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Header} />
        <Route path="/job/:id" component={JobView} />
)}/>
      </Switch>
    );
  }
}

export default withRouter(Router);