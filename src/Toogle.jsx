import React from 'react'
import { Container } from 'react-bootstrap'
import img from "./assets/pic2.jpg"

export default function Toogle() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#e9f7f7" }} // light teal background
    >
      <div
        className="form-signin text-center p-4 rounded shadow"
        style={{ 
          maxWidth: "350px", 
          backgroundColor: "#ffffff", // white card
          color: "#333" // dark grey text
        }}
      >
        <img
          className="mb-4 rounded-circle border border-teal"
          src={img}
          alt=""
          width="80"
          height="80"
          style={{ border: "3px solid #009688" }}
        />
        <button 
          className="btn btn-lg w-100"
          type="submit"
          style={{ 
            backgroundColor: "#009688", 
            color: "white", 
            fontWeight: "bold", 
            border: "none" 
          }}
        >
          Admin
        </button>
        <br/>
        <br/>
        <button 
          className="btn btn-lg w-100"
          type="submit"
          style={{ 
            backgroundColor: "#009688", 
            color: "white", 
            fontWeight: "bold", 
            border: "none" 
          }}
        >
          Employee
        </button>
        <p className="mt-5 mb-3 text-muted">© 2025</p>
      </div>
    </Container>
  )
}
