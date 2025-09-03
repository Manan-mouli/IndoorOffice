import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUsers, faGears } from '@fortawesome/free-solid-svg-icons'
import "../css/Home.css"

export default function Features() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Our Features</h2>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

        {/* Feature 1 */}
        <div className="feature col text-center">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h3 className="fs-2 text-body-emphasis mt-3">Professional Offices</h3>
          <p>
            Modern workspaces designed to boost productivity and provide comfort for teams of all sizes.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature col text-center">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3 className="fs-2 text-body-emphasis mt-3">Team Collaboration</h3>
          <p>
            Spaces that encourage communication, teamwork, and innovative thinking across departments.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature col text-center">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faGears} />
          </div>
          <h3 className="fs-2 text-body-emphasis mt-3">Smart Solutions</h3>
          <p>
            Technology-driven solutions for office management, ensuring efficiency and reliability.
          </p>
        </div>

      </div>
    </div>
  )
}
