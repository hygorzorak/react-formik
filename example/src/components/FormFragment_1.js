import React from "react";

import { FormContext } from "./FormContext";

const FormFragment_1 = () => (
  <FormContext.Consumer>
    {data => (
      <div>
        <input
          type="email"
          name="email"
          onChange={data.handleChange}
          onBlur={data.handleBlur}
          value={data.values.email}
        />
        <input
          type="password"
          name="password"
          onChange={data.handleChange}
          onBlur={data.handleBlur}
          value={data.values.password}
        />
      </div>
    )}
  </FormContext.Consumer>
);

export default FormFragment_1;
