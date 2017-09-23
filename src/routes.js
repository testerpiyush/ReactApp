import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import ProfileComponent from './components/Profile';
import TodoContainer from './containers/TodoContainer';

class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/profile" component={ProfileComponent} />
          <Route exact={true} path="/todo" component={TodoContainer} />

        </Switch>
      </Router>
    );
  }
}

export default Routes;
