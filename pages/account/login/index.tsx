import React, { FormEvent, useState } from "react";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";
import Link from "next/link";
import AccountBanner from "../../../components/AccountBanner";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ILoginInfo, loginInfo } from "../../../models/userModel";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import Spinner from "../../../components/Spinner";
import controller from "../../../controller";
import { APIRoutes } from "../../../routes/apiRoutes";

function Login() {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<ILoginInfo>(loginInfo);
  const { loading, error } = useAppSelector((state) => state.responseReducer);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(responsePending());
    setTimeout(() => {
      dispatch(clearResponse());
    }, 3000);
  };

  async function handleAouth() {
    try {
      const response = await controller<any>({
        baseURL: APIRoutes.ghanaGov.root,
        url: APIRoutes.ghanaGov.oauth,
        method: "get",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  ////////////
  return (
    <Layout title={"Login"}>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-md-center p-0 pe-lg-0">
            <div className="card mt-5 mb-lg-5 ms-lg-5 account-card-right">
              <div className="card-body p-lg-4">
                <div className="mt-4">
                  <LogoBanner />
                  <div className="col-lg-9 col-xl-8">
                    <h5 className="card-title mt-4 fw-bold mb-0">
                      Welcome back
                    </h5>
                    <p className="card-text text-muted">
                      Log into your account with
                    </p>
                  </div>
                  <form className="my-4" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="mb-2">
                        Email Address
                      </label>
                      <TextInput
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        handleChange={(e) =>
                          setInfo({ ...info, email: e.target.value })
                        }
                        placeholder={"Enter Email"}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="email" className="mb-2">
                        Password
                      </label>
                      <PasswordInput
                        handleChange={(e) =>
                          setInfo({ ...info, password: e.target.value })
                        }
                      />
                      <p className="text-end mt-2">
                        <Link
                          href="/account/forgot-password"
                          className="text-decoration-none"
                        >
                          Forgot password?
                        </Link>
                      </p>
                    </div>
                    <div className="mb-3">
                      <div className="d-grid gap-5">
                        <div className="d-grid gap-4">
                          <button
                            onClick={handleAouth}
                            className="btn btn-outline-grey text-center d-flex align-items-center"
                            type="button"
                          >
                            <img
                              src="/img/gov-logo.png"
                              width="100"
                              className="me-3"
                            />{" "}
                            <span className="text-truncate truncate-text">
                              Login withyour ghana.gov account
                            </span>
                          </button>
                          {loading ? (
                            <Spinner />
                          ) : (
                            <button
                              className="btn btn-primary text-center shadow"
                              type="button"
                              onClick={handleSubmit}
                            >
                              Log Into account
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 mb-4 text-center">
                      <span className="text-muted">Not registered yet? </span>
                      <Link href="/account/register" className="mt-2">
                        Create An Account
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <AccountBanner />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
