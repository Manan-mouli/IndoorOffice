import React from 'react';
import { Container } from 'react-bootstrap';
import img from "./assets/pic2.jpg";
import { useNavigate } from 'react-router-dom';

export default function Toogle() {
  const navigate = useNavigate();
  const employeeId = "68c27d2aaf658ffa47bdf76c"; // Replace with dynamic ID if needed

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#e9f7f7" }}
    >
      <div
        className="form-signin text-center p-4 rounded shadow"
        style={{ maxWidth: "350px", backgroundColor: "#ffffff", color: "#333" }}
      >
        <img
          className="mb-4 rounded-circle border border-teal"
          src={img}
          alt=""
          width="80"
          height="80"
          style={{ border: "3px solid #009688" }}
          onClick={() => navigate('/')}
        />

        <button
          className="btn btn-lg w-100 mb-3"
          style={{ backgroundColor: "#009688", color: "white", fontWeight: "bold", border: "none" }}
          onClick={() => navigate('/employees')}
        >
          Admin
        </button>

        <button
          className="btn btn-lg w-100"
          style={{ backgroundColor: "#009688", color: "white", fontWeight: "bold", border: "none" }}
          onClick={() => navigate(`/recrute/${employeeId}`)}
        >
          Employee
        </button>

        <p className="mt-5 mb-3 text-muted">© 2025</p>
      </div>
    </Container>
  );
}
