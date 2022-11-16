import React, { useState } from "react";
import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";
import { registerInfo } from "../../../models/userModel";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Spinner from "../../../components/Spinner";
import { emailRegex, passwordRegex } from "../../../functions/auth/services";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import { Formik, Form } from "formik";

import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required()
    .matches(emailRegex, { message: "Invalid Email Address" }),
  company: Yup.string().required().min(4),
  password: Yup.string()
    .min(6)
    .matches(passwordRegex, { message: "Password Invalid" })
    .required(),
});

function Register() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.responseReducer);

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-md-center p-0 pe-lg-0">
          <div className="card mt-5 mb-lg-5 ms-lg-5 account-card-right">
            <div className="card-body p-lg-4">
              <div className="mt-4">
                <img
                  src="/img/logo.png"
                  className="img-responsive"
                  alt="logo"
                />
              </div>
              <div className="col-lg-9 col-xl-8">
                <h4 className="card-title mt-4 fw-bold mb-0">
                  Create an account
                </h4>
                <p className="card-text text-muted">
                  Create an account with gepa and easily apply for your export
                  license
                </p>
              </div>
              <Formik
                initialValues={registerInfo}
                validationSchema={FormValidationSchema}
                onSubmit={(data) => {
                  try {
                    dispatch(responsePending());
                    setTimeout(() => {
                      dispatch(clearResponse());
                    }, 3000);
                  } catch (error: any) {
                    console.log(error);
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group mb-3 has-validation">
                      <label htmlFor="email" className="mb-2">
                        Email Address
                      </label>
                      <TextInput
                        type={"email"}
                        id={"email"}
                        required
                        valid={!Boolean(touched.email && errors.email)}
                        name={"email"}
                        placeholder={"Enter Email"}
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group mb-3 has-validation">
                      <label htmlFor="name" className="mb-2">
                        Company Name
                      </label>
                      <TextInput
                        type={"text"}
                        required
                        valid={!Boolean(touched.company && errors.company)}
                        id={"companyName"}
                        name={"company"}
                        placeholder={"Enter Company Name"}
                      />
                      {touched.company && errors.company && (
                        <div className="invalid-feedback">{errors.company}</div>
                      )}
                    </div>
                    {errors.company}

                    <div className="form-group has-validation mb-5">
                      <label htmlFor="password" className="mb-2">
                        Password
                      </label>
                      <PasswordInput
                        name="password"
                        valid={!Boolean(touched.password && errors.password)}
                      />

                      {touched.password && errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <div className="d-grid gap-5">
                        {loading ? (
                          <Spinner />
                        ) : (
                          <button
                            disabled={loading}
                            className="btn btn-primary text-center shadow"
                            type="submit"
                          >
                            Create account
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 mb-4 text-center">
                      <span className="text-muted">Already registered? </span>
                      <a href="login" className="mt-2">
                        Log Into account
                      </a>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-light d-flex justify-content-center align-items-center p-0 card-bg-gradient py-md-5 py-xl-0">
          <div className="vh-100 p-lg-5 gradient-inner">
            <div className="d-flex justify-content-center justify-content-lg-end justify-content-xl-center">
              <img
                src="/img/cloud.svg"
                width="350"
                alt="logo"
                className="my-4 img-responsive cloud-img"
              />
            </div>
            <div className="text-center px-3 px-md-4 pb-4">
              <h4>Powerful and Simple onboarding for Ghana’s Exporters</h4>
              <h6 className="fw-normal mt-3">
                Register and apply to get your licensed ceritifcate from the
                comfort of your home, created just for you
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
