import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import TextInput from "../../../components/form/TextInput";
import Layout from "../../../components/layout/AccountLayout";
import LogoBanner from "../../../components/LogoBanner";
import Spinner from "../../../components/Spinner";
import { verificationCodeSchema } from "../../../form-schemas";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

function VerifyCode() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state) => state.responseReducer);

  const handleSubmit = async (values: any, actions: { resetForm: () => void; }) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  };

  return (
    <Layout title={"Verify Code"}>
      <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="p-3">
            <div className="card">
              <div className="card-body p-md-4 p-xl-5">
                <LogoBanner />
                <div className="col-md-9 mb-4 mb-lg-5">
                  <h4 className="card-title mt-4 fw-bold mb-0">
                    Verification Sent
                  </h4>
                  <p className="card-text text-muted">
                    A code has been sent to your mail please enter the code
                    below
                  </p>
                </div>
                {error && <p className="text-danger">Error: {error}</p>}
                <Formik
                initialValues={{verificationCode: ""}}
                validationSchema={verificationCodeSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group mb-4 has-validation">
                      <label htmlFor="verificationCode" className="mb-2">
                        Verification code
                      </label>
                      <TextInput type="text" id="verificationCode" name="verificationCode" placeholder="Enter verification code" />
                    </div>
                      <div className="d-grid gap-5 mb-3">
                          <button
                            className="btn btn-primary text-center shadow"
                            type="submit"
                            disabled={isSubmitting || loading}
                          >
                            {loading ?  <Spinner /> : "Send verification"}
                          </button>
                      </div>
                    <div className="mt-3 mb-5 text-center">
                    <a href="#" className="mt-2">
                      Send Code Again
                    </a>
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

export default VerifyCode;
