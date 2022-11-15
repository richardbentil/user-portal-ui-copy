import React, { ChangeEvent, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface IProps {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
function PasswordInput({ handleChange, placeholder }: IProps): any {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  return (
    <div className="input-group mb-3">
      <input
        type={isPassword ? "password" : "text"}
        className="form-control password-input"
        placeholder={placeholder ? placeholder : "Password"}
        aria-label="Username"
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
