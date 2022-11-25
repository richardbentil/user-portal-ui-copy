import TextInput from "../../../components/form/TextInput";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import Spinner from "../../../components/Spinner";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { forgotPasswordSchema } from "../../../form-schemas";
////
function ForgotPassword() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state) => state.responseReducer);

  const handleSubmit = async (values: any, actions: { resetForm: () => void; }) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  };

  function handleResetPassword() {
    dispatch(responsePending());
    setTimeout(() => {
      dispatch(clearResponse());
      router.push("/account/reset-password");
    }, 3000);
  }

  return (
    <Layout title={"Forgot Password"}>
      <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="p-3">
            <div className="card">
              <div className="card-body p-md-4 p-lg-4">
                <LogoBanner />
                <div className="col-md-9 mb-4 mb-xl-3 mb-xxl-4 mb-lg-5">
                  <h4 className="card-title mt-4 fw-bold mb-0">
                    Oops you forgot your password!
                  </h4>
                  <p className="card-text text-muted">
                    Don’t worry you can recover it with the email you used in
                    registration
                  </p>
                </div>
                  {error && <p className="text-danger">Error: {error}</p>}
              <Formik
                initialValues={{email: ""}}
                validationSchema={forgotPasswordSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group has-validation">
                      <label htmlFor="email" className="mb-1">
                        Email Address
                      </label>
                      <TextInput type="email" id="email" name="email" placeholder="Enter an email" />
                    </div>
                      <div className="d-grid gap-5 my-5">
                          <button
                            className="btn btn-primary text-center shadow"
                            type="submit"
                            disabled={isSubmitting || loading}
                          >
                            {loading ?  <Spinner /> : "Send verification"}
                          </button>
                      </div>
                  </Form>
                )}
              </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
