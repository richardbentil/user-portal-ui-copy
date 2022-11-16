import React, { ChangeEvent, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface IProps {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  valid?: boolean;
  name?: string;
}
function PasswordInput({
  handleChange,
  placeholder,
  valid,
  name,
}: IProps): any {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  return (
    <div className="input-group mb-3">
      <input
        type={isPassword ? "password" : "text"}
        className={`form-control password-input ${!valid ? "is-invalid" : ""}`}
        placeholder={placeholder ? placeholder : "Password"}
        aria-label="password"
        id="password"
        name={name ? name : "password"}
        aria-describedby="basic-addon1"
        onChange={handleChange}
      />
      <span className="input-group-text border-0" id="passwordAddon">
        {isPassword ? (
          <MdVisibilityOff
            onClick={() =>
              isPassword ? setIsPassword(false) : setIsPassword(true)
            }
          />
        ) : (
          <MdVisibility
            onClick={() =>
              isPassword ? setIsPassword(false) : setIsPassword(true)
            }
          />
        )}
      </span>
    </div>
  );
}

export default PasswordInput;
