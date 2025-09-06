// src/Pages/Issues.jsx
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { issues_list } from "../HardCoded_data/issues_list";

// Issue Card
function IssueCard({ v }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">
          <strong>Problem:</strong> {v.problem}
        </h5>
        <p className="card-text">
          <strong>Demand to Solve:</strong> {v.demand_to_solve}
        </p>
        <p className="card-text">
          <strong>Team Name:</strong> {v.team_name}
        </p>
        <p className="card-text">
          <strong>Date Reported:</strong> {v.date_reported}
        </p>
      </div>
    </div>
  );
}

export default function Issues() {
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
              <h1 className="h2">Issues</h1>
            </div>

            {/* Grid row for issues */}
            <div className="row">
              {issues_list.map((issue, i) => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <IssueCard v={issue} />
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
