export const elem = [
  {
    key: "name",
    value: "",
    type: "text",
    validation: () => {},
    errorMessage: "Name error"
  },
  {
    key: "surname",
    value: "",
    type: "text",
    validation: () => {},
    errorMessage: "Surname error"
  },
  {
    key: "age",
    value: 0,
    type: "number",
    validation: () => {},
    errorMessage: "Age error"
  },
  {
    key: "email",
    value: "",
    type: "email",
    validation: values => {
      values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
    },
    errorMessage: "Email error"
  }
];

export const init = {
  name: "",
  surname: "",
  age: 0,
  email: ""
};
