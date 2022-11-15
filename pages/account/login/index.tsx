import React, { useState } from 'react'
import PasswordInput from '../../../components/form/PasswordInput'
import TextInput from '../../../components/form/TextInput';
import Link from 'next/link';
import AccountBanner from '../../../components/AccountBanner';
import Layout from '../../../components/layout/AccountLayout';
import LogoBanner from '../../../components/LogoBanner';

function Login() {
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
                        <div className="mt-4">
                                <LogoBanner />
                                     <div className="col-lg-9 col-xl-8">
                                        <h5 className="card-title mt-4 fw-bold mb-0">Welcome back</h5>
                                        <p className="card-text text-muted">Log into your account with</p>
                                    </div>
                                  <form className="my-4" onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="mb-2">Email Address</label>
                                            <TextInput type={"email"} id={"email"} name={"email"} onChange={handleChange} placeHolder={"Enter Email"} />
                                        </div>
                                        <div className="form-group mb-4">
                                                        <label htmlFor="email"  className="mb-2">Password</label>
                                                        <PasswordInput />
                                                        <p className="text-end mt-2">
                                                            <Link href="/account/forgot-password" className="text-decoration-none">Forgot password?</Link>
                                                        </p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="d-grid gap-5">
                                                             <div className="d-grid gap-4">
                                                    <button className="btn btn-outline-grey text-center d-flex align-items-center" type="button">
                                                        <img src="/img/gov-logo.png" width="100" className="me-3" /> <span className="text-truncate truncate-text">Login withyour ghana.gov account</span>
                                                        </button>
                                                    <button className="btn btn-primary text-center shadow" type="button">Log Into account</button>
                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 mb-4 text-center">
                                                         <span className="text-muted">Not registered yet? </span><Link href="/account/register" className="mt-2">Create An Account</Link>
                                                    </div>
                                                </form>            
                    </div>
                </div>
            </div>
            </div>
           <AccountBanner />
        </div>
    </div>
</Layout>
  )
}

export default Login