import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import EmployeeHeader from "../../Components/EmployeeHeader";

export default function Recrute() {
  const { employeeId } = useParams(); // get employeeId from URL
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!employeeId) return;

    const fetchTeams = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/my-teams/${employeeId}`);
        if (!res.ok) throw new Error("Failed to fetch teams");

        const data = await res.json();
        setTeams(data);
      } catch (err) {
        console.error(err);
        alert("Error fetching teams");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [employeeId]);

  if (!employeeId) return <div>Please select an employee to view teams.</div>;
  if (loading) return <div>Loading your teams...</div>;
  if (!teams.length) return <div>No teams assigned yet.</div>;

  return (
    <div>
      <EmployeeHeader/>
      
      <h2>My Teams</h2>
      
      {teams.map((team) => (
        <div key={team._id} className="card mb-3 p-3">
          <h4>{team.team_name}</h4>
          <p><strong>Task:</strong> {team.task}</p>
          <p><strong>Deadline:</strong> {team.deadline}</p>
          <p><strong>Members:</strong></p>
          <ul>
            {team.members.map((member) => (
              <li key={member._id}>{member.employ_name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
