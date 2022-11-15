import React, { useState } from 'react'
import PasswordInput from '../../../components/form/PasswordInput';
import Layout from '../../../components/layout/AccountLayout'
import LogoBanner from '../../../components/LogoBanner';

function ResetPassword() {
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
    <Layout title={"Reset Password"}>
        <div className="container w-100 vh-100 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className='p-3'>
                    <div className="card">
                        <div className="card-body p-md-4 p-xl-5">
                            <LogoBanner />
                            <div className="col-md-9">
                                <h4 className="card-title mt-4 fw-bold mb-0">Reset Your Password</h4>
                                <p className="card-text text-muted">Strong password are mixtures of letters, numbers and special character</p>
                            </div>
                            <form className="my-4" onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="mb-2">New password</label>
                                    <PasswordInput  />
                                </div>
                                <div className="form-group mb-5">
                                    <label htmlFor="email" className="mb-2">Confirm password</label>
                                    <PasswordInput  />
                                </div>
                                <div className="mb-3 d-grid">
                                    <button className="btn btn-primary text-center shadow" type="submit">Reset Password</button>
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

export default ResetPassword