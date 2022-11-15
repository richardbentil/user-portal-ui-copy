import React, { useState } from "react";
import TextInput from "../../../components/form/TextInput";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";

function VerifyCode() {
  const [inputs, setinputs] = useState({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Layout title={"Verify Code"}>
      <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="p-3">
            <div className="card">
              <div className="card-body p-md-4 p-xl-5">
                <LogoBanner />
                <div className="col-md-9">
                  <h4 className="card-title mt-4 fw-bold mb-0">
                    Verification Sent
                  </h4>
                  <p className="card-text text-muted">
                    A code has been sent to your mail please enter the code
                    below
                  </p>
                </div>
                <form className="my-4" onSubmit={handleSubmit}>
                  <div className="form-group mb-5">
                    <label htmlFor="email" className="mb-2">
                      Verification code
                    </label>
                    <TextInput
                      type={"text"}
                      id={"verifyCode"}
                      name={"verifyCode"}
                      handleChange={handleChange}
                      placeholder={"Enter verification code"}
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <button
                      className="btn btn-primary text-center shadow"
                      type="submit"
                    >
                      Submit Code
                    </button>
                  </div>
                  <div className="mt-3 mb-5 text-center">
                    <a href="#" className="mt-2">
                      Send Code Again
                    </a>
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

export default VerifyCode;
