import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../css/Admin.css"; // custom styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileAlt,
  faCartShopping,
  faUsers,
  faChartLine,
  faPuzzlePiece,
  faPlusCircle,
  faCog,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Admin() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="sidebar col-md-3 col-lg-2 p-3 bg-theme text-white">
            <h5 className="px-3">Company Name</h5>
            <hr />
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faHouse} /> Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faFileAlt} /> Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faCartShopping} /> Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faUsers} /> Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faChartLine} /> Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faPuzzlePiece} /> Integrations
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading px-3 mt-4 mb-1 text-uppercase">
              Saved reports
              <a href="#" className="ms-2 text-white">
                <FontAwesomeIcon icon={faPlusCircle} />
              </a>
            </h6>
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faFileAlt} /> Current month
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faFileAlt} /> Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faFileAlt} /> Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faFileAlt} /> Year-end sale
                </a>
              </li>
            </ul>

            <hr />
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faCog} /> Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Sign out
                </a>
              </li>
            </ul>
          </div>

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
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
