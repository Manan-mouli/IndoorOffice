import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import "../css/Admin.css";
import { Employees } from "../HardCoded_data/employee_list";

// Employee Card
function EmployeeCard({ v, onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newVal = !isChecked;
    setIsChecked(newVal);
    if (newVal) {
      onCheck(true);   // notify parent when checked
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id={`emp-${v.s_no}`}
            checked={isChecked}
            onChange={handleChange}
          />
        </div>

        <h5 className="card-title">{v.s_no}. {v.name}</h5>
        <p className="card-text"><strong>Experience:</strong> {v.exp}</p>
        <p className="card-text"><strong>Status:</strong> {v.status}</p>
        <p className="card-text"><strong>Stack:</strong> {v.stack}</p>
      </div>
    </div>
  );
}

export default function EmployeesPage() {
  const [showButton, setShowButton] = useState(false);

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Employees</h1>
              {showButton && <button className="btn btn-success">Form Team</button>}
            </div>

            <div className="row">
              {Employees.map((emp) => (
                <div className="col-md-4 col-sm-6" key={emp.s_no}>
                  <EmployeeCard v={emp} onCheck={setShowButton} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
