// src/Pages/Terminated.jsx
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { terminated_list } from "../HardCoded_data/terminated_list";

// Terminated Card
function TerminatedCard({ v }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">
          <strong>Project:</strong> {v.project}
        </h5>
        <p className="card-text">
          <strong>Reason:</strong> {v.reason}
        </p>
        <p className="card-text">
          <strong>Date of Termination:</strong> {v.date_of_termination}
        </p>
        <p className="card-text">
          <strong>Team:</strong> {v.team}
        </p>
      </div>
    </div>
  );
}

export default function Terminated() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Terminated Projects</h1>
            </div>

            {/* Grid row for terminated projects */}
            <div className="row">
              {terminated_list.map((t, i) => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <TerminatedCard v={t} />
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
