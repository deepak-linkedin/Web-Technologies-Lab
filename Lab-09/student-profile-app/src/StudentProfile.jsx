import React from "react";
import "./App.css";

function StudentProfile() {
  const name = "B.Deepak";
  const department = "Computer Science";
  const reg = "23BCE9417";
  const year = "3rd Year";
  const section = "A";

  return (
    <div className="profile-card">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Registration:</strong> {reg}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
}

export default StudentProfile;