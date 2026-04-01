import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  // Example student data
  const students = [
    { name: "B.Deepak", department: "CSE", marks: 95 },
    { name: "Rahul K", department: "ECE", marks: 78 },
    { name: "Anand S", department: "IT", marks: 92 },
    { name: "Ajay P", department: "ME", marks: 88 },
  ];

  return (
    <div className="container">
      <h1>Student Cards</h1><br/>
      <div className="cards-wrapper">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            department={student.department}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;