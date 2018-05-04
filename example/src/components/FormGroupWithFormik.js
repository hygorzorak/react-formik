import React, { Component, Fragment, createContext } from "react";
import { Formik } from "formik";
import Yup from "yup";
import { FormContext } from "./FormContext";

import FormFragment_1 from "./FormFragment_1";

const passwordValidation = Yup.string()
  .min(4)
  .required();

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
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            let passwordIsValid = passwordValidation.isValidSync(values.password);
            if (!passwordIsValid)
                errors.password = "Erro password"

            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            console.log(values);
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur
          }) => (
            <FormContext.Provider
              value={{
                values,
                touched,
                errors,
                handleChange,
                handleBlur
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
