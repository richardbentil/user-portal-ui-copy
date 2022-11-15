import React, { ChangeEvent, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface IProps {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function PasswordInput({ handleChange }: IProps): any {
  const [type, setType] = useState("password");
  return (
    <div className="input-group mb-3">
      <input
        onChange={handleChange}
        type={type}
        className="form-control password-input"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <span className="input-group-text border-0" id="passwordAddon">
        <MdOutlineRemoveRedEye onClick={() => setType("text")} />
      </span>
    </div>
  );
}

export default PasswordInput;
