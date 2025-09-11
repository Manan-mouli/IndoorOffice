// FormTeam.jsx
import React, { useState } from "react";

export default function FormTeam({ selectedIds, onClose }) {
  const [teamName, setTeamName] = useState("");
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedIds.length === 0) return;

    const payload = {
      team_name: teamName,
      task,
      deadline,
      members: selectedIds,
      count: selectedIds.length
    };

    try {
      const res = await fetch("http://localhost:5000/api/team-entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Team created successfully!");
        onClose();
      } else {
        alert("Error creating team.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating team.");
    }
  };

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h4>Create Team</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>Team Name</label>
              <input
                className="form-control"
                value={teamName}
                onChange={e => setTeamName(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label>Task / Project Name</label>
              <input
                className="form-control"
                value={task}
                onChange={e => setTask(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label>Deadline</label>
              <input
                type="date"
                className="form-control"
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-primary" type="submit">
                Create Team
              </button>
              <button className="btn btn-secondary" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
