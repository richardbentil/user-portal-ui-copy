import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  id: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  valid?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function TextInput({
  name,
  id,
  type,
  placeholder,
  handleChange,
  required,
  valid,
}: IProps) {
  return (
    <React.Fragment>
      <input
        type={type}
        className={`form-control ${!valid ? "is-invalid" : ""}`}
        required={required ? required : false}
        name={name}
        id={id}
        aria-describedby="helpId"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}

export default TextInput;
