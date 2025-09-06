import React from "react";
import { Container } from "react-bootstrap";
import img from "../assets/pic2.jpg"
import { useNavigate } from "react-router-dom";

export default function Signin() {
  
  return (
    <Container
          fluid
          className="d-flex justify-content-center align-items-center vh-100"
          style={{ backgroundColor: "#e9f7f7" }} // light teal background
        >
          <form
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
            <h1 className="h4 mb-3" style={{ color: "#009688" }}>
              Please sign in
            </h1>
    
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-2"
              placeholder="Email address"
              required
              autoFocus
              style={{ border: "1px solid #009688" }}
            />
    
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-3"
              placeholder="Password"
              required
              style={{ border: "1px solid #009688" }}
            />
    
            <div className="checkbox mb-3 text-start">
              <label style={{ color: "#666" }}>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
    
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
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2025</p>
          </form>
        </Container>
  );
}
