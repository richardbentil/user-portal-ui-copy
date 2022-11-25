import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import PasswordInput from "../../../components/form/PasswordInput";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import Spinner from "../../../components/Spinner";
import {
  clearResponse,
  responsePending,
} from "../../../features/slice/responseReducer";
import { resetPasswordSchema } from "../../../form-schemas";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

function ResetPassword() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.authReducer);
  const { loading } = useAppSelector((state) => state.responseReducer);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any, actions: { resetForm: () => void; }) => {
    console.log(values)
    dispatch(responsePending());
    setTimeout(() => {
      dispatch(clearResponse());
      router.push("/account/verify-code");
    }, 3000);

    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  };

  return (
    <Layout title={"Reset Password"}>
      <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="p-3">
            <div className="card">
              <div className="card-body p-md-4 p-lg-4">
                <LogoBanner />
                <div className="col-md-9 mb-4 mb-xl-3 mb-xxl-4 mb-lg-5">
                  <h4 className="card-title mt-4 fw-bold mb-0">
                    Reset Your Password
                  </h4>
                  <p className="card-text text-muted">
                    Strong password are mixtures of letters, numbers and special
                    character
                  </p>
                </div>
                <Formik
                  initialValues={{ password: "", confirmPassword:  ""}}
                validationSchema={resetPasswordSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                      <div className="form-group has-validation mb-3">
                            <label htmlFor="password" className="mb-1">
                              New Password
                            </label>
                            <PasswordInput id="password" name="password" placeholder="Enter new password" />
                      </div>
                      <div className="form-group has-validation mb-5">
                            <label htmlFor="confirmPassword" className="mb-1">
                              Confirm Password
                            </label>
                            <PasswordInput id="confirmPassword" name="confirmPassword" placeholder="Enter password one more time" />
                      </div>
                      <div className="d-grid gap-5 mb-3">
                          <button
                            className="btn btn-primary text-center shadow"
                            type="submit"
                            disabled={isSubmitting || loading}
                          >
                          {loading ?  <Spinner /> : "Reset password"}
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

export default ResetPassword;
