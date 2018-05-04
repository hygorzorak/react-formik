import React from "react";

import { FormContext } from "./FormContext";

const FormFragment_1 = () => (
  <FormContext.Consumer>
    {data => {
      console.log(data.errors.password)
      return (
        <div>
          <input
            type="email"
            name="email"
            onChange={data.handleChange}
            onBlur={data.handleBlur}
            value={data.values.email}
          />
          {data.touched.email &&
            data.errors.email && <div><small>{data.errors.email}</small></div>}
          <input
            type="password"
            name="password"
            onChange={data.handleChange}
            onBlur={data.handleBlur}
            value={data.values.password}
          />
          {data.touched.password &&
            data.errors.password && <div><small>{data.errors.password}</small></div>}
        </div>
      );
    }}
  </FormContext.Consumer>
);

export default FormFragment_1;
