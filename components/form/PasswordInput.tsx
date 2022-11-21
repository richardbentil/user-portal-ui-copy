import { useField } from "formik";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function PasswordInput({ ...props }: any) {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const err = error && touched;

  return (
    <>
      <div className="input-group">
        <input
          type={isPassword ? "password" : "text"}
          className={`form-control password-input ${err ? "is-invalid" : ""}`}
          {...field}
          {...props}
          aria-describedby={props.name}
          autoComplete="off"
        />
        <span className="input-group-text border-0" id="passwordAddon">
          {isPassword ? (
            <MdVisibilityOff
              onClick={() => setIsPassword(false)}
              className="text-muted"
            />
          ) : (
            <MdVisibility onClick={() => setIsPassword(true)} />
          )}
        </span>
      </div>
      {err && <small className="form-text text-danger">{error}</small>}
    </>
  );
}

export default PasswordInput;
