import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import FormWithFormik from "./components/FormWithFormik";
import FormBasicFormik from "./components/FormBasicFormik";
import FormBasicFormikWithArray from "./components/FormBasicFormikWithArray";

import "./App.css";

import { elem } from "./components/array.js";
import FormGroupWithFormik from "./components/FormGroupWithFormik";

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
              <Link to="/withformik">with Formik</Link> |
              <Link to="/formik"> Formik Components</Link> |
              <Link to="/formikwitharray"> Formik With Array</Link>
              <Link to="/formgroup"> Form Group</Link>
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
        <Route
          exact
          path="/formikwitharray"
          render={() => (
            <div className="content">
              <FormBasicFormikWithArray data={elem} />
            </div>
          )}
        />
        <Route
          exact
          path="/formGroup"
          render={() => (
            <div className="content">
              <FormGroupWithFormik />
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(App);
