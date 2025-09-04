import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import "../css/Admin.css";

export default function Admin() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar (common component) */}
          <Sidebar />

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Share
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Export
                  </button>
                </div>
              </div>
            </div>

            <h2>Section title</h2>
            {/* your table or content here */}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
