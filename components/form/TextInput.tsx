import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  id: string;
  type?: string;
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function TextInput({ name, id, type, placeholder, handleChange }: IProps) {
  return (
    <input
      type={type}
      className="form-control"
      name={name}
      id={id}
      aria-describedby="helpId"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default TextInput;
