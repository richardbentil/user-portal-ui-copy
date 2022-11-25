import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Spinner from "../../../components/Spinner";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import { Formik, Form } from "formik";
import { signUpSchema } from "../../../form-schemas";
import Link from "next/link";
import LogoBanner from "../../../components/LogoBanner";
import AccountBanner from "../../../components/AccountBanner";
import Layout from "../../../components/layout/AccountLayout";

function Register() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.responseReducer);

  const handleSubmit = async (values: any, actions: { resetForm: () => void; }) => {
    console.log(values)
    try {
      dispatch(responsePending());
      setTimeout(() => {
        dispatch(clearResponse());
      }, 3000);
    } catch (error: any) {
      console.log(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  }

  return (
  <Layout title={"Register"}>
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-md-center p-0 pe-lg-0">
          <div className="card mt-5 mb-lg-5 ms-lg-5 account-card-right">
            <div className="card-body p-lg-4">
              <div className="mt-4 mt-xl-2 mt-xxl-4">
                <LogoBanner />
              </div>
              <div className="col-lg-9 col-xl-8 mb-4 mb-xl-2 mb-xxl-4">
                <h4 className="card-title mt-4 fw-bold mb-0">
                  Create an account
                </h4>
                <p className="card-text text-muted">
                  Create an account with gepa and easily apply for your export
                  license
                </p>
              </div>
                {error && <p className="text-danger">Error: {error}</p>}
              <Formik
                initialValues={{email: "", company: "", password: ""}}
                validationSchema={signUpSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group mb-3 mb-xl-2 mb-xxl-3 has-validation">
                      <label htmlFor="email" className="mb-1">
                        Email Address
                      </label>
                      <TextInput type="email" id="email" name="email" placeholder="Enter an email" />
                    </div>
                    <div className="form-group mb-3 mb-xl-2 mb-xxl-3 has-validation">
                      <label htmlFor="company" className="mb-1">
                        Company Name
                      </label>
                      <TextInput type="text" id="company" name="company" placeholder="Enter company name" />
                    </div>
                    <div className="form-group has-validation mb-3 mb-xl-2 mb-xxl-3">
                      <label htmlFor="password" className="mb-1">
                        Password
                      </label>
                        <PasswordInput id="password" name="password" placeholder="Enter a password" />
                        <p className="form-text text-muted small mt-2">
                          Should contain, 1 uppercase, lowercase, number and a special character
                        </p>
                    </div>
                      <div className="d-grid gap-5 my-3 my-xl-4 my-xxl-3">
                          <button
                            className="btn btn-primary text-center shadow"
                            type="submit"
                            disabled={isSubmitting || loading}
                          >
                            {loading ?  <Spinner /> : "Create account"}
                          </button>
                      </div>
                  </Form>
                )}
              </Formik>
              <p className="mt-3 mb-4 text-center my-xl-4">
                  <span className="text-muted">Already registered? </span>
                    <Link href="/account/login" className="mt-2">
                       Log Into account
                    </Link>
              </p>
            </div>
          </div>
        </div>
       <AccountBanner />
      </div>
    </div>
  </Layout>
  );
}

export default Register;
