import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import PasswordInput from "../../../components/form/PasswordInput";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import Spinner from "../../../components/Spinner";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

function ResetPassword() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.authReducer);
  const { loading } = useAppSelector((state) => state.responseReducer);
  const dispatch = useAppDispatch();
  //
  const [info, setInfo] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: "", confirmPassword: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(responsePending());
    setTimeout(() => {
      dispatch(clearResponse());
      router.push("/account/login");
    }, 3000);
  };

  return (
    <Layout title={"Reset Password"}>
      <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="p-3">
            <div className="card">
              <div className="card-body p-md-4 p-xl-5">
                <LogoBanner />
                <div className="col-md-9">
                  <h4 className="card-title mt-4 fw-bold mb-0">
                    Reset Your Password
                  </h4>
                  <p className="card-text text-muted">
                    Strong password are mixtures of letters, numbers and special
                    character
                  </p>
                </div>
                <form className="my-4" onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="mb-2">
                      New password
                    </label>
                    <PasswordInput
                      handleChange={(e) =>
                        setInfo({ ...info, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="email" className="mb-2">
                      Confirm password
                    </label>
                    <PasswordInput
                      placeholder="Confirm Password"
                      handleChange={(e) =>
                        setInfo({ ...info, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    {loading ? (
                      <Spinner />
                    ) : (
                      <button
                        className="btn btn-primary text-center shadow"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Reset Password
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
