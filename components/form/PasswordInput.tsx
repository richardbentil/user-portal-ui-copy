import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";



function PasswordInput(): any {
  const [type, setType] = useState("password")
  return (
    <div className="input-group mb-3">
      <input type={type} className="form-control password-input" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" />
      <span className="input-group-text border-0 bg-" id="passwordAddon"><MdOutlineRemoveRedEye onClick={() => setType("text")} /></span>
    </div>
  )
}

export default PasswordInput