import React, { Component, Fragment, createContext } from "react";
import { Formik } from "formik";
import { FormContext } from "./FormContext";

import FormFragment_1 from "./FormFragment_1";

class FormGroupWithFormik extends Component {
  state = { email: "teste@aaa.com", password: "******" };

  render() {
    return (
      <div>
        <h1>Form Group</h1>
        <Formik
          initialValues={this.state}
          validate={values => {
            let errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            console.log(values);
          }}
        >
          {({ values, touched, error, handleChange, handleSubmit }) => (
            <FormContext.Provider
              value={{
                values,
                touched,
                error,
                handleChange
              }}
            >
              <form onSubmit={handleSubmit}>
                <Fragment>
                  <FormFragment_1 />
                </Fragment>
                <button type="submit">Submit</button>
              </form>
            </FormContext.Provider>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormGroupWithFormik;
