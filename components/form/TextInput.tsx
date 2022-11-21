import { useField } from "formik";
import React from "react";

function TextInput({ ...props }: any) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const err = error && touched;

  return (
    <>
      <input
        {...field}
        {...props}
        className={`form-control ${err ? "is-invalid" : ""}`}
        required
      />
      {err && <small className="form-text text-danger">{error}</small>}
    </>
  );
}

export default TextInput;
