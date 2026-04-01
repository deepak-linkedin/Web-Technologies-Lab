// App.jsx
import React from "react";
import DataFetcher from "./DataFetcher";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Fetch Data from API</h1>
      <DataFetcher />
    </div>
  );
}

export default App;