// Components/Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faFileAlt,
  faPlusCircle,
  faCog,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar col-md-3 col-lg-2 p-3 bg-theme text-white">
      {/* Logo + Name */}
      <h5 className="px-3 d-flex align-items-center gap-2">
        <FontAwesomeIcon icon={faCalendarDays} />
        IndoorOffice
      </h5>

      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="/employees">
            <FontAwesomeIcon icon={faHouse} /> Employees
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/teams">
            <FontAwesomeIcon icon={faFileAlt} /> Teams
          </a>
        </li>
      </ul>

      <h6 className="sidebar-heading px-3 mt-4 mb-1 text-uppercase">
        Work reports :-
      </h6>
      <ul className="nav flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="/products">
            <FontAwesomeIcon icon={faFileAlt} /> Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/issues">
            <FontAwesomeIcon icon={faFileAlt} /> Issues
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/termineted">
            <FontAwesomeIcon icon={faFileAlt} /> Terminated
          </a>
        </li>
      </ul>
    </div>
  );
}
