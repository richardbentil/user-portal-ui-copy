import React from 'react'

function AccountBanner() {
  return (
     <div className="col-lg-6 bg-light d-flex justify-content-center align-items-center p-0 card-bg-gradient py-md-5 py-xl-0">
                <div className="vh-100 p-3 p-lg-5 gradient-inner">
                    <div className="d-flex justify-content-center justify-content-lg-end justify-content-xl-center">
                        <img src="/img/cloud.svg" width="350" alt="logo" className="my-4 img-responsive cloud-img" />
                    </div>
                    <div className="text-center px-3 px-md-4 pb-4">
                        <h4>Powerful and Simple onboarding for Ghana’s Exporters</h4>
                        <h6 className="fw-normal mt-3">Register and apply to get your licensed ceritifcate from the comfort of your home, created just for you</h6>
                    </div>
                </div>
    </div>
  )
}

export default AccountBanner