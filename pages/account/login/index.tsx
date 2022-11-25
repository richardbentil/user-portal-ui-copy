import PasswordInput from "../../../components/form/PasswordInput";
import TextInput from "../../../components/form/TextInput";
import Link from "next/link";
import AccountBanner from "../../../components/AccountBanner";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import Spinner from "../../../components/Spinner";
import controller from "../../../controller";
import { APIRoutes } from "../../../api-routes/apiRoutes";
import { Form, Formik } from "formik";
import { loginSchema } from "../../../form-schemas";

function Login() {
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
                    <div className="mt-4 mt-xl-2 mt-xxl-4">
                      <LogoBanner />
                      <div className="col-lg-9 col-xl-8 mb-4 mb-xl-2 mb-xxl-4">
                        <h5 className="card-title mt-4 fw-bold mb-0">
                          Welcome back
                        </h5>
                        <p className="card-text text-muted">
                          Log into your account with
                        </p>
                      </div>
                      {error && <p className="text-danger">Error: {error}</p>}
                        <Formik
                          initialValues={{email: "", password: ""}}
                          validationSchema={loginSchema}
                          onSubmit={handleSubmit}
                        >
                          {({ isSubmitting }) => (
                            <Form>
                              <div className="form-group mb-3 mb-xl-2 mb-xxl-3 has-validation">
                                <label htmlFor="email" className="mb-2">
                                  Email Address
                                </label>
                                <TextInput type="email" id="email" name="email" placeholder="Enter an email" />
                                </div>
                              <div className="form-group has-validation">
                                <label htmlFor="password" className="mb-2">
                                  Password
                                </label>
                                    <PasswordInput id="password" name="password" placeholder="Enter a password" />
                                <p className="text-end mt-2">
                                  <Link
                                    href="/account/forgot-password"
                                    className="text-decoration-none text-danger"
                                  >
                                    Forgot password?
                                  </Link>
                                </p>
                              </div>
                            <div className="relative d-flex align-items-center justify-content-center mb-4 mb-xl-2 mb-xxl-4">
                              <hr className="h-2px w-100" />
                              <p className="shrink-0 text-center text-uppercase text-muted px-3 text-nowrap">or</p>
                              <hr className="h-2px w-100" />
                            </div>
                                  <div className="d-grid gap-3 mb-3 mb-xl-1 mb-xxl-3">
                                    <button
                                      onClick={handleAouth}
                                      className="btn btn-outline-grey text-center d-flex align-items-center px-lg-4"
                                      type="button"
                                    >
                                      <img
                                        src="/img/gov-logo.png"
                                        width="100"
                                        className="me-3"
                                      />
                                      <span className="gov-login-text ">
                                        Login with your ghana.gov account
                                      </span>
                                    </button>
                                    <button
                                        className="btn btn-primary text-center shadow"
                                        type="submit"
                                        disabled={isSubmitting || loading}
                                    >
                                      {loading ? <Spinner /> : "Log Into account"}
                                    </button>
                                  
                                  </div>
                                  </Form>
                          )}
                        </Formik>
                        <p className="mt-4 mb-4 mb-xl-2 mb-xxl-5 text-center">
                          <span className="text-muted">Not registered yet? </span>
                          <Link href="/account/register" className="mt-2">
                            Create An Account
                          </Link>
                        </p>
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

