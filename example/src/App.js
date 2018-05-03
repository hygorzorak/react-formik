import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import FormWithFormik from "./components/FormWithFormik";
import FormBasicFormik from "./components/FormBasicFormik";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="content">
              <h1>Home</h1>
              <Link to="/withformik">with Formik</Link> |{" "}
              <Link to="/formik">Formik Components</Link>
            </div>
          )}
        />
        <Route
          exact
          path="/withformik"
          render={() => (
            <div className="content">
              <FormWithFormik />
            </div>
          )}
        />
        <Route
          exact
          path="/formik"
          render={() => (
            <div className="content">
              <FormBasicFormik />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
