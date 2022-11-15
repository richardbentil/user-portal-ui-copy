import React from "react";

function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-primary spinner-border-sm"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
