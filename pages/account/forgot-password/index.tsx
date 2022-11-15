import React, { useState } from 'react'
import TextInput from '../../../components/form/TextInput';
import Layout from '../../../components/layout/AccountLayout'
import LogoBanner from '../../../components/LogoBanner';

function ForgotPassword() {
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
    <Layout title={"Forgot Password"}>
        <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="p-3">
                    <div className="card">
                          <div className="card-body p-md-4 p-xl-5">
                              <LogoBanner />
                            <div className="col-md-9">
                            <h4 className="card-title mt-4 fw-bold mb-0">Oops you forgot your password!</h4>
                            <p className="card-text text-muted">Don’t worry you can recover it with the email you used in registration</p>
                            </div>
                            <form className="my-4" onSubmit={handleSubmit}>
                                <div className="form-group mb-5">
                                    <label htmlFor="email" className="mb-2">Email Address</label>
                                    <TextInput type={"email"} id={"email"} name={"email"} onChange={handleChange} placeHolder={"Enter Email"} />
                                </div>
                                <div className="mb-3 d-grid">
                                    <button className="btn btn-primary text-center shadow" type="submit">Send verification</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword