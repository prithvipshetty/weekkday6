import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

function Mark() {
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Teacher's Dashboard</h5>
              <div className="d-grid">
                <button type="button" className="btn btn-dark btn-block"
                   > Mark </button>
                <br />
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mark;
