import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import FormTeam from "./FormTeam"; // import the new modal component
import "../css/Admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Employee Card Component
function EmployeeCard({ v, onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newVal = !isChecked;
    setIsChecked(newVal);
    onCheck(newVal); // notify parent whether checked or unchecked
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id={`emp-${v._id}`}
            checked={isChecked}
            onChange={handleChange}
          />
        </div>

        <h5 className="card-title">{v.employ_name}</h5>
        <p className="card-text"><strong>ID:</strong> {v.employ_id}</p>
        <p className="card-text"><strong>Experience:</strong> {v.exp}</p>
        <p className="card-text"><strong>Status:</strong> {v.status}</p>
        <p className="card-text"><strong>Stack:</strong> {v.stack}</p>
      </div>
    </div>
  );
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [checkedEmployees, setCheckedEmployees] = useState({});
  const [showForm, setShowForm] = useState(false);

  // Fetch employees from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/employee-view")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  // Handle checkbox toggle
  const handleCheck = (id, isChecked) => {
    setCheckedEmployees(prev => ({
      ...prev,
      [id]: isChecked
    }));
  };

  // Show "Form Team" button only if at least one employee is checked
  const showButton = Object.values(checkedEmployees).some(Boolean);

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Employees</h1>
              {showButton && (
                <button
                  className="btn btn-success"
                  onClick={() => setShowForm(true)}
                >
                  Form Team
                </button>
              )}
            </div>

            <div className="row">
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <div className="col-md-4 col-sm-6" key={emp._id}>
                    <EmployeeCard
                      v={emp}
                      onCheck={(isChecked) => handleCheck(emp._id, isChecked)}
                    />
                  </div>
                ))
              ) : (
                <p>No employees found.</p>
              )}
            </div>

            {/* Show FormTeam modal when button is clicked */}
            {showForm && (
              <FormTeam
                selectedIds={Object.keys(checkedEmployees).filter(id => checkedEmployees[id])}
                onClose={() => setShowForm(false)}
              />
            )}

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
