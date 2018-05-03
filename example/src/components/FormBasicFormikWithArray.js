import React from "react";
import { Formik } from "formik";

import { init } from "./array";

const FormBasicFormikWithArray = elem => (
  <div>
    <h1>Formik with Array</h1>
    <Formik
      initialValues={init}
      validate={values => {
        let errors = {};
        elem.data.map(el => {
          if (!values[el.key]) {
            errors[el.key] = "Required";
          } else if (el.validation(values[el.key])) {
            errors[el.key] = el.errorMessage;
          }
        });
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        console.log(values);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          {elem.data.map(el => (
            <div key={el.key}>
              <input
                type={el.type}
                name={el.key}
                placeholder={el.key}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[el.key]}
              />
              {touched[el.key] &&
                errors[el.key] && (
                  <div>
                    <small>{errors[el.key]}</small>
                  </div>
                )}
            </div>
          ))}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    />
  </div>
);

export default FormBasicFormikWithArray;
