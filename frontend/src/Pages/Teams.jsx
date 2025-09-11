import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';

function TeamCard({ team }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" />
        </div>

        <h5 className="card-title"><strong>Team:</strong> {team.team_name}</h5>
        <p className="card-text"><strong>Members:</strong> {team.count}</p>
        <p className="card-text"><strong>Task:</strong> {team.task}</p>
        <p className="card-text"><strong>Deadline:</strong> {team.deadline}</p>
        <p className="card-text"><strong>Assumed Date:</strong> {team.assumed_date}</p>
      </div>
    </div>
  );
}

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Replace URL with your backend endpoint for fetching teams
    fetch("http://localhost:5000/api/team-view") 
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error("Error fetching teams:", err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Teams</h1>
            </div>

            <div className="row">
              {teams.length > 0 ? (
                teams.map((team) => (
                  <div className="col-md-4 col-sm-6" key={team._id}>
                    <TeamCard team={team} />
                  </div>
                ))
              ) : (
                <p>No teams found.</p>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
