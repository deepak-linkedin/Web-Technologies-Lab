import React from "react";
import "./App.css";

function StudentCard({ name, department, marks }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

export default StudentCard;