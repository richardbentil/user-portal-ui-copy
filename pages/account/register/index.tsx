import React, { useState } from 'react'
import EmailInput from '../../../components/form/TextInput';
import PasswordInput from '../../../components/form/PasswordInput'
import TextInput from '../../../components/form/TextInput';

function Register() {
  const [inputs, setinputs] = useState({})

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(inputs)
    }

  return (
      <div className="container-fluid">
        <div className="row vh-100">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-md-center p-0 pe-lg-0">
                <div className="card mt-5 mb-lg-5 ms-lg-5 account-card-right">
                    <div className="card-body p-lg-4">
                                                <div className="mt-4">
                                                    <img src="/img/logo.png" className="img-responsive" alt="logo" /> 
                                                </div>
                                                <div className="col-lg-9 col-xl-8">
                                                    <h4 className="card-title mt-4 fw-bold mb-0">Create an account</h4>
                                                    <p className="card-text text-muted">Create an account with gepa and easily apply for your export license</p>
                                                </div>
                                                <form className="my-4" onSubmit={handleSubmit}>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email" className="mb-2">Email Address</label>
                                                       <TextInput type={"email"} id={"email"} name={"email"} placeHolder={"Enter Email"} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="name" className="mb-2">Company Name</label>
                                                         <TextInput type={"text"} id={"companyName"} name={"companyName"} placeHolder={"Enter Compnay Name"} />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <label htmlFor="email"  className="mb-2">Password</label>
                                                        <PasswordInput />
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="d-grid gap-5">
                                                            <button className="btn btn-primary text-center shadow" type="button">
                                                            Create account</button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 mb-4 text-center">
                                                        <span className="text-muted">Already registered? </span><a href="login.html" className="mt-2">Log Into account</a>
                                                    </div>
                                                </form>
                    </div>

                </div>
            </div>
            <div className="col-lg-6 bg-light d-flex justify-content-center align-items-center p-0 card-bg-gradient py-md-5 py-xl-0">
                <div className="vh-100 p-lg-5 gradient-inner">
                    <div className="d-flex justify-content-center justify-content-lg-end justify-content-xl-center">
                        <img src="/img/cloud.svg" width="350" alt="logo" className="my-4 img-responsive cloud-img" />
                    </div>
                    <div className="text-center px-3 px-md-4 pb-4">
                        <h4>Powerful and Simple onboarding for Ghana’s Exporters</h4>
                        <h6 className="fw-normal mt-3">Register and apply to get your licensed ceritifcate from the comfort of your home, created just for you</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register