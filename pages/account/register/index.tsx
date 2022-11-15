import React, { useState } from 'react'
import PasswordInput from '../../../components/form/PasswordInput'
import TextInput from '../../../components/form/TextInput';
import Link from 'next/link';
import AccountBanner from '../../../components/AccountBanner';
import Layout from '../../../components/layout/AccountLayout';
import LogoBanner from '../../../components/LogoBanner';

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
      <Layout title={"Login"}>
      <div className="container-fluid">
        <div className="row vh-100">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-md-center p-0 pe-lg-0">
                <div className="card mt-5 mb-lg-5 ms-lg-5 account-card-right">
                    <div className="card-body p-lg-4">
                                                 <LogoBanner />
                                                <div className="col-lg-9 col-xl-8">
                                                    <h4 className="card-title mt-4 fw-bold mb-0">Create an account</h4>
                                                    <p className="card-text text-muted">Create an account with gepa and easily apply for your export license</p>
                                                </div>
                                                <form className="my-4" onSubmit={handleSubmit}>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email" className="mb-2">Email Address</label>
                                                        <TextInput type={"email"} id={"email"} name={"email"} onChange={handleChange} placeHolder={"Enter Email"} />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="name" className="mb-2">Company Name</label>
                                                        <TextInput type={"text"} id={"companyName"} name={"companyName"} onChange={handleChange} placeHolder={"Enter Compnay Name"} />
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
                                                        <span className="text-muted">Already registered? </span><Link href="/account/login" className="mt-2">Log Into account</Link>
                                                    </div>
                                                </form>
                    </div>

                </div>
            </div>
           <AccountBanner />
        </div>
            </div>
            </Layout>
  )
}

export default Register